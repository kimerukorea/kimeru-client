import { size } from "@/styles";
import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

export const BottomButtonGroup = styled(motion.div)`
  position: fixed;
  left: 20px;
  right: 20px;
  bottom: 40px;
  display: flex;
  gap: 8px;
`;

export const ShadowedButton = styled(Button)`
  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
`;

export const LottieAnimation = styled(Lottie)`
  ${size({
    width: 200,
    height: 200,
  })}
`;
