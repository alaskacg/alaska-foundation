import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  path?: string;
}

const defaultTitle = "The Alaska Foundation - Forest Conservation & Land Preservation";
const defaultDescription = "The Alaska Foundation is dedicated to preserving Alaska's pristine forests and wilderness through conservation, land protection, and community engagement. Protecting the Tongass and Chugach forests for future generations.";
const defaultKeywords = "Alaska forest conservation, Land preservation Alaska, Tongass forest protection, Chugach conservation, Alaska charitable foundation, Donate land Alaska, Alaska wilderness preservation, nonprofit conservation Alaska";
const siteUrl = "https://alaskacg.github.io/alaska-foundation";

export function SEO({ 
  title, 
  description = defaultDescription, 
  keywords = defaultKeywords,
  ogImage = `${siteUrl}/og-image.jpg`,
  path = ""
}: SEOProps) {
  const fullTitle = title ? `${title} | The Alaska Foundation` : defaultTitle;
  const url = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          "name": "The Alaska Foundation",
          "url": siteUrl,
          "logo": `${siteUrl}/logo.png`,
          "description": defaultDescription,
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Alaska",
            "addressCountry": "US"
          },
          "sameAs": [],
          "areaServed": {
            "@type": "State",
            "name": "Alaska"
          },
          "knowsAbout": [
            "Forest Conservation",
            "Land Preservation",
            "Environmental Protection",
            "Tongass National Forest",
            "Chugach National Forest"
          ],
          "memberOf": {
            "@type": "Organization",
            "name": "Conservation Organizations"
          }
        })}
      </script>
    </Helmet>
  );
}
