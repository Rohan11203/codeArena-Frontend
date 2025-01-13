import { useState } from "react";
import { useStore } from "../../ContextAPi/store/ContextProvide";
import { updateInfo } from "../../api/auth";

const levels = [
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
];

export default function FlexboxFroggy() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [userCSS, setUserCSS] = useState("");
  const { xp, setXp } = useStore();

  const IncreaseXp = async () => {
    try {
      const newXp = xp + 10;
      const updateData = {
        totalScore: newXp,
      };
      console.log(updateData);
      await updateInfo(updateData);
      setXp(newXp);
    } catch (error) {
      console.log(error);
    }
  };

  const parseCSS = (cssString) => {
    const styleObj = {};
    const rules = cssString.split(";").filter((rule) => rule.trim() !== ""); // Split by ";" and filter empty rules
    rules.forEach((rule) => {
      const [property, value] = rule.split(":").map((str) => str.trim()); // Split by ":" and trim
      if (property && value) {
        // Convert property to camelCase for React
        const camelCaseProperty = property.replace(
          /-([a-z])/g,
          (match, letter) => letter.toUpperCase()
        );
        styleObj[camelCaseProperty] = value;
      }
    });
    return styleObj;
  };

  const boxStyle = {
    ...parseCSS(userCSS), // Merge user-defined styles
  };
  console.log(boxStyle);

  const handleCheck = () => {
    const targetCSS = levels[currentLevel].targetCSS;
    const isCorrect = Object.keys(targetCSS).every(
      (key) => boxStyle[key] === targetCSS[key]
    );
    if (isCorrect) {
      IncreaseXp(); // Increase XP when answering correctly
      setCurrentLevel(currentLevel + 1);
      alert("Correct");
    } else {
      alert("Try again");
    }
  };

  return (
    <div className="h-screen w-full bg-gray-500 flex justify-evenly">
      <div className="bg-green-500 h-full w-[50%]">
        <div className="flex justify-between m-5">
          <div>FlexBox Froggy</div>
          <div>Level {currentLevel + 1}</div>
        </div>

        <p className="m-5">{levels[currentLevel].description}</p>

        <div className="pl-16">
          <ul className="list-disc">
            <li>row</li>
            <li>row-reverse</li>
            <li>column</li>
            <li>column-reverse</li>
          </ul>
        </div>

        <div className="bg-gray-400 h-2/4 m-5">
          <textarea
            className="h-full w-full"
            value={userCSS}
            onChange={(e) => setUserCSS(e.target.value)}
            placeholder="Write your CSS here..."
          />
          <button onClick={handleCheck} className="bg-black">
            Submit
          </button>
        </div>
      </div>

      <div className="bg-gray-300 h-full w-[50%]">
        <div>
          <div
            style={{
              ...levels[currentLevel].initialCSS,
              height: "500px",
              border: "1px solid black",
              ...boxStyle,
            }}
          >
            <div className="bg-green-700 h-24 w-24">
              <p>Box</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
