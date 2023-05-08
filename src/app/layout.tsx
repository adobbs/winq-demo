import "~/styles/globals.css";
import Head from 'next/head';

export default function RootLayout({ children }: {children: React.ReactNode}) {
    return (
      <html lang="en">
        <Head>
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <body className="h-full bg-purple-100">{children}</body>
      </html>
    );
}
