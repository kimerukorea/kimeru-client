export const questions = {
  main: [
    {
      step: 1,
      title: "useState의 setter는 동기로 실행되나요?",
      description: {
        explanation: "setter란, useState 반환 배열의 2번째 인자를 뜻해요",
        imageUrl:
          "https://zjiploxydrjwjnbstxib.supabase.co/storage/v1/object/public/image/KakaoTalk_Photo_2023-04-29-01-16-37.png",
      },
      solution: {
        explanation:
          "setter함수는 비동기로 실행되요. 리액트는 효율적으로 렌더링하기 위해 여러 개의 상태값 변경 요청을 배치로 처리해요. 만약 리액트가 상태값 변경 함수를 동기로 처리하면 하나의 상태값 변경 함수가 호출될 때마다 화면을 다시 그리기 때문에 성능 이슈가 생길 수 있어요. 만약 동기로 실행시키기를 원한다면 flushSync를 이용하면 되요.",
        imageUrl:
          "https://zjiploxydrjwjnbstxib.supabase.co/storage/v1/object/public/image/KakaoTalk_Photo_2023-04-29-01-16-37.png",
        reference: ["naver.com"],
      },
      answerValue: true,
    },
    {
      step: 2,
      title: "useRef의 추론되는 타입이 아래와 같나요?",
      description: {
        explanation: "result 는 string타입인가요?",
        imageUrl:
          "https://zjiploxydrjwjnbstxib.supabase.co/storage/v1/object/public/image/KakaoTalk_Photo_2023-04-29-01-16-37.png",
      },
      solution: {
        explanation: "setter란, useState 반환 배열의 2번째 인자를 뜻해요",
        imageUrl:
          "https://zjiploxydrjwjnbstxib.supabase.co/storage/v1/object/public/image/KakaoTalk_Photo_2023-04-29-01-16-37.png",
      },
      answerValue: false,
    },
    {
      step: 3,
      title: "12312312useState의 setter는 동기로 실행되나요?",
      description: {
        explanation:
          "set12312312ter란, useState 반환 배열의 2번째 인자를 뜻해요",
        imageUrl:
          "https://zjiploxydrjwjnbstxib.supabase.co/storage/v1/object/public/image/KakaoTalk_Photo_2023-04-29-01-16-37.png",
      },
      solution: {
        explanation: "setter란, useState 반환 배열의 2번째 인자를 뜻해요",
        imageUrl:
          "https://zjiploxydrjwjnbstxib.supabase.co/storage/v1/object/public/image/KakaoTalk_Photo_2023-04-29-01-16-37.png",
      },
      answerValue: true,
    },
  ],
  final: [
    {
      maxRange: 3,
      description: "못하셨어요",
    },
    {
      maxRange: 6,
      description: "쏘쏘",
    },
    {
      maxRange: 8,
      description: "굿",
    },
    {
      maxRange: 10,
      description: "베리굿",
    },
  ],
} as const;
