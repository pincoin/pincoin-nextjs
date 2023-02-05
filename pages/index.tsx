import Head from 'next/head'
import {useEffect, useState} from 'react';
import axios from 'axios';

const HomePage = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        async function fetchUsers() {
            const {data} = await axios.get(
                process.env.NEXT_PUBLIC_API_URL + "/auth/users",
                {},
            );
            setUser(data);
        }

        fetchUsers();
    }, []);

    console.log(user);

    return (
        <>
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
        </>);
}

export default HomePage;