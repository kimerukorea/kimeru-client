import {
  defaultSlideFadeInVariants,
  framerMocker,
  staggerHalf,
} from "@/constants/Motions";
import Spacing from "@/styles/emotion-utils/spacing/spacing";
import { ViewIcon } from "@chakra-ui/icons";
import { Divider, Flex, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useSurveyListQuery } from "../../queries";
import { StyledLogoImage, TouchableLink } from "./styles";

export const SurveyList = () => {
  const { surveyList } = useSurveyListQuery();

  return (
    <List
      as={motion.ul}
      variants={staggerHalf}
      width="100%"
      paddingX="4"
      {...framerMocker}
    >
      {surveyList?.map((survey) => (
        <ListItem
          key={survey.id}
          as={motion.li}
          variants={defaultSlideFadeInVariants("bottom")}
          marginY="4"
        >
          <TouchableLink href={`/survey/${survey.id}`}>
            <Flex justifyContent="space-between">
              <StyledLogoImage
                src={survey.thumbnailImageUrl}
                alt={survey.title}
                width={50}
                height={50}
              />
              <Flex
                direction="column"
                justifyContent="space-between"
                alignItems="flex-end"
              >
                <Heading size="sm" color="orange.200" fontWeight="bold">
                  {survey.title}
                </Heading>

                <Flex alignItems="center" gap={1}>
                  <ViewIcon color="whiteAlpha.900" />
                  <Text color="whiteAlpha.900" fontSize="xs">
                    {survey.participationCount}
                  </Text>
                </Flex>
              </Flex>
            </Flex>

            <Spacing size={10} />

            <Divider />
          </TouchableLink>
        </ListItem>
      ))}
    </List>
  );
};
