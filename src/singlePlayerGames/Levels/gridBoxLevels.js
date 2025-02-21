export const levels = [
  {
    level: 1,
    description: "Place the item in the center using ",
    initialCSS: { display: "grid"   },
    targetCSS: { placeItems: "center" },
    hints: "Use 'place-items' with 'center'.",
  },
  {
    level: 2,
    description: "Align items to the start using ",
    initialCSS: { display: "grid", alignItems: "end" },
    targetCSS: { alignItems: "start" },
    hints: "Use 'align-items' with 'start'.",
  },
  {
    level: 3,
    description: "Distribute items evenly at start using ",
    initialCSS: { display: "grid", justifyContent: "center" },
    targetCSS: { justifyContent: "space-between" },
    hints: "Use 'justify-content' with 'space-between'.",
  }
];
