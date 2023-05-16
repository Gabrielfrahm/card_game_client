import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Castoro Titling",
  },

  body: {
    "-webkit-font-smoothing": "antialiased",
    backgroundColor: "$black",
    color: "$white",

    "*::-webkit-scrollbar": {
      width: "5px",
    },

    "*::-webkit-scrollbar-track": {
      background: "#312e21",
    },

    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#afa794",
      borderRadius: "0px",
      border: "1px none #ffffff",
    },
  },
});
