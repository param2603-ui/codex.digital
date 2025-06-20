import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import emailjs from 'emailjs-com';

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
      link: "team.codexdigital@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 8320241898 ,+91 8866779476",
      link: "tel:+91 832041898",
    },
    {
      icon: MapPin,
      title: "Address",
      details: " Bhavnagar, Gujarat, India 364001",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact-content"
        data-animate
        className={`py-20 transition-all duration-1000 ${
          isVisible["contact-content"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
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
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start space-x-4 p-6 bg-secondary/50 rounded-2xl hover:bg-secondary/70 hover:scale-105 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                      <p className="text-muted-foreground">{info.details}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Map Placeholder
              <div className="mt-8">
                <div className="w-full h-64 bg-secondary/50 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">Google Maps integration would go here</p>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Contact Form */}
            <div className="bg-background border border-border rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
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
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 bg-background"
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
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 bg-background"
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
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 bg-background"
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
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 bg-background resize-none"
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
            </div>
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="space-y-6">
            {[
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
              <div
                key={index}
                className="bg-background border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
