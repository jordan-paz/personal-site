import Head from "next/head";

export default function SEO({ children, location, title, image, description }) {
  return (
    <Head>
      {/* <html lang="en" /> */}
      <title>Your Site Title</title>
      {/* FAVICONS */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />
      {/* METATAGS */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content="ENTER YOUR DESCRIPTION HERE" />
      {/* OPEN GRAPH */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || "/logo.svg"} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:site_name" content="Your Site Name" key="ogsitename" />
      <meta property="og:description" content={description} key="ogdesc" />
      {children}
    </Head>
  );
}
