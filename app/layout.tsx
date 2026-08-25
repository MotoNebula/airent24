import type { Metadata } from "next";
import "./globals.css";
import CookieConsent from "./components/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL("https://airent24.ru"),
  title: "airent24 — GPU-серверы и внедрение ИИ в России",
  description: "Аренда GPU-серверов, локальная ИИ-инфраструктура и интеграция с 1С, оборудованием и бизнес-процессами. Все данные в РФ.",
  keywords: ["GPU серверы", "внедрение ИИ", "локальный ИИ", "ИИ для бизнеса", "RAG", "on-premise", "интеграция с 1С"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: "airent24",
    title: "airent24 — GPU-серверы и внедрение ИИ в России",
    description: "Проектируем и запускаем локальные ИИ-решения: инфраструктура, модели и интеграции в одном контуре.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "airent24",
          url: "https://airent24.ru",
          email: "privacy@airent24.ru",
          description: "GPU-инфраструктура и внедрение искусственного интеллекта для бизнеса в России",
          areaServed: "RU",
          founder: { "@type": "Person", name: "Албу Валентин Георгиевич" },
        }).replace(/</g, "\\u003c") }} />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
