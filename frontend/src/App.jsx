import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Html, Stars } from '@react-three/drei';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './AdminDashboard.jsx';

function Torus() {
  const mesh = useRef();
  return (
    <Float speed={1.2} rotationIntensity={0.7} floatIntensity={1.2}>
      <mesh ref={mesh} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.2, 0.4, 16, 100]} />
        <meshStandardMaterial color={'#222'} emissive={'#888'} emissiveIntensity={0.2} wireframe={false} />
      </mesh>
    </Float>
  );
}

function About3DBackground() {
  const mesh = useRef();
  return (
    <Canvas style={{ position: 'absolute', inset: 0, zIndex: 0 }} camera={{ position: [0, 0, 6], fov: 60 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Float speed={1.2} rotationIntensity={0.7} floatIntensity={1.2}>
        <mesh ref={mesh} rotation={[Math.PI / 2, 0, 0]}>
          <icosahedronGeometry args={[2.5, 1]} />
          <meshStandardMaterial color={'#3B82F6'} wireframe={true} opacity={0.3} transparent={true} />
        </mesh>
      </Float>
      <Stars radius={10} depth={20} count={100} factor={2} fade speed={1} />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
}

function Section({ id, title, children, color }) {
  const sectionClass = color
    ? `w-full py-20 px-4 border-b border-gray-200 last:border-b-0 ${color}`
    : 'w-full max-w-5xl mx-auto py-20 px-4 border-b border-gray-200 last:border-b-0';
  return (
    <section id={id} className={sectionClass}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 tracking-tight">{title}</h2>
      <div className="text-base md:text-lg text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-b border-gray-200 z-50 flex justify-center gap-4 md:gap-8 py-3 px-3 md:px-6 shadow-md backdrop-blur-md">
      <a href="#home" className="text-white text-base font-semibold hover:text-yellow-200 transition-colors">Home</a>
      <a href="#about" className="text-white text-base font-semibold hover:text-yellow-200 transition-colors">About</a>
      <a href="#skills" className="text-white text-base font-semibold hover:text-yellow-200 transition-colors">Skills</a>
      <a href="#projects" className="text-white text-base font-semibold hover:text-yellow-200 transition-colors">Projects</a>
      <a href="#experience" className="text-white text-base font-semibold hover:text-yellow-200 transition-colors">Experience</a>
      <a href="#contact" className="text-white text-base font-semibold hover:text-yellow-200 transition-colors">Contact</a>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/" element={
          <div className="bg-gray-50 min-h-screen w-full font-sans">
            <Navbar />
            <div id="home" className="animated-gradient-bg relative flex flex-col items-center justify-center min-h-screen pt-28 pb-8 border-b-4 border-slate-800/30">
              <div className="max-w-2xl w-full flex flex-col items-center text-center gap-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight animate-fade-in-down">Hi, I'm Rajesh Boda <span className="inline-block">👋</span></h1>
                <p className="text-lg md:text-2xl text-blue-700 font-semibold mb-2 animate-fade-in-up animation-delay-200">Aspiring Full Stack Developer & Tech Enthusiast</p>
                <p className="text-base md:text-lg text-gray-700 mb-4 animate-fade-in-up animation-delay-400">I'm a Computer Science undergraduate passionate about building impactful digital solutions. With experience in Fullstack Development and cybersecurity, I thrive on solving real-world problems through code and innovation.</p>
                <div className="flex flex-wrap justify-center gap-4 mb-2 animate-fade-in-up animation-delay-600">
                  <a href="/My_Resume_Obj.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-blue-700 to-blue-400 hover:from-blue-800 hover:to-blue-500 focus:ring-2 focus:ring-blue-200 font-semibold rounded-full px-6 py-2 shadow transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center justify-center">
                    <i className="fas fa-file-download"></i> Download Resume
                  </a>
                  <a href="#projects" className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 focus:ring-2 focus:ring-blue-200 font-semibold rounded-full px-6 py-2 shadow transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center justify-center">
                    <i className="fas fa-folder-open"></i> View Projects
                  </a>
                </div>
                <div className="flex flex-wrap justify-center gap-4 mt-2 animate-fade-in-up animation-delay-800">
                  <a href="https://github.com/RajeshBodatech" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-gray-800 to-gray-600 hover:from-gray-900 hover:to-gray-700 focus:ring-2 focus:ring-gray-300 font-medium rounded-full px-5 py-2 shadow-sm transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center justify-center">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/boda-rajesh-3905752b2/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 focus:ring-2 focus:ring-blue-200 font-medium rounded-full px-5 py-2 shadow-sm transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center justify-center">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </a>
                  <a href="mailto:rajeshboda30@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Rajesh%2C%0A%0AI%20would%20like%20to%20connect%20with%20you%20regarding..." className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-gray-500 to-blue-300 hover:from-blue-400 hover:to-gray-600 focus:ring-2 focus:ring-blue-100 font-medium rounded-full px-5 py-2 shadow-sm transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center justify-center">
                    <i className="fas fa-envelope"></i> Email
                  </a>
                </div>
                <div className="flex flex-wrap justify-center gap-4 mt-4 text-gray-600 text-base animate-fade-in-up animation-delay-1000">
                  <span className="inline-flex items-center gap-1"><i className="fas fa-briefcase"></i> 4+ Projects</span>
                  <span className="inline-flex items-center gap-1"><i className="fas fa-shield-alt"></i> Cybersecurity Analyst</span>
                  <span className="inline-flex items-center gap-1"><i className="fas fa-lightbulb"></i> Problem Solver</span>
                </div>
              </div>
            </div>
            <Section id="about" title="About Me" color="animated-gradient-bg">
              <div className="relative min-h-[500px] flex items-center justify-center">
                <About3DBackground />
                <motion.div
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="animated-card-gradient flex flex-col md:flex-row items-center justify-between gap-16 bg-white/80 rounded-2xl shadow-lg border border-gray-200 p-4 md:p-10 max-w-6xl w-full mx-auto relative z-10 overflow-hidden min-h-[280px] md:min-h-[320px]"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex-1 flex flex-col gap-4 min-w-[260px]"
                  >
                    <h3 className="text-2xl font-bold text-blue-800 flex items-center gap-2 mb-2"><span>Hi, I'm Rajesh Boda</span> <span className="text-2xl">🚀</span></h3>
                    <p className="text-lg text-gray-800 font-semibold mb-2">Computer Science Undergraduate | Full Stack Developer | Tech Enthusiast</p>
                    <p className="text-base text-gray-700 mb-2">I'm a passionate techie who loves crafting scalable and impactful solutions. I've gained hands-on experience through diverse roles — from developing full stack web applications and contributing to cybersecurity initiatives.</p>
                    <p className="text-base text-gray-700 mb-2">I've worked as a <span className="font-semibold text-blue-700">Cybersecurity Analyst</span> and <span className="font-semibold text-blue-700">Full Stack Developer</span> under <span className="font-semibold text-blue-700">CYBERHELPS NGO</span>, where I led impactful projects like the anti-suicide mental health bot. My portfolio includes projects in React, Node.js, and secure backend systems.</p>
                    <p className="text-base text-gray-700 mb-2">I'm currently deep-diving into the <span className="font-semibold text-blue-700">MERN stack</span>, strengthening my backend skills, and exploring ways to blend technology with social impact.</p>
                    <div className="flex items-center gap-2 text-blue-700 mt-2 text-base"><span className="text-xl">💬</span> <span>Always up for tech collaborations, open-source contributions, or meaningful chats!</span></div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex-1 flex justify-center items-center min-w-[220px]"
                  >
                    <img src="/me1.jpg" alt="Rajesh Boda" className="w-56 h-56 md:w-72 md:h-72 rounded-2xl border-4 border-white shadow-xl object-cover object-top aspect-square" />
                  </motion.div>
                </motion.div>
              </div>
            </Section>
            <Section id="skills" title="Skills" color="animated-gradient-bg">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', staggerChildren: 0.18 }}
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
              >
                <SkillCardSimple
                  icon="💻"
                  title="Programming Languages"
                  skills={['C', 'C++', 'Java', 'Python']}
                  motionProps={{ transition: { delay: 0.1 } }}
                />
                <SkillCardSimple
                  icon="🌐"
                  title="Web Technologies"
                  skills={['HTML', 'CSS', 'JavaScript', 'React.js']}
                  motionProps={{ transition: { delay: 0.25 } }}
                />
                <SkillCardSimple
                  icon="🗃️"
                  title="Databases"
                  skills={['MySQL', 'MongoDB']}
                  motionProps={{ transition: { delay: 0.4 } }}
                />
                <SkillCardSimple
                  icon="⚙️"
                  title="Tools & Platforms"
                  skills={['Git', 'GitHub', 'Docker', 'Postman', 'Render', 'VS Code']}
                  motionProps={{ transition: { delay: 0.55 } }}
                />
                <SkillCardSimple
                  icon="📊"
                  title="Machine Learning"
                  skills={['Python (NumPy, Pandas, Scikit-learn)', 'Model Training', 'Data Preprocessing', 'Deployment (basic)']}
                  motionProps={{ transition: { delay: 0.7 } }}
                />
                <SkillCardSimple
                  icon="🛡️"
                  title="Other Skills"
                  skills={['Cybersecurity Fundamentals', 'Linux', 'Networking Basics']}
                  motionProps={{ transition: { delay: 0.85 } }}
                />
              </motion.div>
            </Section>
            <Section id="projects" title="Projects" color="animated-gradient-bg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProjectCard
                  image="/surplus.png"
                  title="Surplus Food Management"
                  description="A system to collect, manage, and redistribute surplus food to reduce waste and feed the needy."
                  techStack={["React", "Node.js", "MongoDB", "Express.js", "Vite"]}
                  codeLink="https://github.com/RajeshBodatech/project-main"
                  liveLink="https://surplus-food-management-client.onrender.com/"
                />
                <ProjectCard
                  image="/news.png"
                  title="NEWS HUB"
                  description="A platform to display categorized news articles, offering users quick access to national, global, and tech updates."
                  techStack={["React", "Express.js", "Node.js", "Vite", "REST Api"]}
                  codeLink="https://github.com/RajeshBodatech/NewsPortal"
                  liveLink="https://newsportal-frontend-vza5.onrender.com/"
                />
                <ProjectCard
                  images={["/hopei1.png", "/hopei2.png"]}
                  title="HOPE-I"
                  description="An anonymous mental health support bot designed to prevent suicides by enabling secure, stigma-free communication."
                  techStack={["React", "Node.js", "React.js", "MongoDB", "Vite", "REST APIs"]}
                  codeLink="https://github.com/RajeshBodatech/project_final"
                  liveLink="https://hope-i-bot-1.onrender.com/"
                />
                <ProjectCard
                  image="/personal.png"
                  title="Madhu Cyber Solutions"
                  description="A cybersecurity service provider offering digital protection, ethical hacking, and investigation solutions for individuals and organizations."
                  techStack={["React.js", "Vite", "Libraries"]}
                  codeLink="https://github.com/RajeshBodatech/personal_website"
                  liveLink="https://personal-website-phi-woad.vercel.app/"
                />
                <ProjectCard
                  image="/netflix.png"
                  title="Netflix Clone"
                  description="A web-based streaming platform clone replicating Netflix UI and features like user authentication, movie browsing, and playback."
                  techStack={["React", "Vite"]}
                  codeLink="https://github.com/RajeshBodatech/Netflix-Clone"
                  liveLink="https://netflix-clone-ojre.onrender.com/"
                />
              </div>
            </Section>
            <Section id="experience" title="Experience" color="animated-gradient-bg">
              <div className="max-w-5xl mx-auto relative py-8">
                {/* Timeline accent with glow */}
                <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full ml-2 hidden sm:block shadow-[0_0_24px_6px_rgba(124,58,237,0.25)]"></div>
                <div className="flex flex-col gap-10">
                   <ExperienceCard
                      title={
                        <>
                          Software Developer Engineer Intern <br />
                               (Onsite – Pune, Maharashtra)
                       </>
                      }
                     org="Provakil"
                     type="Internship"
                     duration="January 05, 2026 – July 05, 2026"
                     description="Working on production web applications using Node.js and MongoDB, implementing new features, fixing bugs, and optimizing APIs. Collaborated with QA and product teams to test and deploy updates while following Git-based development workflows."
                     motionProps={{ transition: { delay: 0.1 } }}
                    />
                   <ExperienceCard
                    title="Fullstack Developer Intern(Remote)"
                    org="Proxenix"
                    type="Internship"
                    duration="June 2025 – August 2025"
                    description="Built a real-time chat application using Socket.IO with messaging, media sharing, and emoji picker support, and implemented JWT-based authentication, password encryption, and friend request management features."
                    motionProps={{ transition: { delay: 0.1 } }}
                  />
                  <ExperienceCard
                    title="Fullstack Developer Intern(Remote)"
                    org="Cyber Help Hope Initiative Foundation"
                    type="Internship"
                    duration="May 15 – June 30, 2025"
                    description="Worked on the HOPE-I anti-suicidal mental health bot project, contributing to both frontend and backend development. Gained hands-on experience in building impactful digital solutions."
                    motionProps={{ transition: { delay: 0.1 } }}
                  />
                  <ExperienceCard
                    title="Cybersecurity Intern(Remote)"
                    org="Cyber Help Hope Initiative Foundation"
                    type="Internship"
                    duration="May 15 – June 30, 2025"
                    description="Learned about cyberattacks, data security, intercepting, and other cybersecurity skills. Developed a strong foundation in protecting digital assets and understanding modern cyber threats."
                    motionProps={{ transition: { delay: 0.3 } }}
                  />
                </div>
              </div>
            </Section>
            <Section id="contact" title="Contact" color="animated-gradient-bg">
              <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-stretch justify-center w-full max-w-4xl mx-auto">
                {/* Left: Contact Info */}
                <div className="flex-1 bg-gradient-to-br from-[#1a1333]/90 to-[#241a3a]/90 rounded-2xl p-6 shadow-lg border border-white/10 flex flex-col gap-4 justify-between min-w-[240px] max-w-xs mb-6 md:mb-0">
                  <div>
                    <div className="text-xl font-bold text-white mb-2">Contact Information</div>
                    <div className="flex items-center gap-2 text-white/90 mb-2"><i className="fas fa-envelope"></i> rajeshboda30@gmail.com</div>
                    <div className="flex items-center gap-2 text-white/90 mb-2"><i className="fas fa-phone"></i> +91-8106314616</div>
                    <div className="flex items-center gap-2 text-white/90 mb-2"><i className="fas fa-map-marker-alt"></i> RGUKT BASAR, NIRMAL</div>
                  </div>
                  <div className="mt-6 text-blue-200 text-base italic">“I usually reply within 24–48 hours. Looking forward to connecting!”</div>
                </div>
                {/* Right: Contact Form */}
                <div className="flex-1 min-w-[260px]">
                  <ContactForm />
                </div>
              </div>
            </Section>
          </div>
        } />
      </Routes>
    </Router>
  );
}

function ProjectCard({ image, images, title, description, techStack, codeLink, liveLink }) {
  // Support both single image and multiple images (carousel)
  const imageList = images || (image ? [image] : []);
  const [current, setCurrent] = useState(0);
  const hasCarousel = imageList.length > 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-gradient-to-br from-[#1a1333] to-[#241a3a] rounded-2xl shadow-2xl border border-white/10 p-0 flex flex-col overflow-hidden min-h-[420px] backdrop-blur-md bg-opacity-90"
      style={{ background: 'linear-gradient(135deg, rgba(26,19,51,0.96) 0%, rgba(36,26,58,0.96) 100%)', boxShadow: '0 8px 32px 0 rgba(26,19,51,0.25)' }}
    >
      {imageList.length > 0 && (
        <div className="relative w-full h-44">
          <img
            src={imageList[current]}
            alt={title}
            className="w-full h-44 object-cover object-center rounded-t-2xl transition-all duration-500"
          />
          {hasCarousel && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {imageList.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full ${current === idx ? 'bg-blue-400' : 'bg-white/60'} border border-white/30 transition-colors`}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <motion.h3
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-2xl font-bold text-white mb-1"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-gray-200 mb-2"
        >
          {description}
        </motion.p>
        {techStack && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap gap-2 mb-2"
          >
            {techStack.map((tech) => (
              <span key={tech} className="bg-[#2d254a] text-blue-100 px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-white/10">{tech}</span>
            ))}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.46, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex gap-3 mt-4"
        >
          {codeLink && (
            <motion.a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, rotateX: 8, boxShadow: '0 8px 32px 0 rgba(67,40,137,0.25), 0 0 16px 4px #7f5fff' }}
              whileTap={{ scale: 0.96, rotateX: 0 }}
              transition={{ type: 'spring', stiffness: 350, damping: 18 }}
              className="flex items-center gap-2 bg-white text-[#432889] font-semibold rounded-lg px-5 py-2 shadow-lg hover:bg-gray-100 transition-all border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              style={{ perspective: 600 }}
            >
              <i className="fab fa-github"></i> View Code
            </motion.a>
          )}
          {liveLink && (
            <motion.a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, rotateX: 8, boxShadow: '0 8px 32px 0 rgba(59,130,246,0.25), 0 0 16px 4px #3b82f6' }}
              whileTap={{ scale: 0.96, rotateX: 0 }}
              transition={{ type: 'spring', stiffness: 350, damping: 18 }}
              className="flex items-center gap-2 bg-blue-600 text-white font-semibold rounded-lg px-5 py-2 shadow-lg hover:bg-blue-700 transition-all border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              style={{ perspective: 600 }}
            >
              <i className="fas fa-external-link-alt"></i> Demo
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

function ContactIcon({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-gray-700 text-lg hover:text-blue-700 transition-colors font-medium px-3 py-2 rounded-md border border-gray-200 bg-white hover:bg-blue-50 shadow-sm"
    >
      <i className={icon}></i>
      {label}
    </a>
  );
}

function SkillCardSimple({ icon, title, skills, motionProps }) {
  // Map skill names to icons (Font Awesome or emoji)
  const skillIcons = {
    'C': <i className="fas fa-code"></i>,
    'C++': <i className="fas fa-code"></i>,
    'Java': <i className="fab fa-java"></i>,
    'Python': <i className="fab fa-python"></i>,
    'HTML': <i className="fab fa-html5"></i>,
    'CSS': <i className="fab fa-css3-alt"></i>,
    'JavaScript': <i className="fab fa-js"></i>,
    'React.js': <i className="fab fa-react"></i>,
    'Node.js': <i className="fab fa-node-js"></i>,
    'Express.js': <i className="fas fa-server"></i>,
    'REST APIs': <i className="fas fa-plug"></i>,
    'MySQL': <i className="fas fa-database"></i>,
    'MongoDB': <i className="fas fa-leaf"></i>,
    'Git': <i className="fab fa-git-alt"></i>,
    'GitHub': <i className="fab fa-github"></i>,
    'Docker': <i className="fab fa-docker"></i>,
    'Postman': <i className="fas fa-flask"></i>,
    'Render': <i className="fas fa-cloud"></i>,
    'VS Code': <i className="fas fa-code"></i>,
    'Python (NumPy, Pandas, Scikit-learn)': <i className="fab fa-python"></i>,
    'Model Training': <i className="fas fa-robot"></i>,
    'Data Preprocessing': <i className="fas fa-filter"></i>,
    'Deployment (basic)': <i className="fas fa-rocket"></i>,
    'Cybersecurity Fundamentals': <i className="fas fa-shield-alt"></i>,
    'Linux': <i className="fab fa-linux"></i>,
    'Networking Basics': <i className="fas fa-network-wired"></i>,
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', ...((motionProps && motionProps.transition) || {}) }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-gradient-to-br from-[#23235b] via-[#3a2d6a] to-[#4b2067] rounded-2xl shadow-lg border border-white/10 p-5 flex flex-col gap-4 items-center"
    >
      <div className="text-4xl mb-2">{icon}</div>
      <h4 className="text-2xl font-bold text-white mb-4 text-center">{title}</h4>
      <div className="flex flex-col gap-3 w-full">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + idx * 0.12, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full"
          >
            <span className="block w-full text-center py-2 rounded-xl bg-gradient-to-r from-[#3a2d6a] to-[#4b2067] text-white text-lg font-medium shadow-md flex items-center justify-center gap-2">
              {skillIcons[skill] || <i className="fas fa-check-circle"></i>} {skill}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function ExperienceCard({ title, org, type, duration, description, motionProps }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', ...((motionProps && motionProps.transition) || {}) }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative bg-gradient-to-br from-[#23235b]/90 via-[#3a2d6a]/80 to-[#4b2067]/90 bg-white/20 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg px-8 py-7 flex flex-col gap-2 ml-0 sm:ml-8"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
          <div className="text-lg text-purple-200 font-medium mb-1">{org}</div>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-4 py-1 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 text-white font-semibold text-sm shadow-md">{type}</span>
          <span className="text-white/80 text-base font-medium">{duration}</span>
        </div>
      </div>
      <div className="text-white/90 text-base mt-1">{description}</div>
    </motion.div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function validate() {
    if (!form.name.trim()) return 'Name is required.';
    if (!form.email.trim()) return 'Email is required.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Enter a valid email.';
    if (!form.message.trim()) return 'Message is required.';
    return '';
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setStatus('');
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(' https://portfolio-qj8m.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setError(data.error || 'Failed to send message.');
      }
    } catch (err) {
      setError('Failed to send message.');
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 rounded-2xl p-6 shadow-lg border border-white/10 backdrop-blur-md">
      <label className="text-white font-semibold">Name *</label>
      <input
        type="text"
        className="rounded-lg px-4 py-2 bg-[#1a1333] text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={form.name}
        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
        required
      />
      <label className="text-white font-semibold">Email *</label>
      <input
        type="email"
        className="rounded-lg px-4 py-2 bg-[#1a1333] text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={form.email}
        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
        required
      />
      <label className="text-white font-semibold">Message *</label>
      <textarea
        className="rounded-lg px-4 py-2 bg-[#1a1333] text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[100px]"
        value={form.message}
        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
        required
      />
      <button
        type="submit"
        className="mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:opacity-60"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
      {error && <div className="text-red-400 font-semibold mt-1">{error}</div>}
      {status && <div className="text-green-400 font-semibold mt-1">{status}</div>}
    </form>
  );
}

export default App;
