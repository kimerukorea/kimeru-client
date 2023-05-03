import { bottomSlideByBottomProperty, framerMocker } from "@/constants/Motions";
import { size } from "@/styles";
import { CopyIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  HStack,
  Heading,
  Portal,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useGetQuizInfoQuery } from "../../queries";
import {
  useAnswer,
  useCTAButton,
  useFinalInfo,
  useFinalLottieSrc,
} from "./Final.hooks";

export const Final = () => {
  const { finalInfo } = useFinalInfo();
  const { data: quizInfo } = useGetQuizInfoQuery();
  const { answerCount } = useAnswer();
  const { handleShareButtonClick, handleOtherQuizButtonClick } = useCTAButton();
  const lottieAnimationData = useFinalLottieSrc();

  return (
    <VStack>
      <LottieAnimation loop autoplay animationData={lottieAnimationData} />
      <Text color="orange.200" fontSize="2xl">
        당신의 레벨은
      </Text>
      <Heading color="orange.300" fontSize="2xl">
        {finalInfo.mainTitle}
      </Heading>

      <Divider />

      <Text color="orange.100" fontWeight="extrabold" fontSize="2xl">
        {`정답 ${answerCount} / ${quizInfo?.questionCount}`}
      </Text>

      <Text color="orange.200" fontSize="md" textAlign="center">
        {finalInfo.descriptionExplanation}
      </Text>

      <Portal>
        <BottomButtonGroup
          role="group"
          variants={bottomSlideByBottomProperty}
          {...framerMocker}
        >
          <Stack width="100%">
            {quizInfo && (
              <Text color="orange.500" fontSize="sm" textAlign="center">
                퀴즈를 푼 개발자들은 평균&nbsp;
                <strong>{quizInfo.averageAnswerCount}</strong>
                개를 맞추고 있습니다.
              </Text>
            )}

            <HStack>
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
            </HStack>
          </Stack>
        </BottomButtonGroup>
      </Portal>
    </VStack>
  );
};

const BottomButtonGroup = styled(motion.div)`
  position: fixed;
  left: 20px;
  right: 20px;
  bottom: 40px;
  display: flex;
  gap: 8px;
`;

const ShadowedButton = styled(Button)`
  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
`;

const LottieAnimation = styled(Lottie)`
  ${size({
    width: 200,
    height: 200,
  })}
`;
