"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { FaGithub, FaTwitter, FaLinkedin, FaCodeBranch, FaTerminal, FaCode, FaReact } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  const [name] = useState('Ajeet Singh');
  const [title] = useState('Software Developer');
  const [bio] = useState('Frontend & Mobile Dev specializing in React Native & Next.js');
  const [avatarUrl] = useState('https://pbs.twimg.com/profile_images/1920177749748051968/bxZ_2Rhe_400x400.jpg');
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredProjects = [
    {
      title: 'ColorCraft.dev',
      url: 'https://colorcraft.dev',
      description: 'The Ultimate Color Toolkit for developers and designers',
      icon: (
        <img 
          src="https://www.colorcraft.dev/favicon.ico" 
          alt="ColorCraft Icon" 
          className="w-12 h-12 object-contain"
        />
      ),
      tags: ['Next.js', 'WebGL', 'Color Theory']
    },
    {
      title: 'Templify.art',
      url: 'https://templify.art',
      description: 'TemplateHub provides cutting-edge React Native & Next.js templates.',
      icon: (
        <img 
          src="https://www.templify.art/favicon.ico" 
          alt="Templify Icon" 
          className="w-12 h-12 object-contain"
        />
      ),
      tags: ['React Native', 'Next.js', 'Templates']
    },
    {
      title: 'QuickSync',
      url: 'https://www.quicksync.online',
      description: 'A smarter way to save and sync your important links & tasks across all devices.',
      icon: (
        <img 
          src="https://www.quicksync.online/favicon.ico" 
          alt="Templify Icon" 
          className="w-12 h-12 object-contain"
        />
      ),
      tags: ['React Native', 'Next.js', 'Productivity']
    },
    {
      title: 'Freelance Flow',
      url: 'https://freelance-flow-nine.vercel.app/',
      description: 'FreelanceFlow is an all-in-one toolset designed for freelancers.',
      icon: (
        <img 
          src="https://freelance-flow-nine.vercel.app/favicon.ico" 
          alt="Freelance Flow Icon" 
          className="w-12 h-12 object-contain"
        />
      ),
      tags: ['Next.js', 'Productivity', 'Tools', 'Utility']
    }
  ];
  const links = [
    { title: 'Twitter', url: 'https://x.com/AjeetSingh76422', icon: <FaTwitter />, description: 'Thoughts on development and tech' },
    { title: 'Portfolio', url: 'https://ajeetsingh.online/', icon: <FaTerminal />, description: 'Explore my journey and work' },
    { title: 'GitHub', url: 'https://github.com/AjeetSingh2016', icon: <FaGithub />, description: 'Open source contributions' },
    { title: 'LinkedIn', url: 'https://www.linkedin.com/in/ajeet-singh-063978177/', icon: <FaLinkedin />, description: 'Professional profile' }
  ];

  const techStack = [
    { name: 'Next.js', icon: <div className="font-bold">N</div> },
    { name: 'React Native', icon: <FaReact /> },
    { name: 'TypeScript', icon: <FaCode /> },
    { name: 'MERN', icon: <FaCodeBranch /> },
    { name: 'React.js', icon: <FaReact /> },
    { name: 'Tailwind', icon: <div className="font-bold">tw</div> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Enhanced Header */}
      <motion.div 
        className="fixed top-0 w-full bg-gray-950/95 backdrop-blur-sm px-4 py-3 z-50 border-b border-gray-800/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse delay-150"></span>
            <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse delay-300"></span>
          </div>
          <span className="text-gray-400 font-mono text-sm tracking-wider">
            ~/dev/{name.toLowerCase().replace(/\s/g, '-')}
          </span>
        </div>
      </motion.div>

      <Head>
        <title>{name} | {title}</title>
        <meta name="description" content={`${name} - ${title}. ${bio}`} />
      </Head>

      <main className="max-w-4xl mx-auto pt-24 pb-12 px-6">
        {/* Profile Section */}
        <motion.section 
  className="mb-10 md:mb-14"
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
    <motion.div 
      className="relative"
      variants={itemVariants}
    >
      <div className="absolute -inset-1.5 md:-inset-2 bg-gradient-to-r from-cyan-500/30 to-purple-600/30 rounded-full blur-lg md:blur-xl animate-pulse"></div>
      <img 
        src={avatarUrl} 
        alt={name} 
        className="relative w-28 h-28 md:w-36 md:h-36 rounded-full border-3 md:border-4 border-gray-800/50 object-cover shadow-lg md:shadow-xl hover:scale-105 transition-transform duration-300"
      />
    </motion.div>

    <div className="text-center md:text-left">
      <motion.h1 
        className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text"
        variants={itemVariants}
      >
        {name}
      </motion.h1>
      <motion.h2 
        className="text-lg md:text-xl text-gray-300 mb-3 md:mb-4 font-mono tracking-wide"
        variants={itemVariants}
      >
        {title}
      </motion.h2>
      <motion.p 
        className="text-sm md:text-base text-gray-400 max-w-xl md:max-w-2xl mb-4 md:mb-6 leading-relaxed"
        variants={itemVariants}
      >
        {bio}
      </motion.p>
    </div>
  </div>
</motion.section>

        {/* Projects Section */}
        <motion.section 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
<motion.h3 
  className="text-xl md:text-3xl font-bold mb-6 md:mb-10 flex items-center"
  variants={itemVariants}
>
  <FaCodeBranch className="mr-2 md:mr-3 text-purple-400 text-lg md:text-2xl" /> 
  Featured Projects
</motion.h3>

          <div className="grid grid-cols-2 gap-3 px-3 md:grid-cols-2 md:gap-4 md:px-4 lg:gap-6 lg:px-6">
  {featuredProjects.slice(0, 4).map((project, index) => (
    <motion.a
      key={index}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
      variants={itemVariants}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative p-3 md:p-4 lg:p-5">
        <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-900/50 flex items-center justify-center mb-2 md:mb-3 lg:mb-4 group-hover:bg-gray-850/50 transition-colors duration-300">
          {project.icon}
        </div>
        <h4 className="text-base md:text-lg lg:text-xl font-bold mb-1 md:mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
          {project.title}
        </h4>
        <p className="text-gray-400 mb-2 md:mb-3 text-[10px] md:text-xs lg:text-sm line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1 md:gap-1.5 lg:gap-2">
          {project.tags.slice(0, 3).map((tag, tagIndex) => (
            <span 
              key={tagIndex} 
              className="text-[9px] md:text-[10px] lg:text-xs px-1 md:px-1.5 lg:px-2 py-0.5 bg-gray-700/50 rounded-sm text-gray-300 group-hover:bg-purple-900/30 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  ))}
</div>

        </motion.section>

        {/* Links Section */}
        <motion.section 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
<motion.h3 
  className="text-xl md:text-3xl font-bold mb-6 md:mb-10 flex items-center"
  variants={itemVariants}
>
  <FaTerminal className="mr-2 md:mr-3 text-cyan-400 text-lg md:text-2xl" /> 
  Connect & Follow
</motion.h3>

          <div className="grid grid-cols-2 gap-3 px-3 md:grid-cols-2 md:gap-4 md:px-4 lg:gap-5 lg:px-6">
  {links.slice(0, 4).map((link, index) => (
    <motion.a
      key={index}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center p-3 md:p-4 lg:p-5 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
      variants={itemVariants}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative flex-shrink-0 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-900/50 flex items-center justify-center mr-2 md:mr-3 lg:mr-4 text-base md:text-lg lg:text-xl text-cyan-400">
        {link.icon}
      </div>
      <div className="relative">
        <h2 className="text-base md:text-lg lg:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
          {link.title}
        </h2>
        <p className="text-[10px] md:text-xs lg:text-sm text-gray-400 line-clamp-2">{link.description}</p>
      </div>
    </motion.a>
  ))}
</div>
        </motion.section>

        {/* Enhanced Footer */}
        <motion.footer 
          className="mt-16 text-center text-gray-500 text-sm border-t border-gray-800/50 pt-6"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="relative inline-block">
            <span className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-md opacity-50"></span>
            <span className="relative">© {new Date().getFullYear()} {name}</span>
          </p>
        </motion.footer>
      </main>
    </div>
  );
}