import "../styles/globals.css";
import Header from "./Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment App",
  description: "Attai Payment App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-gray-800 text-gray-100 antialiased ">
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
