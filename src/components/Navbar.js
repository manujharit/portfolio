import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const Links = [
        { name: 'Timeline', link: '/timeline' },
        { name: 'Work', link: '/work' },
        { name: 'About', link: '/about' },
        { name: 'Tech', link: '/tech' }
    ]

    const handleLinkClick = () => {
        setIsOpen(false);
        window.scroll(0, 0)
    };

    const handleLink = () => {
        window.scrollTo(0, 0)
    }
    useEffect(() => {
        if (!isOpen) {
            window.scrollTo(0, 0)
        }
    })

    return (
        <div className='z-10 fixed top-0 flex items-center justify-between bg-opacity-50 bg-white/50 backdrop-blur-sm border lg:my-[1%] px-[5%] w-[100%] md:w-[85%] lg:w-[80%] xl:w-[50%] md:rounded-2xl lg:rounded-2xl h-[7%] drop-shadow-md shadow-gray-700'>
            <div className='flex justify-center w-[50%] md:w-[40%] lg:w-[40%] '>
                <Link to='/' className='font-extrabold text-[150%] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500' onClick={handleLink}>{"</> MANUJ"}</Link>
            </div>
            <div className='hidden md:flex justify-between w-[45%]'>
                {Links.map(link => <Link key={link.name} to={link.link} className='text-black hover:text-violet-500 font-semibold' onClick={handleLink}>{link.name}</Link>)}
            </div>
            <div className='md:hidden flex items-center mr-5'>
                <button onClick={() => setIsOpen(!isOpen)} className='text-transparent text-2xl bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 font-bold '>
                    ☰
                </button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className='absolute z-10 top-0 right-0 w-[50%] h-screen bg-white border md:hidden'
                    >
                        <motion.div
                            className='flex flex-col justify-start pr-[21%] text-end pt-[5%]'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <motion.button
                                onClick={() => setIsOpen(!isOpen)}
                                className='text-end text-transparent text-2xl bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 font-bold'
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                X
                            </motion.button>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Link key='Home' to='/' className='block text-[120%] font-bold p-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500' onClick={handleLinkClick}>
                                    Home
                                </Link>
                                {Links.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + (index * 0.1) }}
                                    >
                                        <Link to={link.link} className='block text-[120%] font-bold p-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500' onClick={handleLinkClick}>
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Navbar
