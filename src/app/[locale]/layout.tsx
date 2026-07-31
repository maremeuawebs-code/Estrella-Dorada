import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {Outfit, Inter} from 'next/font/google';
import {notFound} from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import '../globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit'
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Estrella Dorada',
    url: 'https://estrelladorada.com',
    logo: 'https://estrelladorada.com/favicon.svg',
    description: 'Plataforma premium de premiación para Estrella Dorada (Asobares Quindío).'
  };

  return (
    <html lang={locale} className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <JsonLd data={jsonLdData} />
      </head>
      <body className="antialiased font-sans">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
