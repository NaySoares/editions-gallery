import { Flex } from "@chakra-ui/react";
import Layout from "../components/layouts/secundary";
import Sidebar from "../components/sidebar";
import Gallery from "../components/gallery";

const Page = () => {
  return (
    <Layout>
      <Flex
        direction={["column", "row"]}
        border="2px"
        spacing={0}
      >
        <Sidebar />
        <Gallery />
      </Flex>
    </Layout>
  );
};

export default Page;
