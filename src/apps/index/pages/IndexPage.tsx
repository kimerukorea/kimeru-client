import { Footer } from "@/apps/index/components/footer";
import { QuizList } from "@/apps/index/components/quiz-list";
import OpenGraph from "@/components/@shared/open-graph/OpenGraph";
import { VStack } from "@chakra-ui/react";
import Image from "next/image";

export const IndexPage = () => {
  return (
    <VStack>
      <OpenGraph title="퀴즈 리스트" />
      <Image src="/logo.png" alt="kimeru" width={300} height={270} />
      <QuizList />
      <Footer />
    </VStack>
  );
};
