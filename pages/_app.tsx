import {AppProps} from "next/app";
import Head from 'next/head'
import "../styles/globals.css";

const App = ({Component, pageProps}: AppProps) => {
    return (
        <>
            <Head>
                <title>핀코인 대표몰</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default App;