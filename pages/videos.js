import Head from "next/head";
import Layout from "components/layout";
import SplashVideos from "components/splash-videos";

export default function Videos() {
  return (
    <Layout>
      <Head>
        <title>Videos - Furbaby & the Tight Spaces</title>
      </Head>
      <SplashVideos />
    </Layout>
  );
}
