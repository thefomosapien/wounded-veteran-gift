import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://wounded-veteran-gift.vercel.app"
  ),
  title: "Sponsor a Wounded Veteran — WeSalute Wounded Veteran Program",
  description:
    "One gift sponsors one wounded veteran with a full year of WeSalute+. The need has outpaced the giving — your gift moves a name off the waitlist.",
  openGraph: {
    title: "Sponsor a Wounded Veteran — WeSalute Wounded Veteran Program",
    description:
      "One gift sponsors one wounded veteran with a full year of WeSalute+. The need has outpaced the giving — your gift moves a name off the waitlist.",
    images: [{ url: "/images/wounded-vet-program.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/wounded-vet-program.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={spaceMono.variable}>
      <body>{children}</body>
    </html>
  );
}
