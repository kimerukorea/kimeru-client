import { size } from "@/styles";
import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

export const LottieAnimation = styled(Lottie)`
  ${size({
    width: 250,
    height: 250,
  })}
`;

export const BottomButtonGroup = styled(motion.div)`
  display: flex;
  gap: 8px;

  width: 100%;
`;

export const ShadowedButton = styled(Button)`
  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
`;
