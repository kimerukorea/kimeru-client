import styled from "@emotion/styled";
import React from "react";
import { CirclesWithBar } from "react-loader-spinner";

export const PageLoader = () => {
  return (
    <Container>
      <CirclesWithBar
        height="100"
        width="100"
        color="#ED8936"
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </Container>
  );
};

const Container = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
