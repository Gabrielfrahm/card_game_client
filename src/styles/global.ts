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
  },
});
