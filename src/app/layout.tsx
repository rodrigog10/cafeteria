// app/layout.tsx
import Footer from "./components/footer";
import "./globals.css";
export const metadata = {
  title: "DrinkAnCoffee",
  description: "Um site moderno para uma cafeteria.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`antialiased scroll-smooth overflow-auto`}>
      <body>{children}
        <Footer/>
      </body>
    </html>
  );
}
