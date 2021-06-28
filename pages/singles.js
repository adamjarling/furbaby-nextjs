import Head from "next/head";
import Layout from "components/layout";
import SplashSingles from "components/splash-singles";

export default function Singles() {
  return (
    <Layout>
      <Head>
        <title>Singles - Furbaby & the Tight Spaces</title>
      </Head>
      <SplashSingles />
    </Layout>
  );
}
