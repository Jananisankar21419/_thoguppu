import "./globals.css";

export const metadata = {
  title: "thoguppu",
  description: "beauty of temples",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/Container 269.svg" sizes="any" />
      </head>
      <body className="bg-[#C6BEAC] ">{children}</body>
    </html>
  );
}
