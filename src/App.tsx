import React, { useState } from 'react';
import { 
  Gamepad2,
  Download,
  Github,
  Linkedin,
  Mail,
  ChevronRight,
  Trophy,
  Users,
  Sparkles,
  Brain
} from 'lucide-react';

function App() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Fantasy Quest RPG",
      role: "Lead Game Designer",
      description: "An immersive open-world RPG with innovative combat mechanics and dynamic storytelling.",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=1200",
      tech: ["Unity", "C#", "Blender", "Photoshop"]
    },
    {
      title: "Space Explorers",
      role: "Game Mechanics Designer",
      description: "Multiplayer space exploration game featuring procedurally generated worlds.",
      image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&q=80&w=1200",
      tech: ["Unreal Engine", "Blueprint", "Maya", "Substance Painter"]
    },
    {
      title: "Neon Runners",
      role: "Level Designer",
      description: "Fast-paced cyberpunk racing game with unique parkour elements.",
      image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=1200",
      tech: ["Unity", "C#", "3DS Max", "Adobe XD"]
    }
  ];

  const skills = [
    { name: "Game Design", level: 95 },
    { name: "Unity", level: 90 },
    { name: "Unreal Engine", level: 85 },
    { name: "3D Modeling", level: 80 },
    { name: "UI/UX Design", level: 85 }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-gray-900 z-10"/>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center"/>
        <div className="relative z-20 text-center px-4">
          <Gamepad2 className="w-16 h-16 mx-auto mb-6 text-purple-400" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Game Designer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Crafting Immersive Digital Experiences
          </p>
          <button 
            onClick={() => window.open('/cv.pdf')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto transition-all"
          >
            <Download className="w-5 h-5" />
            Download CV
          </button>
        </div>
      </header>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`mb-16 bg-gray-800 rounded-xl overflow-hidden transform transition-all hover:scale-[1.02] ${
                activeProject === index ? 'ring-2 ring-purple-500' : ''
              }`}
              onClick={() => setActiveProject(index)}
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="h-64 w-full object-cover md:h-full"
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-purple-400 mb-4">{project.role}</p>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-16">Skills & Expertise</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">{skill.name}</span>
                <span className="text-purple-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-20 px-4 md:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Create Something Amazing</h2>
          <p className="text-gray-300 mb-12">
            Ready to bring your game ideas to life? Let's collaborate!
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com" className="hover:text-purple-400 transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com" className="hover:text-purple-400 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:contact@example.com" className="hover:text-purple-400 transition-colors">
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;