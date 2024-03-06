import { type AppType } from "next/app";
import { Noto_Sans } from "next/font/google";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const noto = Noto_Sans({
  subsets: ["cyrillic", "latin"],
  variable: "--font-sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`font-sans ${noto.variable}`}>
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
