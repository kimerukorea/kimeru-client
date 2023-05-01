import OpenGraph from "@/components/@shared/open-graph/OpenGraph";
import {
  defaultSlideFadeInVariants,
  framerMocker,
  staggerHalf,
} from "@/constants/Motions";
import Spacing from "@/styles/emotion-utils/spacing/spacing";
import { ViewIcon } from "@chakra-ui/icons";
import {
  Divider,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useGetQuizListQuery } from "../queries/useGetQuizListQuery";

export const IndexPage = () => {
  const { quizList } = useGetQuizListQuery();

  return (
    <VStack>
      <OpenGraph title="퀴즈 리스트" />
      <Image src="/logo.png" alt="kimeru" width={300} height={270} />

      <List
        as={motion.ul}
        variants={staggerHalf}
        {...framerMocker}
        width="100%"
        paddingX="4"
      >
        {quizList?.map((quiz) => (
          <ListItem
            as={motion.li}
            key={quiz.id}
            variants={defaultSlideFadeInVariants("bottom")}
            marginY="4"
          >
            <Link href={`/quiz/${quiz.id}`}>
              <Flex justifyContent="space-between">
                <Image
                  src={quiz.thumbnailImageUrl}
                  alt={quiz.name}
                  width={50}
                  height={50}
                />
                <Flex
                  direction="column"
                  justifyContent="space-between"
                  alignItems="flex-end"
                >
                  <Heading size="sm" color="orange.200" fontWeight="bold">
                    {quiz.name}
                  </Heading>
                  <Flex alignItems="center" gap={1}>
                    <ViewIcon color="whiteAlpha.900" />
                    <Text color="whiteAlpha.900" fontSize="xs">
                      {quiz.participationCount}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Spacing size={10} />
              <Divider />
            </Link>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};
