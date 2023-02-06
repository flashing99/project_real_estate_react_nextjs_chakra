import PropertyCard from "@/features/common/modules/PropertyCard";
import DefaultLayout from "@/features/Layout/DefaultLayout";
import { Box, SimpleGrid } from "@chakra-ui/react";

const Properties = ({ properties }) => {
  console.log({ properties });
  return (
    <DefaultLayout>
      <Box bg="#f7f8f9"  p="3rem">
        <Box maxW="1280px" margin="0 auto" my={{ base: "2rem", sm: "0" }}>
            <SimpleGrid column="3"           minChildWidth="300px" gap={{ base:"0" , md:"2rem" }}>
                {
                    properties.map((prperty)=>{

                     return   <PropertyCard  key={prperty.id} {...prperty}/>
                    })
                }
              
            </SimpleGrid>
        </Box>
      </Box>
    </DefaultLayout>
  );
};

export default Properties;

export async function getStaticProps(Context) {
  const { hits } = require("@/features/data/properties");
  return {
    props: {
      properties: hits,
    },
  };
}
