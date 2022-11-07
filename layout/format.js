import Footer from "../components/footer";
import Header from "../components/header";
import Head from "next/head";

export default function Format({children}) {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
