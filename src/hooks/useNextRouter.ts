import { waitForRouterReady } from "@/utils";
import { useRouter } from "next/router";

interface Options {
  suspense?: boolean;
}

export function useNextRouter(options: Options = { suspense: true }) {
  const router = useRouter();

  if (options.suspense && !router.isReady) {
    throw waitForRouterReady();
  }

  return router;
}
