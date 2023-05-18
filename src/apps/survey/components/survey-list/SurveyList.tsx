import {
  defaultSlideFadeInVariants,
  framerMocker,
  staggerHalf,
} from "@/constants/Motions";
import { touchable } from "@/styles";
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
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSurveyListQuery } from "../../queries";

export const SurveyList = () => {
  const { surveyList } = useSurveyListQuery();

  return (
    <List
      as={motion.ul}
      variants={staggerHalf}
      {...framerMocker}
      width="100%"
      paddingX="4"
    >
      {surveyList?.map((survey) => (
        <ListItem
          as={motion.li}
          key={survey.id}
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

export const StyledLogoImage = styled(Image)`
  border-radius: 4px;
  aspect-ratio: 1;
`;

export const TouchableLink = styled(Link)`
  ${touchable}
`;
