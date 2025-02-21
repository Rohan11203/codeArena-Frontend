export const levels = [
  {
    level: 1,
    description: "Move the frog to the right using ",
    initialCSS: { display: "flex" },
    targetCSS: { justifyContent: "flex-end" },
    hints: "Use 'justify-content' with 'flex-end'.",
  },
  {
    level: 2,
    description: "Move the frog to the Center using ",
    initialCSS: { display: "flex" },
    targetCSS: { justifyContent: "center" },
    hints: "Use 'justify-content' with 'flex-end'.",
  },
  {
    level: 3,
    description: "Move the frog to the left using ",
    initialCSS: { display: "flex", justifyContent: "flex-end" },
    targetCSS: { justifyContent: "flex-start" },
    hints: "Use 'justify-content' with 'flex-start'.",
  },
  {
    level: 4,
    description: "Move the frog to the left and right using ",
    initialCSS: { display: "flex", justifyContent: "flex-start",},
    targetCSS: { justifyContent: "space-between" },
    hints: "Use 'justify-content' with'space-between'.",
  },
  {
    level: 5,
    description: "Move the frog to the top right using   ",
    initialCSS: { display: "flex", flexDirection: "column-reverse" },
    targetCSS: { flexDirection: "row-reverse" },
    hints: "Use 'flex-direction' with 'column-reverse'.",
  },
];