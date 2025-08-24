import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { FiMail, FiCheckCircle, FiMapPin, FiLoader, FiUser, FiMessageSquare, FiSend } from 'react-icons/fi';
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
        { icon: <FiMapPin />, text: 'Greater Noida, India' },
    ];

    const socialLinks = [
        { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/aditya-kumar-38093a304/' },
        { icon: <FaGithub />, href: 'https://github.com/AdityaChoudhary01' },
        { icon: <FaTwitter />, href: 'https://twitter.com/your-twitter' },
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
                    <div className="md:w-1/2 bg-gradient-to-br from-blue-500 to-purple-600 p-8 md:p-12 flex flex-col justify-center text-white">
                        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
                        <p className="mb-8 text-blue-100">
                            Have a project in mind or just want to say hello? I'd love to hear from you.
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
                                    <span className="text-2xl text-blue-200 mr-4">{item.icon}</span>
                                    {item.href ? (
                                        <a href={item.href} className="hover:underline text-blue-50">{item.text}</a>
                                    ) : (
                                        <span className="text-blue-50">{item.text}</span>
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
                                    className="text-3xl text-blue-200 hover:text-white transition-colors"
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
                                        <span className="absolute left-4 top-3.5 text-slate-400"><FiUser /></span>
                                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 pl-12 bg-white/50 dark:bg-slate-800/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-[var(--accent-color)] outline-none transition" required placeholder="Your Name" />
                                    </motion.div>
                                    <motion.div variants={fieldVariants} className="mb-6 relative">
                                        <span className="absolute left-4 top-3.5 text-slate-400"><FiMail /></span>
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 pl-12 bg-white/50 dark:bg-slate-800/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-[var(--accent-color)] outline-none transition" required placeholder="Your Email" />
                                    </motion.div>
                                    <motion.div variants={fieldVariants} className="mb-6 relative">
                                        <span className="absolute left-4 top-3.5 text-slate-400"><FiMessageSquare /></span>
                                        <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} className="w-full p-3 pl-12 bg-white/50 dark:bg-slate-800/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-[var(--accent-color)] outline-none transition" required placeholder="Your Message"></textarea>
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
                                        className="w-full flex items-center justify-center text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 disabled:opacity-50 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                                        whileHover={{ scale: loading ? 1 : 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
                                        whileTap={{ scale: loading ? 1 : 0.95 }}
                                    >
                                        {loading ? (
                                            <>
                                                <FiLoader className="animate-spin mr-2" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <FiSend className="ml-2" />
                                            </>
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
