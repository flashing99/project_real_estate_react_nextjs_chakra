 
import {
  Flex,
  Box,
  Text,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Checkbox,
  Button,
  CircularProgress,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const HeroForm = () => {
  const [isLoading, setLoading] = useState(false);

  //  .........................................
  const [storeValue, setStorage] = useState(() => {
    // getting stored value
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("ACCESS_STORE");
      const initial = saved !== null ? saved : "";
      localStorage.getItem("ACCESS_STORE") !="" 

      return initial;
    }
  });
  useEffect(() => {
    // storing input name
    localStorage.setItem("ACCESS_STORE", storeValue);
  }, [storeValue]);

  //  .........................................

  /*   const [stored, _setStorage] = useState(localStorage.getItem("ACCESS_STORE"));

  console.log(stored)

  function setStorage(store) {
    _setStorage(stored);

    if (stored) {
      localStorage.setItem("ACCESS_STORE", stored);
    } else {
      localStorage.removeItem("ACCESS_STORE");
    }
  } */

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(values) {
    // ..............
    setLoading(true);
    // ..............
    // console.log(values);
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        // ..............
        setLoading(false);

        setStorage("ok");
        // ..............
        resolve();

        reset({
          name: "",
          email: "",
          phone: "",
        });
      }, 2000);
    });
  }
  // .......................
  return (
    <Box bg="white" width="100%" rounded="md" color="gray.700" p="2rem">
      <Text fontSize="xl" fontWeight="bold">
        Free PDF Guide
      </Text>
      <Text fontSize="lg"> Complete Form below to download your guide</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Input
            id="name"
            placeholder="Name"
            type="texte"
            mt="1.3rem"
            p="1rem"
            {...register("name", {
              required: true,
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
          {errors.name && (
            <Text fontSize="xs" color="tomato">
              {errors.name.message}
            </Text>
          )}

          {/* ................ */}
          <Flex
            gap={{ base: "0", sm: "1rem" }}
             flexDir={{ base: "column", sm: "row" }}
             
          >
            <Input
              id="email"
              placeholder="Email"
              type="text"
              mt="1.3rem"
              p="1rem"
              {...register("email", {
                required: true,
                /* pattern: {
                  value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                  message: "Require a valid email", // JS only: <p>error message</p> TS only support string
                }, */
              })}
            />
            {errors.email && (
              <Text fontSize="xs" color="tomato">
                {errors.email.message}
              </Text>
            )}

            <Input
              id="phone"
              placeholder="Phone"
              type="text"
              mt="1.3rem"
              p="1rem"
              {...register("phone", {
                required: true,
                /* pattern: {
                  value:
                    /^[[0]{1}]?[-\s\.]?[5-7]{1}[0-9]{2}[-\s\.]?[0-9]{6}$/im, // 05xx / 06xx / 07xx + xxxxxx (0560159966)
                  message: "Require a phone number",
                }, */
              })}
            />
            {errors.phone && (
              <Text fontSize="xs" color="tomato">
                {errors.phone.message}
                {/* {errors.phone.type} */}
              </Text>
            )}
          </Flex>
          {/* .................. */}
          <Flex
            alignItems="baseline"
            justifyContent="start"
            flexDir="row"
            gap="1rem"
            mt="1.3rem"
          >
            <Checkbox
              id="gdpr"
              placeholder="GDPR"
              type="checkbox"
              {...register("gdpr", { require: true })}
            />
            I consent to having this website store my submitted info
            {errors.gdpr && (
              <Text fontSize="xs" color="tomato">
                {" "}
                {errors.gdpr.type}
              </Text>
            )}
          </Flex>
          {/* ................ */}

          {isLoading && (
            <Button
              width="full"
              fontSize="xl"
              mt="1.5rem"
              p="2rem"
              isLoading
              loadingText=" Download Now"
              colorScheme="blue"
              variant="solid"
              spinnerPlacement="start"
            >
              Download Now
            </Button>
          )}

          {!isLoading && (
            <Button
              width="full"
              fontSize="xl"
              mt="1.5rem"
              p="2rem"
              color="white"
              colorScheme="blue"
              type="submit"
            >
              Download Now
            </Button>
          )}
        </FormControl>
      </form>
      {storeValue == "ok" && (
        <Box bg="gray.200" mt="1.3rem" borderRadius="md">
          <Text
            w="100%"
            textAlign="center"
            p="1rem 1rem "
            fontSize="lg"
            fontWeight="bold"
            color="tomato"
          >
            Download your PDF guide
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default HeroForm;
