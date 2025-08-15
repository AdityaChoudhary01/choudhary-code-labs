import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FiMail, FiCheckCircle } from 'react-icons/fi';

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

    return (
        <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-screen">
            <motion.div
                className="glass-card w-full max-w-4xl overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="md:flex">
                    {/* Left Side: Illustration */}
                    <div className="hidden md:flex md:w-1/2 bg-blue-500/20 p-8 items-center justify-center">
                         <FiMail className="text-blue-400 w-3/4 h-3/4 opacity-50" />
                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full md:w-1/2 p-8 md:p-12">
                        <h1 className="text-4xl font-bold text-center mb-8">Get In Touch</h1>
                        {isSuccess ? (
                            <div className="text-center p-4 rounded-lg bg-green-500/20 text-green-500">
                                <FiCheckCircle className="mx-auto text-4xl mb-2" />
                                <p>{responseMsg}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 bg-white/50 dark:bg-slate-800/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-[var(--accent-color)] outline-none transition" required />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 bg-white/50 dark:bg-slate-800/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-[var(--accent-color)] outline-none transition" required />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
                                    <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} className="w-full p-3 bg-white/50 dark:bg-slate-800/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-[var(--accent-color)] outline-none transition" required></textarea>
                                </div>

                                {responseMsg && !isSuccess && (
                                    <p className={`text-center mb-4 ${isError ? 'text-red-500' : 'text-green-500'}`}>
                                        {responseMsg}
                                    </p>
                                )}

                                <motion.button
                                    type="submit"
                                    disabled={loading}
                                    style={{ backgroundColor: 'var(--accent-color)' }}
                                    className="w-full text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 disabled:opacity-50"
                                    whileHover={{ scale: loading ? 1 : 1.05 }}
                                    whileTap={{ scale: loading ? 1 : 0.95 }}
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                </motion.button>
                            </form>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
