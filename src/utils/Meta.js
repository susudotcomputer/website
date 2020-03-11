import React from "react";
import Helmet from "react-helmet";

export const Meta = ({
  title,
  description,
  facebookImage,
  twitterImage,
  twitterImageAlt,
  url
}) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {title && <meta property="og:title" content={title} />}
      {title && <meta property="twitter:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {description && (
        <meta property="twitter:description" content={description} />
      )}
      {facebookImage && <meta property="og:image" content={facebookImage} />}
      {twitterImage && <meta property="twitter:image" content={twitterImage} />}
      {twitterImageAlt && (
        <meta property="twitter:image:alt" content={twitterImageAlt} />
      )}
      {url && <meta property="og:url" content={url} />}
      {url && <meta property="twitter:site" content={url} />}
    </Helmet>
  );
};
