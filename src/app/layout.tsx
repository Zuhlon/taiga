import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Контакт.ИИ — Единая панель управления бизнес-коммуникациями",
  description: "Светофор метрик покажет проблемы за 30 секунд. Экономия 160 часов в год на сборе отчётов. ROI 340% за 3 месяца.",
  keywords: ["Контакт.ИИ", "колл-центр", "аналитика", "виджеты", "AI", "Telegram", "бизнес-коммуникации"],
  authors: [{ name: "Контакт.ИИ" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Контакт.ИИ",
    description: "Единая панель управления бизнес-коммуникациями",
    url: "https://contact-ai.ru",
    siteName: "Контакт.ИИ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Контакт.ИИ",
    description: "Единая панель управления бизнес-коммуникациями",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
