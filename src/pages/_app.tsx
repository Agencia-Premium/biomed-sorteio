import type { AppProps } from "next/app";
import GlobalStyle from "../styles/global";

import { ToastContainer } from "react-toastify";

import { Provider as NextAuthProvider } from "next-auth/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Component {...pageProps} />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </NextAuthProvider>
  );
}
export default MyApp;
