import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export const SEO = ({ title, description, image = "/og-image.png", url = "https://trueagents.ai" }: SEOProps) => {
  const fullTitle = `${title} | TrueAgents.ai`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};