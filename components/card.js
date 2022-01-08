import { Image, Box, useDisclosure } from "@chakra-ui/react";
import ModalCustom from "./modal";

function Card({ src, title }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };
  return (
    <Box>
      <Image
        src={src}
        alt={title}
        objectFit="fit"
        loading="lazy"
        htmlWidth="320px"
        _hover={{
          cursor: "pointer",
        }}
        onClick={() => handleClick()}
      />
      <ModalCustom src={src} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export default Card;