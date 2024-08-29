import { Inter } from "next/font/google";
import "./globals.css";
import Header, { ScriptInjector } from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dr. Yethindra Vityala",
  description: "Dr. Yethindra Vityala",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <ScriptInjector /> */}
      </head>
      <body className={inter.className}>
        <Header />

        <main className="max-w-screen-3xl container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
