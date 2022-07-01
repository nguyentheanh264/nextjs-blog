import Link from "next/link";
import Head from 'next/head'
import Script from 'next/script';
import Layout from "../../components/layout";
import styles from '../../components/layout.module.css'
import Image from 'next/image'


export default function FirstPost() {
    return (
        <>
            <Layout>
            <Head>
                <title>First Post</title>
            </Head>
           <Script 
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() => console.log('============= 123123',123123) }
           />
           
            <Image 
                src='/images/logojava.png'
                height={300}
                width={300}
                alt='DUY QUYET'
                className={styles.avatar}
            />
            </Layout>
          
        </>
    
    )
    }
