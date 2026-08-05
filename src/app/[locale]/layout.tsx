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
    '@type': 'Event',
    name: 'Premios Estrella Dorada 2026',
    url: 'https://estrelladorada.asobares.org',
    image: 'https://estrelladorada.asobares.org/images/ESTRELLA DORADA LOGO.png',
    description: 'La distinción más prestigiosa de la industria del entretenimiento nocturno y gastronómico del Eje Cafetero.',
    startDate: '2026-09-24T19:00:00-05:00',
    endDate: '2026-09-24T22:00:00-05:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'Fonda La Floresta',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Cra. 6 #29',
        addressLocality: 'Armenia',
        addressRegion: 'Quindío',
        addressCountry: 'CO'
      }
    },
    organizer: {
      '@type': 'Organization',
      name: 'Asobares Quindío',
      email: 'asobaresquindio@asobares.org'
    }
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
