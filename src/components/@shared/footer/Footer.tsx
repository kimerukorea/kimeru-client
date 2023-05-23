import { GithubIcon } from "@/assets/svg/github";
import { ChatIcon, EmailIcon } from "@chakra-ui/icons";
import { Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { useClickButton } from "./Footer.hooks";
import { FooterProps } from "./Footer.types";
import { InquiryModal } from "./inquiry-modal/InquiryModal";

export const Footer = ({ iconButtonList }: FooterProps) => {
  const {
    handleInquiryButtonClick,
    handleMailButtonClick,
    handleGithubButtonClick,
  } = useClickButton();

  return (
    <HStack
      width="full"
      paddingX="4"
      paddingBottom="2"
      justifyContent="space-between"
    >
      <Text color="whiteAlpha.900" fontWeight="bold" fontSize="sm">
        © {new Date().getFullYear()} kimeru
      </Text>
      <Flex gap={2}>
        {iconButtonList?.map((iconButton, index) => (
          <Fragment key={index}>{iconButton}</Fragment>
        ))}

        <IconButton
          aria-label="inquiry"
          fontSize="18px"
          icon={<ChatIcon />}
          size="sm"
          onClick={handleInquiryButtonClick}
        />
        <IconButton
          aria-label="email"
          fontSize="20px"
          icon={<EmailIcon />}
          size="sm"
          onClick={handleMailButtonClick}
        />
        <IconButton
          aria-label="github"
          icon={<GithubIcon />}
          size="sm"
          onClick={handleGithubButtonClick}
        />
      </Flex>
      <InquiryModal />
    </HStack>
  );
};
