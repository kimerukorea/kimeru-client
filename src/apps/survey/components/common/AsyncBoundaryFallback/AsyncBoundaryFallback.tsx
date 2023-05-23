import { GlobalErrorLoader, PageLoader } from "@/components/@shared";
import { AsyncBoundary } from "@suspensive/react";
import { PropsWithChildren } from "react";

export const AsyncBoundaryFallback = ({ children }: PropsWithChildren) => {
  return (
    <AsyncBoundary.CSROnly
      pendingFallback={<PageLoader />}
      rejectedFallback={(errorProps) => <GlobalErrorLoader {...errorProps} />}
    >
      {children}
    </AsyncBoundary.CSROnly>
  );
};
