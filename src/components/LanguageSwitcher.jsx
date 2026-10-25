import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.scss';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const currentLang = (i18n?.resolvedLanguage || i18n?.language || 'en').split('-')[0] || 'en';

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="language-switcher">
      <select 
        value={currentLang} 
        onChange={changeLanguage} 
        className="language-switcher__select" 
        aria-label="Select Language"
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
        <option value="fr">FR</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
