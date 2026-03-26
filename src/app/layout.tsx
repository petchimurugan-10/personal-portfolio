import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Petchimurugan's Portfolio",
  description:
    "Personal portfolio of Petchimurugan S — a cybersecurity-focused CS undergraduate specializing in Networking & Cybersecurity.",
  authors: [{ name: "Petchimurugan S" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#0d1117" }}>
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
