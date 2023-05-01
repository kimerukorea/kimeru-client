import Head from "next/head";
import ogLogo from "../../../../public/logo.png";

interface Props {
  title: string;
  description?: string;
  imageUrl?: string;
}

/**
 * @name OpenGraph
 * @description
 * 현재 페이지에 [OpenGraph](https://nowonbun.tistory.com/517) (공유 시 타이틀, 설명, 이미지) 를 적용할 수 있도록 하는 컴포넌트입니다.
 * @example
 * <OpenGraph
 *    title="kimeru"
 *    description="JUST 1 minute"
 *    imageUrl="https://your_image_url.png"
 * />
 */
const OpenGraph = ({
  title,
  description = "JUST 1 minute",
  imageUrl,
}: Props) => {
  const computedTitle = `kimeru | ${title}`;
  const computedImageUrl = imageUrl ?? ogLogo.src;

  return (
    <Head>
      <title>{computedTitle}</title>
      <meta property="og:title" content={computedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={computedTitle} />

      <meta property="og:image" content={computedImageUrl} />

      {/* 트위터 공유 */}
      <meta name="twitter:image" content={computedImageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default OpenGraph;
