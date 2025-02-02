// eslint-disable-next-line no-restricted-imports
import { RouterProvider } from "react-router-dom";

import { Center } from "@chakra-ui/react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";
import { router } from "pages/router";
import { Spinner, Text, VStack } from "@chakra-ui/react";

import { useAuthStore } from "modules/auth/application";
import React from "react";

const LoadState = () => {
  return (
    <div>
      <VStack>
        <Spinner
          color="blue.300"
          size="xl"
          borderWidth="4px"
          css={{ "--spinner-track-color": "gray" }}
        />
        <Text color="blue.300">Loading..</Text>
      </VStack>
    </div>
  );
};

function App() {
  const state = useAuthStore((store) => store.state);

  if (state === "finished") {
    return <RouterProvider router={router} />;
  }

  return (
    <Center h="95vh">
      <LoadState />
    </Center>
  );
}

export { App };
