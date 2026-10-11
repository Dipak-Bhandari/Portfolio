
import type React from "react";
import type { Metadata } from "next";
import { Delius_Swash_Caps, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@radix-ui/react-separator";
import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";
import Navigation from "@/components/navigation";

const delius = Delius_Swash_Caps({ subsets: ["latin"], weight: "400", variable: "--font-delius" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });



export const metadata: Metadata = {
  title: {
    default: "Dipak Bhandari - Full Stack Developer | Laravel | React",
    template: "%s | Dipak Bhandari",
  },
  description:
    "Full Stack Developer specializing in Laravel, Inertia.js, and React. Building web applications with RESTful APIs, PostgreSQL/MySQL, and responsive layouts using Tailwind CSS.",
  keywords: [
    "Laravel Developer",
    "React Developer",
    "Inertia.js Developer",
    "Full Stack Developer",
    "PHP Developer",
    "Web Application Development",
    "Software Engineer Portfolio",
    "Dipak Bhandari",
  ],
  authors: [{ name: "Dipak Bhandari", url: "https://dipak-bhandari.com.np" }],
  creator: "Dipak Bhandari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dipak-bhandari.com.np",
    title: "Dipak Bhandari - Full Stack Developer | Laravel | React",
    description:
      "Full Stack Developer specializing in Laravel, Inertia.js, and React. Building web applications with modern technologies.",
    siteName: "Dipak Bhandari Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dipak Bhandari - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dipak Bhandari - Full Stack Developer | Laravel | React",
    description:
      "Full Stack Developer specializing in Laravel, Inertia.js, and React. Building web applications with modern technologies.",
    images: ["/og-image.png"],
    creator: "@DipakBhandari",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
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
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${delius.variable} ${jetbrains.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <SidebarProvider> */}
            {/* <AppSidebar /> */}
            {/* <SidebarInset> */}
              <header className="flex h-0 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex items-center gap-2 px-4">
                  {/* <SidebarTrigger className="-ml-1" /> */}
                  <Separator
                    orientation="vertical"
                    className="mr-2 data-[orientation=vertical]:h-4"
                  />

                  {/* <DynamicBreadcrumb /> */}
                </div>
              </header>
              <Navigation/>
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="" >
                  {children}
                </div>
              </div>
            {/* </SidebarInset> */}
          {/* </SidebarProvider> */}
        </ThemeProvider>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dipak Bhandari",
              url: "https://dipak-bhandari.com.np",
              image: "https://dipak-bhandari.com.np/DB-logo.png",
              sameAs: [
                "https://github.com/dipak-bhandari",
                "https://www.linkedin.com/in/dipak-bhandari",
                "mailto:nescoz.dipak@gmail.com",
              ],
              jobTitle: "Full Stack Developer",
              description:
                "Full Stack Developer with expertise in Laravel, Inertia.js, React, and building web applications.",
              knowsAbout: [
                "Laravel",
                "React",
                "Inertia.js",
                "Next.js",
                "PHP",
                "PostgreSQL",
                "Web Development",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
