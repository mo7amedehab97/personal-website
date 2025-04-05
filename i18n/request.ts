import { getRequestConfig } from "next-intl/server";

// Define the locales supported by the application
export const locales = ["en", "ar"];
export const defaultLocale = "en";

export default getRequestConfig(async ({ locale }) => {
  // Validate the locale
  if (!locales.includes(locale as any)) {
    return { messages: {} };
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
}); 