import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Button,
  Flex,
} from "@chakra-ui/react";

const ModalCustom = ({ src, isOpen, onClose, altImg = "edtion" }) => (
  <>
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="4xl"
      returnFocusOnClose="false"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Flex align="center" justify="center">
            <Image
              src={src}
              alt={altImg}
              loading="lazy"
              htmlHeight="1000px"
              htmlWidth="900px"
            />
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={onClose}>
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
);

export default ModalCustom;
