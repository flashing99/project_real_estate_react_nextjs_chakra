import { usePropertyFormat } from "@/features/common/Hooks/usePropertyFormat";
import TextContentBox from "@/features/common/modules/TextContentBox";
import DefaultLayout from "@/features/Layout/DefaultLayout";
import PropertyStats from "@/features/Property/components/PropertyStats";
import PropertyThumbnailSlider from "@/features/Property/components/PropertyThumbnailSlider";
import {
  Box,
  Flex,
  Text,
  Grid,
  GridItem,
  SimpleGrid,
  Badge,
} from "@chakra-ui/react";
import { TbMapPin } from "react-icons/tb";

const singleProperty = ({ property }) => {
 // console.log({ property });

  const {
    address,
    coverPhoto,
    propertyType,
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalID,
    photos,
    description,
    coverVideo,
    panorama,
    amenities,
    furnished,
  } = usePropertyFormat(property);

   
  //console.log({ amenities });

 

  return (
    <DefaultLayout>
      <Box bg="#f7f8f9" py="3rem">
        <Box>
          <Grid
            templateColumns="repeat(6, 1fr)"
            gap="5"
            maxW="1280px"
            m="0 auto"
          >
            <GridItem colSpan={"6"}>
              <Text
                fontSize={"3xl"}
                fontWeight="medium"
                color="blue.800"
                textAlign={{ base: "center", sm: "left" }}
              >
                {propertyType}
                {title}
              </Text>
              <Flex
                fontSize={"xl"}
                fontWeight="medium"
                color="blue.600"
                gap="0.5rem"
                textAlign={"center"}
                alignItems="center"
                flexDir={{ base: "column", bsm: "row" }}
                my={{ base: "1rem", sm: "0" }}
              >
                <TbMapPin />
                <Text fontWeight={"light"}>
                  {address}- ID:{externalID}
                </Text>
                <Badge colorScheme={"green"}>{purpose}</Badge>
              </Flex>
            </GridItem>

            {/* ............... */}
            <GridItem colSpan={{ base: "6", sm: "3" }}>
              <PropertyThumbnailSlider photos={photos} />
            </GridItem>
            {/* ............... */}
            <GridItem colSpan={{ base: "6", sm: "3" }}>
              <PropertyStats
                rooms={baths}
                baths={baths}
                price={price}
                sqSize={sqSize}
              />
              <TextContentBox    title="description">
                <Text
                  color={"gray.600"}
                  fontSize="1rem"
                  fontWeight={"light"}
                  noOfLines="4"
                >
                  {description}
                </Text>
              </TextContentBox>

              <TextContentBox title="Amenities">
                <SimpleGrid
                  color={"gray.600"}
                  fontSize="1rem"
                  fontWeight={"light"}
                  columns={{ base:"1",sm:"2" }}
                >
                  {amenities.length ?amenities.map((item)=><Text   key={item}>{item}</Text>)  : "Please contact us form more info"}
                </SimpleGrid>
              </TextContentBox>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </DefaultLayout>
  );
};

export default singleProperty;

// .......................

export async function getServerSideProps(context) {
  const property = require("@/features/data/property.json");
  return {
    props: {
      property,
    },
  };
}
