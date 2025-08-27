import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import emailjs from 'emailjs-com';
import { motion } from "framer-motion"; // <-- Add this import
import SplitText from "../hooks/SplitText";
import SEO from "../components/SEO";

const Contact = () => {
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);

    emailjs.sendForm(
  "service_zrr7f5i", // REACT_APP_EMAILJS_SERVICE_ID
  "template_475sioi", // REACT_APP_EMAILJS_TEMPLATE_ID
  e.target,
  "Ia-Xa7_xEZnCKoyY1" // REACT_APP_EMAILJS_USER_ID
)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    })
    .catch((error) => {
      console.error('FAILED...', error);
      alert('Failed to send the message. Please try again.');
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "team.codexdigital@gmail.com",
      link: "mailto:team.codexdigital@gmail.com",
      bgColor: "bg-blue-600", // blue
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 8866779476 ,+91 8320241898",
      link: "tel:+91 8866779476",
      bgColor: "bg-green-600", // green
    },
    {
      icon: MapPin,
      title: "Address",
      details: " Bhavnagar, Gujarat, India 364001",
      link: "https://maps.app.goo.gl/yM8dXLmeHmrLXSWL9",
      bgColor: "bg-purple-600", // purple
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact — Codex Digital"
        description="Get in touch with Codex Digital for web development, design or performance optimization projects."
        path="/contact"
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
            text=" Get In Touch"
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
          <h2 className="text-2xl md:text-3xl text-center font-bold mb-6 text-gray-700 dark:text-gray-300">Contact for Premium Business Services</h2>
           
            <p className="text-xl text-gray-900 dark:text-gray-300 max-w-4xl mx-auto">
              Ready to start your project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
      </motion.section>

      {/* Contact Section */}
      <section
        id="contact-content"
        data-animate
        className={`py-20 transition-all duration-1000 bg-gradient-to-br from-blue-100 via-white to-purple-100 
           dark:from-slate-800 dark:via-slate-800 dark:to-slate-800 ${
          isVisible["contact-content"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Let's Start a Conversation</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you have a project in mind, need a consultation, or just want to say hello, 
                  we're here to help. Choose the best way to reach us.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="flex items-start space-x-4 p-6 bg-[#e4e4e4] dark:bg-[#1e3657] hover:bg-[#c4c4c4] dark:hover:bg-[#2a2e3b] rounded-2xl hover:scale-105 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div >
                      <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                      <p className="text-muted-foreground">{info.details}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-[#f9fafb] dark:bg-[#1e3657] border border-border rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-00 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 bg-[#ffffff] dark:bg-[#102035]"
                        placeholder="codex "
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 bg-[#ffffff] dark:bg-[#102035]"
                        placeholder="team.codexdigital@gmail.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 bg-[#ffffff] dark:bg-[#102035]"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 bg-[#ffffff] dark:bg-[#102035] resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        data-animate
        className={`py-20 bg-secondary/30 transition-all duration-1000 ${
          isVisible.faq ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            { [
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary depending on scope and complexity. A simple website typically takes 2-4 weeks, while more complex applications can take 2-6 months. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "What is your development process?",
                answer: "We follow a structured 4-phase approach: Discovery (understanding your needs), Design (creating mockups and prototypes), Development (building the solution), and Launch (deployment and optimization). You'll be involved throughout every step.",
              },
              {
                question: "Do you provide ongoing support and maintenance?",
                answer: "Yes! We offer comprehensive support and maintenance packages to keep your digital assets secure, updated, and performing optimally. Our support includes regular updates, security monitoring, and technical assistance.",
              },
              {
                question: "Can you work with our existing brand guidelines?",
                answer: "Absolutely! We love working with established brands and will ensure all our designs and developments align perfectly with your existing brand guidelines and visual identity.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="bg-background border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;