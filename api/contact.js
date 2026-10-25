import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Load .env.local if present in development
  let localEnv = {};
  try {
    const envContent = fs.readFileSync(path.join(process.cwd(), '.env.local'), 'utf-8');
    envContent.split('\n').forEach(line => {
      const match = line.match(/^([^=]+)=(.*)$/);
      if (match) localEnv[match[1].trim()] = match[2].trim().replace(/^"|"$/g, '');
    });
  } catch (e) {
    // Ignore if file doesn't exist
  }

  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address.' });
    }

    const rawWebhook = process.env.SLACK_WEBHOOK_URL || localEnv.SLACK_WEBHOOK_URL || process.env.CONTACT_WEBHOOK_URL || localEnv.CONTACT_WEBHOOK_URL || '';
    const webhookUrl = rawWebhook.replace(/^"|"$/g, '').trim();

    if (webhookUrl) {
      try {
        let payload;

        if (webhookUrl.includes('hooks.slack.com')) {
          // Slack Incoming Webhook (Block Kit formatting)
          payload = {
            text: `📬 New Portfolio Message from ${name}`,
            blocks: [
              {
                type: "header",
                text: {
                  type: "plain_text",
                  text: "📬 New Portfolio Message Received",
                  emoji: true
                }
              },
              {
                type: "section",
                fields: [
                  {
                    type: "mrkdwn",
                    text: `*👤 Name:*\n${name}`
                  },
                  {
                    type: "mrkdwn",
                    text: `*📧 Email:*\n<mailto:${email}|${email}>`
                  },
                  {
                    type: "mrkdwn",
                    text: `*🏷️ Topic:*\n${subject || 'General'}`
                  },
                  {
                    type: "mrkdwn",
                    text: `*⏰ Time:*\n${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} (IST)`
                  }
                ]
              },
              {
                type: "divider"
              },
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: `*💬 Message:*\n>${message.replace(/\n/g, '\n>')}`
                }
              }
            ]
          };
        } else if (webhookUrl.includes('discord.com/api/webhooks')) {
          // Discord Webhook formatting
          payload = {
            content: `**📬 New Portfolio Message Received**`,
            embeds: [
              {
                title: `Inquiry: ${subject || 'General'}`,
                color: 0x3b82f6,
                fields: [
                  { name: "Name", value: name, inline: true },
                  { name: "Email", value: email, inline: true },
                  { name: "Message", value: message }
                ],
                timestamp: new Date().toISOString()
              }
            ]
          };
        } else {
          // Generic webhook
          payload = { name, email, subject, message, timestamp: new Date().toISOString() };
        }

        const webhookRes = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!webhookRes.ok) {
          const errText = await webhookRes.text();
          console.warn('Webhook responded with non-200 status:', webhookRes.status, errText);
        }
      } catch (err) {
        console.warn('Webhook dispatch failed, continuing:', err);
      }
    }

    console.log(`[Contact Message Received] From: ${name} <${email}> | Topic: ${subject} | Message: ${message.substring(0, 50)}...`);

    return res.status(200).json({ 
      success: true, 
      message: 'Your message has been received! Manuj will get back to you shortly.' 
    });
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return res.status(500).json({ error: 'Failed to process message. Please try emailing directly.' });
  }
}
