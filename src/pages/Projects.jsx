import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SplitText from "../hooks/SplitText";


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Online cab service ",
      category: "Web Development",
      description: " A user-friendly online cab booking platform with real-time tracking, driver management, and secure payment integration",
      image: "./cab.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "PG's Website",
      category: "Web Development",
      description: "A smart PG management system for easy room booking, tenant tracking, and automated rent management.",
      image: "./pg.png",
      technologies: ["React js", "Tailwind CSS", "Redux", "email js"],
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Corporate Website",
      category: "UI/UX Design",
      description: "Professional corporate website with modern design, animations, and comprehensive content management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "CMS"],
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "7266 Enterntamant",
      category: "Web Development",
      description: "Real-time financial dashboard with data visualization, analytics, and portfolio management features.",
      image: "./7266.png",
      technologies: ["React", "email.js", "Express", "Tailwind CSS"],
      link: "#",
      github: "#",
    },
    {
      id: 5,
      title: "Food Delivery App",
      category: "Web Development",
      description: "Complete food delivery solution with order tracking, payment integration, and real-time updates.",
      image: "./paratha.png",
      technologies: ["react", "tailwind CSS", "redux", "Stripe"],
      link: "#",
      github: "#",
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "UI/UX Design",
      description: "Creative portfolio website showcasing artistic work with smooth animations and gallery features.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
      technologies: ["react.js", "tailwind CSS", "Netlify", "Framer Motion"],
      link: "#",
      github: "#",
    },
  ];

  const categories = ["All", "Web Development", "UI/UX Design"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);


  return (
    <div className="overflow-hidden min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="min-h-[500px]   bg-[url('https://cdn.pixabay.com/photo/2017/03/28/12/17/chairs-2181994_1280.jpg')] bg-cover bg-center relative dark:bg-slate-900/90 flex items-center justify-center" >
        <div className=" w-full h-full absolute inset-0 bg-gradient-to-br from-white/50 to-purple-50/70 dark:from-slate-900/80 dark:to-slate-900/80 z-0" />
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SplitText
            text="Our Projects"
            className="text-4xl p-2 md:text-6xl text-center font-bold mb-6 color-blue drop-shadow-lg text-color-blue text-[#5324c9]"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          /> 
          <h2 className="text-2xl md:text-3xl text-center font-bold mb-6 text-gray-700 dark:text-gray-300">Turning Your Goals Into Our Portfolio</h2>
         
          <p className="text-xl text-gray-800 dark:text-gray-300 max-w-4xl mx-auto">
            Explore our portfolio of innovative digital solutions that have transformed businesses and delighted users.
          </p>
        </div>
      </motion.section>

      {/* Filter Categories */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <motion.section
        id="projects-grid"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-cyan-50 via-fuchsia-50 to-yellow-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="group relative bg-white/80 dark:bg-slate-900/80 border border-fuchsia-100 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Overlay Icons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* <a
                      href={project.link}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4 text-gray-800" />
                    </a>
                    <a
                      href={project.github}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4 text-gray-800" />
                    </a> */}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-fuchsia-700 dark:text-cyan-300 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary text-xs text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedProject(null)}>
          <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
              >
                ×
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full">
                  {selectedProject.category}
                </span>
                <div className="flex space-x-2">
                  <a
                    href={selectedProject.link}
                    className="p-2 bg-secondary rounded-full hover:bg-secondary/80 transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  {/* <a
                    href={selectedProject.github}
                    className="p-2 bg-secondary rounded-full hover:bg-secondary/80 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </a> */}
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-fuchsia-700 dark:text-cyan-300">{selectedProject.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>
              <div className="border-t border-border pt-6">
                <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-fuchsia-600 via-cyan-500 to-yellow-400 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
            Have a Project in Mind?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's create something amazing together. From concept to completion, we're here to help.
          </p>
          <Link
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-block px-8 py-4 bg-white text-fuchsia-600 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Get Started Today
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Projects;
