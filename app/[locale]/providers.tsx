"use client"

import { NextIntlClientProvider } from "next-intl"
import type { ReactNode } from "react"

export function Providers({
  children,
  locale,
  messages,
}: {
  children: ReactNode
  locale: string
  messages: any
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
      {children}
    </NextIntlClientProvider>
  )
}

