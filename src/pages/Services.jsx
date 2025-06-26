
import { useState, useEffect } from "react";
import { Code, Palette, Foldercode, Globe, Zap, Shield } from "lucide-react";
import { Link } from 'react-router-dom';

const Services = () => {
  const [isVisible, setIsVisible] = useState({});

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
      icon: Foldercode,
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
    <div className="min-h-screen bg-background" id="services">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to elevate your business and exceed your expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        id="services-grid"
        data-animate
        className={`py-20 transition-all duration-1000 ${
          isVisible["services-grid"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-background border border-border rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        data-animate
        className={`py-20 bg-secondary/30 transition-all duration-1000 ${
          isVisible.process ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach that ensures quality, efficiency, and exceptional results every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your vision and requirements" },
              { step: "02", title: "Design", desc: "Creating stunning visuals and user experiences" },
              { step: "03", title: "Development", desc: "Building with cutting-edge technologies" },
              { step: "04", title: "Launch", desc: "Deploying and optimizing for success" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together.
          </p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Start Your Project
              </Link>
              <Link
                to="/projects"
                className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
