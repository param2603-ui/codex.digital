import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://codexdigital.ltd";

/**
 * SEO component to centralize meta tags, Open Graph, Twitter cards, canonical links and JSON-LD.
 * Props:
 * - title, description, path (relative path starting with /), image (absolute or relative), keywords (string), robots
 * - jsonLd (object) will be injected as application/ld+json when provided
 * - googleVerification (string) optional token for Search Console verification
 */
const SEO = ({
  title = "Codex Digital",
  description = "Codex Digital is a creative web development agency delivering responsive websites, custom web apps, and UI/UX design.",
  path = "/",
  image = "/logo.jpg",
  keywords = "web development, digital agency, UI/UX design, React, SEO, Codex Digital",
  robots = "index, follow",
  jsonLd = null,
  googleVerification = null,
}) => {
  const canonical = path.startsWith("http") ? path : `${SITE_URL.replace(/\/$/, "")}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL.replace(/\/$/, "")}${image.startsWith("/") ? image : `/${image}`}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      {googleVerification && <meta name="google-site-verification" content={googleVerification} />}

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured data */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
