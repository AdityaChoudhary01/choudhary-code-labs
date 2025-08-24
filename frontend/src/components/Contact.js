import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { FiMail, FiCheckCircle, FiPhone, FiMapPin, FiLoader } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [responseMsg, setResponseMsg] = useState('');
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const contactInfo = [
        { icon: <FiMail />, text: 'Adityanain55@gmail.com', href: 'mailto:Adityanain55@gmail.com' },
        { icon: <FiPhone />, text: '+91 7983183416', href: 'tel:+917983183416' },
        { icon: <FiMapPin />, text: 'Greater Noida, India' },
    ];

    const socialLinks = [
        { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/aditya-kumar-38093a304/' },
        { icon: <FaGithub />, href: 'https://github.com/AdityaChoudhary01' },
        { icon: <FaTwitter />, href: 'https://twitter.com/' },
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponseMsg('');
        setIsError(false);
        setIsSuccess(false);

        try {
            const response = await axios.post('https://portfolio3-cj9i.onrender.com/api/contact', formData);

            if (response.data.success) {
                setResponseMsg('Message sent successfully! I will get back to you soon.');
                setIsSuccess(true);
                setFormData({ name: '', email: '', message: '' });
            } else {
                setIsError(true);
                setResponseMsg(`Error: ${response.data.error || 'Something went wrong.'}`);
            }
        } catch (error) {
            setIsError(true);
            setResponseMsg('An unexpected error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const formVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
    };

    const fieldVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-screen">
            <motion.div
                className="glass-card w-full max-w-5xl overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="md:flex">
                    {/* Left Side: Info & Links */}
                    <div className="md:w-1/2 bg-blue-500/10 dark:bg-slate-800/20 p-8 md:p-12 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
                        <p className="mb-8 text-slate-600 dark:text-slate-300">
                            Have a project in mind or just want to say hello? Feel free to send me a message or connect with me on social media.
                        </p>
                        
                        <div className="space-y-4 mb-8">
                            {contactInfo.map((item, index) => (
                                <motion.div 
                                    key={index}
                                    className="flex items-center"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <span className="text-2xl text-[var(--accent-color)] mr-4">{item.icon}</span>
                                    {item.href ? (
                                        <a href={item.href} className="hover:underline">{item.text}</a>
                                    ) : (
                                        <span>{item.text}</span>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex space-x-6">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-3xl text-slate-600 dark:text-slate-300 hover:text-[var(--accent-color)] transition-colors"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: (contactInfo.length + index) * 0.2 }}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full md:w-1/2 p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-center mb-8">Send Me a Message</h2>
                        <AnimatePresence>
                            {isSuccess ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="text-center p-4 rounded-lg bg-green-500/20 text-green-500"
                                >
                                    <FiCheckCircle className="mx-auto text-4xl mb-2" />
                                    <p>{responseMsg}</p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    variants={formVariants}
                                    initial="hidden"
                                    animate="visible"
                                    onSubmit={handleSubmit}
                                >
                                    <motion.div variants={fieldVariants} className="mb-6 relative">
                                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="peer w-full p-3 bg-white/50 dark:bg-slate-800/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-[var(--accent-color)] outline-none transition placeholder-transparent" required placeholder="Your Name" />
                                        <label htmlFor="name" className="absolute left-3 -top-2.5 text-sm text-slate-600 dark:text-slate-300 bg-[var(--bg-color)] px-1 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[var(--accent-color)]">Your Name</label>
                                    </motion.div>
                                    <motion.div variants={fieldVariants} className="mb-6 relative">
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="peer w-full p-3 bg-white/50 dark:bg-slate-800/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-[var(--accent-color)] outline-none transition placeholder-transparent" required placeholder="Your Email" />
                                        <label htmlFor="email" className="absolute left-3 -top-2.5 text-sm text-slate-600 dark:text-slate-300 bg-[var(--bg-color)] px-1 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[var(--accent-color)]">Your Email</label>
                                    </motion.div>
                                    <motion.div variants={fieldVariants} className="mb-6 relative">
                                        <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} className="peer w-full p-3 bg-white/50 dark:bg-slate-800/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-[var(--accent-color)] outline-none transition placeholder-transparent" required placeholder="Your Message"></textarea>
                                        <label htmlFor="message" className="absolute left-3 -top-2.5 text-sm text-slate-600 dark:text-slate-300 bg-[var(--bg-color)] px-1 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[var(--accent-color)]">Your Message</label>
                                    </motion.div>

                                    {responseMsg && !isSuccess && (
                                        <p className={`text-center mb-4 ${isError ? 'text-red-500' : 'text-green-500'}`}>
                                            {responseMsg}
                                        </p>
                                    )}

                                    <motion.button
                                        variants={fieldVariants}
                                        type="submit"
                                        disabled={loading}
                                        style={{ backgroundColor: 'var(--accent-color)' }}
                                        className="w-full flex items-center justify-center text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 disabled:opacity-50"
                                        whileHover={{ scale: loading ? 1 : 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
                                        whileTap={{ scale: loading ? 1 : 0.95 }}
                                    >
                                        {loading ? (
                                            <>
                                                <FiLoader className="animate-spin mr-2" />
                                                Sending...
                                            </>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </motion.button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
