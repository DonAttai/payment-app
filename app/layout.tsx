import "../styles/globals.css";
// import Head from "./head";
import Header from "./Header";

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
