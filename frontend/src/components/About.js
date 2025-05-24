import React from 'react';
import { motion } from 'framer-motion';

const skills = [
	{ name: 'JavaScript', icon: '🟨' },
	{ name: 'React.js', icon: '⚛️' },
	{ name: 'Node.js', icon: '🟩' },
	{ name: 'Express.js', icon: '🚂' },
	{ name: 'MongoDB', icon: '🍃' },
	{ name: 'HTML5', icon: '🔶' },
	{ name: 'CSS3', icon: '🔷' },
	{ name: 'Tailwind CSS', icon: '🌬️' },
	{ name: 'Framer Motion', icon: '🎞️' },
	{ name: 'Git & GitHub', icon: '🐙' },
	{ name: 'Java', icon: '☕' },
	{ name: 'Python', icon: '🐍' },
	{ name: 'OOPs', icon: '📘' },
	{ name: 'SQL', icon: '🗄️' },
	{ name: 'C', icon: '🔵' },
	{ name: 'C++', icon: '➕' },
];

export default function About() {
	return (
		<motion.div
			className="flex flex-col items-center justify-center min-h-screen pt-32 px-4"
			initial={{ opacity: 0, y: 60 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
		>
			<div className="bg-glass dark:bg-glassDark backdrop-blur-md rounded-3xl p-10 shadow-2xl max-w-4xl w-full flex flex-col md:flex-row items-center gap-10">
				{/* Profile Photo */}
				<motion.img
					src="/profile.jpg"
					alt="Profile"
					className="w-48 h-48 rounded-full object-cover border-4 border-pink-500 shadow-lg"
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.8 }}
				/>

				{/* Text and Skills */}
				<div className="text-center md:text-left flex-1">
					<h2 className="text-4xl font-bold mb-4 text-indigo-700 dark:text-indigo-200">
						About Me
					</h2>
					<p className="text-lg text-slate-700 dark:text-slate-200 mb-6">
						Hi! I'm{' '}
						<span className="font-semibold text-pink-500">
							Aditya Choudhary
						</span>
						, a passionate full stack developer specializing in the MERN stack.
						I love building beautiful, performant web applications and exploring
						new technologies. I also have a strong foundation in{' '}
						<span className="font-semibold text-indigo-500">
							Data Structures and Algorithms (DSA)
						</span>{' '}
						using{' '}
						<span className="font-semibold text-indigo-500">Java</span>, which
						helps me write efficient and scalable code.
					</p>
					<p className="text-lg text-slate-700 dark:text-slate-200 mb-6">
						My interests include UI/UX design, animations, and scalable backend
						systems. I enjoy collaborating with others and constantly learning to
						improve my craft.
					</p>
					<p className="text-lg text-slate-700 dark:text-slate-200 mb-8">
						When I'm not coding, you’ll find me reading, hiking, or experimenting
						with creative projects!
					</p>

					<h3 className="text-2xl font-bold mb-4 text-pink-600">Skills</h3>
					<div className="flex flex-wrap justify-center md:justify-start gap-4">
						{skills.map((skill) => (
							<motion.div
								key={skill.name}
								className="flex flex-col items-center bg-white/70 dark:bg-slate-800 rounded-xl px-4 py-3 shadow-md m-2"
								whileHover={{ scale: 1.08, rotate: 2 }}
								transition={{ type: 'spring', stiffness: 300 }}
							>
								<span className="text-3xl mb-1">{skill.icon}</span>
								<span className="text-base font-semibold text-indigo-700 dark:text-indigo-200">
									{skill.name}
								</span>
							</motion.div>
						))}
					</div>

					{/* Download Resume Button */}
					<a
						href="/resume.pdf"
						download
						className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg font-bold shadow hover:bg-pink-600 transition mt-6"
					>
						Download Resume
					</a>
				</div>
			</div>
		</motion.div>
	);
}
