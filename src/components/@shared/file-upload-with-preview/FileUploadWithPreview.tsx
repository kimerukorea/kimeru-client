import { DownloadIcon } from "@chakra-ui/icons";
import { Badge, Box, FormLabel, Input, InputProps } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
import { memo } from "react";

type FileUploadWithPreviewProps = {
  image: File | null;
  badgeText?: string;
} & InputProps;

const FileUploadWithPreviewComponent = ({
  image,
  badgeText = "썸네일 업로드",
  ...rest
}: FileUploadWithPreviewProps) => {
  return (
    <Box>
      <FormLabel>
        <Badge fontSize="md" py="1" px="3">
          {badgeText} <DownloadIcon />
        </Badge>
      </FormLabel>
      {image ? (
        <ThumbnailImage
          src={URL.createObjectURL(image)}
          alt="thumbnail"
          width={340}
          height={100}
        />
      ) : null}
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
export const FileUploadWithPreview = memo(FileUploadWithPreviewComponent);

const ThumbnailImage = styled(Image)`
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
