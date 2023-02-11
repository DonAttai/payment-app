import "../styles/globals.css";
// import Head from "./head";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-slate-400">
        <Header />
        {children}
      </body>
    </html>
  );
}
