import type React from "react";
import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/language-context";
import { notFound } from "next/navigation";
import { locales } from "@/i18n/request";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sofia-pro",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mohamed Helles | Frontend Developer",
  description: "Personal portfolio of Mohamed Helles, Frontend Developer",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
  },
  manifest: "/site.webmanifest",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  // Use the correct direction based on the locale
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${
          locale === "ar" ? notoSansArabic.variable : ""
        } font-sans`}
        suppressHydrationWarning
      >
        <Providers locale={locale} messages={messages}>
          <LanguageProvider initialLocale={locale as "en" | "ar"}>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem={false}
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}
