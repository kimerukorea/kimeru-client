import { bottomSlideByBottomProperty, framerMocker } from "@/constants/Motions";
import { CopyIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Divider, Heading, Portal, Text, VStack } from "@chakra-ui/react";
import { useGetQuizInfoQuery } from "../../../queries";
import {
  useAnswer,
  useCTAButton,
  useFinalInfo,
  useFinalLottieSrc,
} from "./Final.hooks";
import {
  BottomButtonGroup,
  LottieAnimation,
  ShadowedButton,
} from "./Final.styles";

export const Final = () => {
  const { finalInfo } = useFinalInfo();
  const { data: quizInfo } = useGetQuizInfoQuery();
  const { answerCount } = useAnswer();
  const { onShareLink, onMoveOtherPath } = useCTAButton();
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

      {quizInfo && (
        <Text color="orange.500" fontSize="sm" textAlign="center" mt="10px">
          퀴즈를 푼 개발자들은 평균&nbsp;
          <strong>{quizInfo.averageAnswerCount}</strong>
          개를 맞추고 있습니다.
        </Text>
      )}

      <Portal>
        <BottomButtonGroup
          role="group"
          variants={bottomSlideByBottomProperty}
          {...framerMocker}
        >
          <ShadowedButton
            rightIcon={<CopyIcon />}
            width="full"
            boxShadow="dark-lg"
            onClick={onShareLink}
          >
            공유하기
          </ShadowedButton>
          <ShadowedButton
            rightIcon={<HamburgerIcon />}
            width="full"
            onClick={onMoveOtherPath}
          >
            다른 테스트하기
          </ShadowedButton>
        </BottomButtonGroup>
      </Portal>
    </VStack>
  );
};
