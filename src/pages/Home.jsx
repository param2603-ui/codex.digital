
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, CheckCircle, Star, Users, Award, Zap } from "lucide-react";

const Home = () => {
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

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%226%22%20cy%3D%226%22%20r%3D%226%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
              Digital Excellence
              <br />
              <span className="text-3xl md:text-5xl lg:text-6xl">Redefined</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
              We craft stunning digital experiences that captivate audiences and drive business growth. 
              Your vision, our expertise, endless possibilities.
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
          
          <div className="animate-bounce mt-16">
            <ArrowDown className="w-8 h-8 mx-auto text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section
        id="intro"
        data-animate
        className={`py-20 bg-background transition-all duration-1000 ${
          isVisible.intro ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Codex Digital is a creative powerhouse specializing in cutting-edge web development 
                and digital innovation. We combine artistic vision with technical expertise to 
                deliver solutions that not only look amazing but perform exceptionally.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>Driven by Innovation and Fresh Ideas.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>Client-Centered Approach.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>Committed to Quality and Growth.</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Innovation First</h3>
                  <p className="text-muted-foreground">
                    Leading the digital transformation with cutting-edge solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        data-animate
        className={`py-20 bg-secondary/30 transition-all duration-1000 ${
          isVisible.features ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Codex Digital?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver exceptional results through innovation, expertise, and unwavering commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 text-center hover:shadow-lg hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        data-animate
        className={`py-20 bg-background transition-all duration-1000 ${
          isVisible.testimonials ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-secondary/50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's collaborate to create something extraordinary that sets you apart from the competition.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
