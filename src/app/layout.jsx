import "./globals.css";
import NavBar from "@/components/Navbar/NavBar";

export const metadata = {
  title: "WhatToDo 2",
  description: "A simple virtual assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">
        <NavBar/>
        <main className="main">
          {children}
        </main>
      </body>
    </html>
  );
}
