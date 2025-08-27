import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const Index: React.FC = () => {
  const siteUrl = "https://codexdigital.ltd";
  const description =
    "Codex Digital is a creative web development agency delivering responsive websites, custom web apps, and UI/UX design to help businesses grow online.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Codex Digital",
    url: siteUrl,
    logo: `${siteUrl}/logo.jpg`,
    sameAs: [
      "https://www.facebook.com/",
      "https://twitter.com/",
      "https://www.linkedin.com/"
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-00000-00000",
        contactType: "Customer Service",
        areaServed: "IN",
        availableLanguage: ["English"]
      }
    ],
    description,
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SEO
        title="Codex Digital — Web Development Agency | Home"
        description={description}
        path="/"
        image="/logo.jpg"
        jsonLd={jsonLd}
      />

      <section className="max-w-5xl mx-auto py-24 px-6">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Codex Digital — Creative Web Development</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">{description}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <article>
            <h2 className="text-2xl font-semibold mb-2">Web Development</h2>
            <p className="text-sm text-gray-700">Custom responsive websites and web apps built with modern tools and best practices for performance and accessibility.</p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold mb-2">UI / UX Design</h2>
            <p className="text-sm text-gray-700">Design that focuses on clarity, conversion, and delightful user experiences across devices.</p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold mb-2">SEO & Performance</h2>
            <p className="text-sm text-gray-700">Search-optimized markup, fast load times, and structured data to help your business get found.</p>
          </article>
        </div>

        <section className="mb-12">
          <h3 className="text-xl font-bold mb-3">Why choose Codex Digital?</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Experienced engineers and designers focused on measurable results.</li>
            <li>Mobile-first, accessible, and performance-minded implementations.</li>
            <li>Clear project milestones, friendly communication, and reliable support.</li>
          </ul>
        </section>

        <section className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link to="/services" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-md font-semibold">Explore Services</Link>
          <Link to="/projects" className="px-6 py-3 border border-gray-300 rounded-md">View Projects</Link>
          <Link to="/contact" className="px-6 py-3 bg-white text-black rounded-md">Get a Quote</Link>
        </section>
      </section>
    </main>
  );
};

export default Index;
