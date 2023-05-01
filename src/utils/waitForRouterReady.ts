import Router from "next/router";

export const waitForRouterReady = () => {
  return new Promise<void>((resolve) => {
    Router.ready(resolve);
  });
};
