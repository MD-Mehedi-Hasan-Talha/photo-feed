import Navbar from "@/app/Components/Header/Navbar";
import "./globals.css";

export const metadata = {
  title: "Photo Feed",
  description: "Photo Feed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
