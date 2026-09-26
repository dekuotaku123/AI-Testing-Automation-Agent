import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Provider from "./provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body suppressHydrationWarning style={{ margin: 0, padding: 0 }}>
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}