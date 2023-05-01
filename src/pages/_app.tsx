import { CommonLayout } from "@/components/@shared";
import { GlobalCSS } from "@/styles";
import { Database } from "@/types/supabase";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import {
  Session,
  createBrowserSupabaseClient,
} from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  type DehydratedState,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";

const client = new QueryClient();

const inter = Inter({ subsets: ["latin"] });

const theme = extendTheme({
  fonts: {
    body: inter.style.fontFamily,
    heading: inter.style.fontFamily,
  },
});

const App = ({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState; initialSession: Session }>) => {
  //TODO: supabase client 일원화
  const [supabaseClient] = useState(() =>
    createBrowserSupabaseClient<Database>()
  );

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <QueryClientProvider client={client}>
        <Hydrate state={pageProps.dehydratedState}>
          <ChakraProvider theme={theme}>
            <GlobalCSS font={inter.style.fontFamily} />
            <CommonLayout>
              <Analytics />
              <Component {...pageProps} />
            </CommonLayout>
          </ChakraProvider>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SessionContextProvider>
  );
};

export default App;
