import {AppProps} from "next/app";
import Head from 'next/head'
import "../styles/globals.css";

const App = ({Component, pageProps}: AppProps) => {
    return (
        <>
            <Head>
                <title>핀코인 대표몰</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default App;