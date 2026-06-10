import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hima MG — Flutter Developer",
  description:
    "Flutter & Firebase Developer from Kerala, India. Building cross-platform mobile apps, web platforms, and scalable digital products. Open to Flutter Developer roles at product companies, startups, and international remote teams.",
  keywords: [
    "Flutter Developer Kerala",
    "Flutter Developer India",
    "Flutter Developer Portfolio",
    "Firebase Developer",
    "Next.js Developer",
    "Mobile Application Developer",
    "Dart Developer",
    "Cross-platform Developer",
    "Hima MG",
    "IT Head",
  ],
  authors: [{ name: "Hima MG", url: "https://github.com/Hima-MG" }],
  creator: "Hima MG",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Hima MG — Flutter Developer",
    description:
      "Flutter & Firebase Developer building real mobile products. Open to Flutter Developer roles at product companies, startups, and international remote teams.",
    siteName: "Hima MG Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hima MG — Flutter Developer",
    description:
      "Flutter & Firebase Developer building real mobile products. Open to Flutter Developer roles.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Hima MG",
              jobTitle: "Flutter Developer",
              email: "himaammu656@gmail.com",
              sameAs: [
                "https://github.com/Hima-MG",
                "https://www.linkedin.com/in/hima-m-g-954878259",
              ],
              address: {
                "@type": "PostalAddress",
                addressRegion: "Kerala",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body style={{ background: "#0A0A0A", color: "#FFFFFF", fontFamily: "Inter, system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
