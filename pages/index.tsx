import Head from 'next/head'
import {useEffect} from 'react';

const HomePage = () => {
    let user;
    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch('http://localhost:3000/api/user')
            const data = await res.json();
            console.log(data);
            return data;
        }
        user = fetchUser();
    }, []);

    console.log(user);

    return (
        <div>
            <Head>
                <title>대한민국 1등 온라인상품권쇼핑몰 :: 핀코인</title>
                <meta name="description" itemProp="description" content="포스트 내용"/>
                <meta name="keywords" itemProp="keywords" content="키워드,태그"/>
                <meta property="og:site_name" content="블로그 타이틀"/>
                <meta property="og:title" content="포스트 타이틀"/>
                <meta property="og:url" content="토스트 주소"/>
                <meta property="og:description" content="포스트 내용"/>
            </Head>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </div>);
}

export default HomePage;