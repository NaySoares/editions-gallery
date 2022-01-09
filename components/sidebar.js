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
import { VerticalSlide, HorizontalSlide } from "./animation/slide";
import { IoLogoTwitter, IoLogoGithub } from "react-icons/io5";

const Sidebar = () => (
  <VStack h="100%" width="100%" maxWidth="350px" justify="center" mt={6} mb={6}>
    <Box>
      <VStack align="center" w="100%">
        <HorizontalSlide delay={0.4}>
          <Link href="https://portfolio-blog-phi.vercel.app">
            <Heading as="h1" size="3xl" pr="20">
              Elienai
            </Heading>
            <Heading as="h1" size="3xl" pl="20">
              Soares
            </Heading>
          </Link>
        </HorizontalSlide>
      </VStack>

      <Divider />

      <VerticalSlide delay={1}>
        <Text mt={4} fontSize="ms" variant="paragraph" pl={2} pr={2}>
          Edições feitas por hobby, muitas destas foram trabalhos feitos para
          Tsundoku Traduções, site de tradução de Light Novels.
        </Text>
      </VerticalSlide>
    </Box>
    <HStack align="flex-start" w="100%" spacing="15px" pl="15px">
      <VerticalSlide delay={1}>
        <Link href="https://twitter.com/ElienaiSoares07" target="_blank">
          <Icon
            as={IoLogoTwitter}
            fontSize="20"
            _hover={{
              cursor: "pointer",
              transform: "scale(1.5)",
              transition: "0.5s ease",
            }}
          />
        </Link>
        <Link href="https://github.com/NaySoares" target="_blank">
          <Icon
            as={IoLogoGithub}
            fontSize="20"
            _hover={{
              cursor: "pointer",
              transform: "scale(1.5)",
              transition: "0.5s ease",
            }}
          />
        </Link>
      </VerticalSlide>
    </HStack>
  </VStack>
);

export default Sidebar;
