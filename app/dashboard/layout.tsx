import React from "react";
export default function DasboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      {/* <h1>Dashboard Layout</h1> */}
      {children}
    </section>
  );
}
