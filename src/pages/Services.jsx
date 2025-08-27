import { Code, Palette, Smartphone, Globe, Zap, Shield,SearchCode,SquarePen ,Truck,Wrench} from "lucide-react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import SplitText from "../hooks/SplitText";
import SEO from "../components/SEO";



const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
      features: ["React & Node.js", "Responsive Design", "SEO Optimized", "Performance Focused"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that engage users and drive conversions through thoughtful user experience design.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Smartphone,
      title: "Software Development",
      description: "Custom software solutions that turn your ideas into powerful, scalable digital products",
      features: ["Custom Software Solutions", "Cross-Platform", "UI/UX Design Integration", "Security & Compliance"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Globe,
      title: "E-Commerce Solutions",
      description: "Complete e-commerce platforms with secure payment processing and inventory management systems.",
      features: ["Shopping Cart", "Payment Gateway", "Inventory Management", "Analytics"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your website and improve user experience with our comprehensive performance optimization services.",
      features: ["Speed Optimization", "Database Tuning", "Caching Solutions", "CDN Setup"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Keep your digital assets secure and up-to-date with our ongoing maintenance and security services.",
      features: ["Security Audits", "Regular Updates", "Backup Solutions", "24/7 Monitoring"],
      color: "from-indigo-500 to-purple-500",
    },
  ];


  return (
    <div className="overflow-hidden min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative" id="services">
      <SEO
        title="Codex Digital — Services | Web Development, Design & Optimization"
        description="Comprehensive digital solutions including web development, UI/UX, e-commerce, performance optimization and security."
        path="/services"
        image="/servicePhoto.jpg"
      />
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
            text="Services"
            className="text-4xl md:text-6xl text-center font-bold mb-6 color-blue drop-shadow-lg text-color-blue text-[#5324c9]"
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
          <h2 className="text-2xl md:text-3xl text-center font-bold mb-6 text-gray-700 dark:text-gray-300">We provide a wide range of Services</h2>
          <p className="text-xl text-gray-900 dark:text-gray-300 max-w-5xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business and exceed your expectations.
          </p>
        </div>

      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col-reverse md:flex-row items-center justify-between px-0 sm:px-0 py-12 md:py-24 gap-12 md:gap-0 overflow-hidden w-full min-h-[600px]"
      >

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-0 via-pink-50 to-white dark:from-slate-800 dark:via-slate-800 dark:to-slate-800 opacity-70 z-10" />

        {/* Content Container */}
        <div className="relative z-20 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-8 gap-12 md:gap-0">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 flex flex-col items-center justify-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold  mb-10 items-center text-fuchsia-700 dark:text-cyan-300">
              Our Services
            </h2>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
              We specialize in providing comprehensive digital solutions designed to help businesses grow, engage their audience, and achieve measurable results. From creative design to advanced technology, we deliver strategies that not only meet but exceed expectations
            </p>
            <Link to="/Contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center justify-center px-7 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold shadow-md hover:scale-105 transition-all duration-300">
              For More Detail
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>

          </motion.div>
          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-1/2 flex items-center justify-center mb-10 md:mb-0"
          >
            <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300">
              <img
                src="/servicePhoto.jpg"
                alt="Services"
                className="w-full h-full object-cover rounded-3xl "
              />

            </div>
          </motion.div>
        </div>
      </motion.section>


      {/* Services Grid */}
      <motion.section
        id="services-grid"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-b from-[#9ECAD6] to-yellow-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="relative group bg-white/80 dark:bg-slate-900/80 border border-fuchsia-100 dark:border-slate-700 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 flex items-center justify-center shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-fuchsia-700 dark:text-cyan-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        id="process"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-white via-fuchsia-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-fuchsia-600 to-cyan-600 bg-clip-text text-transparent">
              Our 4-D Process
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              A streamlined approach that ensures quality, efficiency, and exceptional results every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: SearchCode, title: "Discover", desc: "Understanding your vision and requirements" },
              { icon: SquarePen, title: "Design", desc: "Creating stunning visuals and user experiences" },
              { icon: Wrench, title: "Develop", desc: "Building with cutting-edge technologies" },
              { icon: Truck, title: "Deliver", desc: "Deploying and optimizing for success" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 bg-gradient-to-r  from-purple-600 to-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                <item.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-fuchsia-700 dark:text-cyan-300">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-x-1/3"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

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
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-8 py-4 bg-white text-fuchsia-600 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link
              to="/projects"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-fuchsia-600 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
