import {
  Box,
  VStack,
  HStack,
  Heading,
  Divider,
  Text,
  Icon,
  Link,
} from "@chakra-ui/react";

import { FiTwitter, FiGithub } from "react-icons/Fi";

const Sidebar = () => (
  <VStack h="100%" width="100%" maxWidth="350px" justify="center" mt={6} mb={6}>
    <Box>
      <VStack align="center" w="100%">
        <Link href='https://portfolio-blog-phi.vercel.app'>
        <Heading as="h1" size="3xl" pr="20">
          Elienai
        </Heading>
        <Heading as="h1" size="3xl" pl="20">
          Soares
        </Heading>
        </Link>
      </VStack>

      <Divider />

      <Text mt={4} fontSize="ms" variant="paragraph" pl={2} pr={2}>
        Edições feitas por hobby, muitas destas foram trabalhos feitos para
        Tsundoku Traduções, site de tradução de Light Novels.
      </Text>
    </Box>
    <HStack align="flex-start" w="100%" spacing="15px" pl="15px">
      <Link href="https://twitter.com/ElienaiSoares07">
        <Icon
          as={<FiTwitter/>}
          fontSize="20"
          _hover={{
            cursor: "pointer",
            transform: "scale(1.5)",
            transition: "0.5s ease",
          }}
        />
      </Link>
      <Link href="https://github.com/NaySoares">
        <Icon
          as={<FiGithub/>}
          fontSize="20"
          _hover={{
            cursor: "pointer",
            transform: "scale(1.5)",
            transition: "0.5s ease",
          }}
        />
      </Link>
    </HStack>
  </VStack>
);

export default Sidebar;
