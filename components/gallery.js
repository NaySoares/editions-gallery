import { VStack, Wrap, WrapItem } from "@chakra-ui/react";
import Card from "./card";
import { Drag } from "./animation/drag";

function Gallery() {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("/public/images/", "")] = r(item);
    });
    return images;
  }
  const imagesList = importAll(
    require.context("/public/images/", false, /\.(png|jpe?g|svg)$/)
  );
  const list = Object.entries(imagesList).map(([item]) =>
    item.replace(/\.\//, "")
  );

  return (
    <VStack
      borderLeft="1px"
      borderColor="gray"
      overflowY="scroll"
      overflowX="hidden"
    >
      <Wrap
        justify="center"
        align="center"
        w="6xl"
        width="100%"
        maxWidth={1050}
        h="100%"
        gap={10}
        p={4}
      >
        {list.map((item, index) => {
          return (
            <WrapItem mt={5} key={index}>
              <Drag delay={`1.${index}`}>
                <Card src={`/images/${item}`} />
              </Drag>
            </WrapItem>
          );
        })}
      </Wrap>
    </VStack>
  );
}

export default Gallery;
