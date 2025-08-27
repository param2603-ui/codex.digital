import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Star, Users, Award, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { useSpring, animated, config } from '@react-spring/web'



const Home = () => {
  const [isVisible, setIsVisible] = useState({});
  const [{ background }] = useSpring(
    () => ({
      from: { background: '#1a1ed6' }, // Changed from '#msgtvv' to a valid color
      to: [
        { background: '#b2d4eb' }, // Light blue
        { background: '#d7abe0' }, // Light purple
        { background: '#d6bf65' }, // Light yellow
        { background: '#97e8c2' }, // Light green
        { background: '#eb949a' }, // Light pink
      ],
      config: config.molasses,
      loop: {
        reverse: true,
      },
    }),
    []
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance that loads in milliseconds",
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Intuitive interfaces that users love to interact with",
    },
    {
      icon: Award,
      title: "Reliable Support",
      description: "Dedicated support and communication every step of the way.",
    },
  ];

  const testimonials = [
    {
      name: "rudra",
      company: "Comfort Living PG",
      text: "Codex Digital transformed our vision into reality with exceptional attention to detail.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "7266 Entertainment",
      text: "Outstanding work! Their team delivered beyond our expectations.",
      rating: 5,
    },
    {
      name: "mohammad abbas ",
      company: "speedyrxmrds.com",
      text: "Professional, innovative, and incredibly responsive team.",
      rating: 4,
    },
  ];

  const descreption = {
    title: "Codex Digital is a creative powerhouse specializing in cutting-edge web development and digital innovation. We combine artistic vision with technical expertise to deliver solutions that not only look amazing but perform exceptionally."
  }

  return (
    <div className="overflow-hidden min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative">

      {/* Hero Section */}
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-0 sm:px-0 py-12 md:py-24 gap-12 md:gap-0 overflow-hidden w-full min-h-[600px]">
        
        <animated.div
          className="absolute inset-0 w-full h-full object-cover z-0 transition-colors duration-1000"
          style={{ background }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-0 via-pink-50 to-white dark:from-slate-800 dark:via-slate-800 dark:to-slate-800 opacity-70 z-10"/>

        {/* Content Container */}
        <div className="relative z-20 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-8 gap-12 md:gap-0">
          {/* Left: Text */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6  drop-shadow-lg flex flex-wrap items-center justify-center gap-2">
              <span className="text-3xl md:text-6xl text-gray-900 dark:text-white mr-2">We</span>
              <span className="inline-block align-middle bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-yellow-400 bg-clip-text text-transparent">
                <Typewriter
                  words={["Innovate.", "Design.", "Create.", "Develop.", "Optimize."]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
              Offering cutting-edge web development, design, and optimization services for modern businesses. Elevate your digital presence with TechFlow's expert solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full">
              <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center justify-center px-7 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold shadow-md hover:scale-105 transition-all duration-300">
                Explore Services
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center justify-center px-7 py-3 bg-white text-black dark:bg-slate-800 dark:text-white rounded-lg font-semibold shadow-md border border-gray-200 dark:border-slate-700 hover:scale-105 hover:shadow-lg  duration-300">
                Get Quote
              </Link>
            </div>
            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="flex-1 bg-white/80 dark:bg-slate-900/80 rounded-xl p-5 shadow-sm flex flex-col items-center border border-purple-100 dark:border-slate-700">
                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">4 hours</span>
                <span className="text-gray-700 dark:text-gray-300 text-sm mt-1">Fast Response Time</span>
              </div>
              <div className="flex-1 bg-white/80 dark:bg-slate-900/80 rounded-xl p-5 shadow-sm flex flex-col items-center border border-purple-100 dark:border-slate-700">
                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">98%</span>
                <span className="text-gray-700 dark:text-gray-300 text-sm mt-1">Client Satisfaction</span>
              </div>
              <div className="flex-1 bg-white/80 dark:bg-slate-900/80 rounded-xl p-5 shadow-sm flex flex-col items-center border border-purple-100 dark:border-slate-700">
                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">24/7</span>
                <span className="text-gray-700 dark:text-gray-300 text-sm mt-1">Support Available</span>
              </div>
            </div>
          </div>
          {/* Right: Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center mb-10 md:mb-0">
            <div className="relative w-full max-w-md   ">
              <img
                src="./teamwork.png"
                alt="Professionals working at computers in a bright office"
                className="w-full h-full object-cover  "
              />
              {/* Dots/abstract pattern */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full blur-2xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Company Intro */}
      <motion.section
        id="intro"
        data-animate
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-white via-fuchsia-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full h-96  rounded-2xl   flex items-center justify-center ">
                <img
                 src="/homePhoto.jpg" 
                  alt="Demo animation"
                  className="  "
                />
              </div>
            </motion.div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-fuchsia-600 to-cyan-600 bg-clip-text text-transparent">
                Who We Are?
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                {descreption.title}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-500" />
                  <span>Driven by Innovation and Fresh Ideas.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-fuchsia-500" />
                  <span>Client-Centered Approach.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                  <span>Committed to Quality and Growth.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        id="features"
        data-animate
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-cyan-50 via-fuchsia-50 to-yellow-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-fuchsia-600 to-cyan-600 bg-clip-text text-transparent">
            Why Choose Us?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              We deliver exceptional results through innovation, expertise, and unwavering commitment to excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="bg-white/80 dark:bg-slate-900/80 rounded-xl p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-fuchsia-100 dark:border-slate-700"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-500 to-cyan-400 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-fuchsia-700 dark:text-cyan-300">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        id="testimonials"
        data-animate
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-white via-cyan-50 to-fuchsia-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-fuchsia-600 to-cyan-600 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="bg-white/90 dark:bg-slate-900/80 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border border-cyan-100 dark:border-slate-700"
              >
                <div className="flex mb-4 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-fuchsia-700 dark:text-cyan-300">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-fuchsia-600 via-cyan-500 to-yellow-400 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's collaborate to create something extraordinary that sets you apart from the competition.
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

export default Home;
