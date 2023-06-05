"use client";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { AppThemeProvider } from "@/contexts/ThemeContext";
import ReducerProvider from "@/contexts/Reducer";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppThemeProvider>
            <ReducerProvider>{children}</ReducerProvider>
          </AppThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
