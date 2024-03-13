import { type AppType } from "next/app";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
