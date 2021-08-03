import type { AppProps } from "next/app";
import GlobalStyle from "../styles/global";

import { Provider as NextAuthProvider } from "next-auth/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Component {...pageProps} />
      <GlobalStyle />
    </NextAuthProvider>
  );
}
export default MyApp;
