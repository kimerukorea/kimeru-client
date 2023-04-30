import { css, Global } from "@emotion/react";

const GlobalCSS = ({ font }: { font: string }) => {
  return (
    <Global
      styles={css`
        html {
          font-family: ${font};
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        ul {
          list-style: none;
        }

        a {
          text-decoration: none;
        }

        input {
          outline: none;
          border: none;
        }

        button {
          background-color: transparent;
          cursor: pointer;
          border: none;

          &:disabled,
          &[data-disabled="disabled"] {
            cursor: not-allowed;
          }
        }
      `}
    />
  );
};

export default GlobalCSS;
