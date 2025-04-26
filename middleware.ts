import createMiddleware from "next-intl/middleware"
import { locales, defaultLocale } from "./i18n/request"

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale,

  // Disable automatic locale detection to ensure manual switching works
  localeDetection: false
})

export const config = {
  // Match all pathnames except for
  // - ... files in the public folder
  // - ... files with extensions (e.g. favicon.ico)
  // - ... image optimization routes (e.g. /_next/image)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}

