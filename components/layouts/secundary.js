import Head from "next/head";
import { Flex } from "@chakra-ui/react";

const Layout = ({ children, title }) => (
  <Flex
    m={8}
    w="100%"
    maxWidth={1480}
    h="90vh"
    maxHeight="90vh"
    mx="auto"
    px="6"
  >
    <>
      {title && (
        <Head>
          <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        </Head>
      )}
      {children}
    </>
  </Flex>
);

export default Layout;
