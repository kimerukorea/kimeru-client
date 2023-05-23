import { touchable } from "@/styles";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

export const StyledLogoImage = styled(Image)`
  border-radius: 4px;
  aspect-ratio: 1;
`;

export const TouchableLink = styled(Link)`
  ${touchable}
`;
