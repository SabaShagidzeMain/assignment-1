/* eslint-disable react/prop-types */
import React from "react";

export const metadata = {
  title: "The Witcher 3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/witcher.png" />
      </head>
      <body>
        <div id="root">{children}</div>
        <script type="module" src="/src/main.jsx"></script>
      </body>
    </html>
  );
}
