import {
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useInput } from "./Title.hooks";

export const Title = () => {
  const { name, handleNameChange, description, handleDescriptionChange } =
    useInput();
  return (
    <VStack>
      <Text color="orange.200">문제 제작을 결심해줘서 고마워요.</Text>
      <Text color="orange.200">다른 누군가에게 반드시 도움이 될거에요.</Text>

      <VStack width="100%" gap={4}>
        <FormControl isRequired>
          <FormLabel color="whiteAlpha.900">문제 제목</FormLabel>
          <Input
            placeholder="자바스크립트 초급 레벨 테스트"
            value={name}
            onChange={handleNameChange}
            color="whiteAlpha.900"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel color="whiteAlpha.900">문제 설명</FormLabel>
          <Textarea
            placeholder="기초 자바스크립트 문제에 도전해봐요."
            value={description}
            onChange={handleDescriptionChange}
            color="whiteAlpha.900"
          />
        </FormControl>
      </VStack>
    </VStack>
  );
};
