import { DownloadIcon } from "@chakra-ui/icons";
import { Badge, Box, FormLabel, Input, InputProps } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";

type FileUploadWithPreviewProps = {
  image: File;
} & InputProps;

export const FileUploadWithPreview = ({
  image,
  ...rest
}: FileUploadWithPreviewProps) => {
  return (
    <Box>
      <FormLabel>
        <Badge fontSize="md" py="1" px="3">
          썸네일 업로드 <DownloadIcon />
        </Badge>
      </FormLabel>
      <ThumbnailImage
        src={URL.createObjectURL(image)}
        alt="thumbnail"
        width={340}
        height={100}
      />
      <Input
        type="file"
        {...rest}
        style={{
          display: "none",
        }}
      />
    </Box>
  );
};

const ThumbnailImage = styled(Image)`
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
