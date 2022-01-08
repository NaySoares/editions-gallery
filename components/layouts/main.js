import Head from "next/head";

const Main = ({ children }) => {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale-1" />
        <meta name="description" content="Elienai`s Gallery" />
        <meta name="author" content="Elienai Soares" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <title>E.Soares - Gallery</title>
      </Head>
        {children}
    </main>
  );
};

export default Main;
