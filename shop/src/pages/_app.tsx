import "@/assets/css/main.css";
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from "next/app";
import QueryProvider from '@/framework/gql/client/query-provider';
import { CartProvider } from '@/store/quick-cart/cart.context';
import Maintenance from '@/components/maintenance/layout';
import { NextPageWithLayout } from "@/types";
import { useRouter } from "next/router";
import { getDirection } from "@/lib/constants";
import PrivateRoute from '@/lib/private-route';
import { ModalProvider } from "@/components/ui/modal/modal.context";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const authenticationRequired = Component.authenticationRequired ?? false;
  const { locale } = useRouter();
  const dir = getDirection(locale);

  return (
    <>
      <div dir={dir}>
        {/* <SessionProvider session={session}> */}
          <QueryProvider pageProps={pageProps}>
            {/* <SearchProvider> */}
              <ModalProvider>
                <CartProvider>
                  <>
                    {/* <DefaultSeo /> */}
                    <Maintenance>
                      {authenticationRequired ? (
                        <PrivateRoute>
                          {getLayout(<Component {...pageProps} />)}
                        </PrivateRoute>
                      ) : (
                        getLayout(<Component {...pageProps} />)
                      )}
                    </Maintenance>
                    {/* <ManagedModal /> */}
                    {/* <ManagedDrawer /> */}
                    {/* <ToastContainer autoClose={2000} theme="colored" /> */}
                    {/* <SocialLogin /> */}
                  </>
                </CartProvider>
              </ModalProvider>
            {/* </SearchProvider> */}
          </QueryProvider>
        {/* </SessionProvider> */}
      </div>
    </>
  );
}

export default appWithTranslation(App);
