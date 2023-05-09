import { stats } from "@/apps/survey/assets/json";
import { bottomSlideByBottomProperty, framerMocker } from "@/constants/Motions";
import { size } from "@/styles";
import { CopyIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { palette } from "./Final.constants";
import { useCTAButton, useGetSurvey } from "./Final.hooks";

export const Final = () => {
  const { convertData, surveyMain } = useGetSurvey();

  const { handleShareButtonClick, handleOtherQuizButtonClick } = useCTAButton();

  return (
    <VStack backgroundColor="white">
      <LottieAnimation loop autoplay animationData={stats} />

      {surveyMain?.map((item, index) => (
        <VStack key={item.step}>
          <Text color="orange.400" fontSize="sm">
            {item.question}
          </Text>

          <Box width="300px" height="200px">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={convertData[index]}
                margin={{
                  top: 5,
                  right: 50,
                  left: 20,
                  bottom: 5,
                }}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" fontSize={12} />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={100}
                  fontSize={12}
                />
                <Tooltip />
                <Bar dataKey="비율" fill={palette[index]} barSize={20}>
                  {convertData[index].map((item) => (
                    <Cell
                      key={item.name}
                      fill={palette[Math.floor(Math.random() * 10)]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </VStack>
      ))}

      <BottomButtonGroup
        role="group"
        variants={bottomSlideByBottomProperty}
        {...framerMocker}
      >
        <ShadowedButton
          rightIcon={<CopyIcon />}
          width="full"
          boxShadow="dark-lg"
          onClick={handleShareButtonClick}
        >
          공유하기
        </ShadowedButton>
        <ShadowedButton
          rightIcon={<HamburgerIcon />}
          width="full"
          onClick={handleOtherQuizButtonClick}
        >
          다른 테스트하기
        </ShadowedButton>
      </BottomButtonGroup>
    </VStack>
  );
};

const LottieAnimation = styled(Lottie)`
  ${size({
    width: 250,
    height: 250,
  })}
`;

const BottomButtonGroup = styled(motion.div)`
  display: flex;
  gap: 8px;

  width: 100%;
`;

const ShadowedButton = styled(Button)`
  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
`;
