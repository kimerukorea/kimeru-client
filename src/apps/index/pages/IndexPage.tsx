import {
  Box,
  Divider,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { useGetQuizListQuery } from "../queries/useGetQuizListQuery";
import { ViewIcon } from "@chakra-ui/icons";

export const IndexPage = () => {
  const { quizList } = useGetQuizListQuery();

  return (
    <VStack>
      <Image src="/logo.png" alt="kimeru" width={300} height={270} />

      <List width="100%" paddingX="4">
        {quizList?.map((quiz) => (
          <Link key={quiz.id} href={`/quiz/${quiz.id}`}>
            <ListItem marginY="4">
              <Flex justifyContent="space-between">
                <Image
                  src={quiz.thumbnailImageUrl}
                  alt={quiz.name}
                  width={50}
                  height={50}
                />
                <Flex
                  direction="column"
                  justifyContent="center"
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
            </ListItem>
            <Divider />
          </Link>
        ))}
      </List>
    </VStack>
  );
};
