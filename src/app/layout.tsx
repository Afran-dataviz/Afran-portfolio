import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "A AFRAN | Data Analyst & Business Intelligence Specialist",
  description: "Portfolio of A AFRAN, an expert Data Analyst & Power BI Developer specializing in transforming raw data into actionable insights through Power BI, SQL, Python, and Excel.",
  keywords: ["Data Analyst", "Power BI Developer", "Business Intelligence", "SQL Server", "Python Data Science", "Portfolio", "Afran Analytics"],
  authors: [{ name: "A AFRAN" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <body className="min-h-full flex flex-col bg-bg-space text-gray-200">
        {children}
      </body>
    </html>
  );
}

