import { Container } from "@chakra-ui/react";
import { CommonLayoutProps } from "./CommonLayout.types";

export const CommonLayout = ({ children }: CommonLayoutProps) => {
  return (
    <Container
      backgroundColor="gray.900"
      height="100vh"
      minWidth="100vw"
      paddingTop={"60px"}
    >
      {children}
    </Container>
  );
};
