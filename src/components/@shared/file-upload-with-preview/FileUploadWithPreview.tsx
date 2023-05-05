import { DownloadIcon } from "@chakra-ui/icons";
import { Badge, Box, FormLabel, Input, InputProps } from "@chakra-ui/react";

export const FileUploadWithPreview = (props: InputProps) => {
  return (
    <Box>
      <FormLabel>
        <Badge fontSize="md" py="1" px="3">
          썸네일 업로드 <DownloadIcon />
        </Badge>
      </FormLabel>
      <Input
        type="file"
        {...props}
        style={{
          display: "none",
        }}
      />
    </Box>
  );
};
