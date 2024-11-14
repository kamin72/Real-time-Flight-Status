import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "../public/globals.css";
import { Inter } from "next/font/google";
import "../public/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <AntdRegistry className={inter.className}>{children}</AntdRegistry>
    </body>
  </html>
);

export default RootLayout;