import type { ReactNode } from "react";

export const metadata = { title: "Demo app" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: "4rem" }}>{children}</body>
    </html>
  );
}
