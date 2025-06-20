import { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const openWhatsApp = () => {
    window.open("https://wa.me/+91 8866779476", "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className={`fixed bottom-8 left-8 p-3 bg-green-600 text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-40 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Contact via WhatsApp"
    >
      <MessageSquare className="w-5 h-5" />
    </button>
  );
};

export default WhatsAppButton;
