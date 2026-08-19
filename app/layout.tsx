import type { Metadata } from "next";
import "./globals.css";
import CookieConsent from "./components/CookieConsent";

export const metadata: Metadata = {
  title: "airent24 — GPU-серверы и внедрение ИИ в России",
  description: "Аренда GPU-серверов, локальная ИИ-инфраструктура и интеграция с 1С, оборудованием и бизнес-процессами. Все данные в РФ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
