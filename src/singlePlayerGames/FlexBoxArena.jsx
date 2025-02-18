import { useEffect, useState } from "react";
import { useStore } from "../ContextAPi/store/ContextProvide";
import { updateInfo } from "../api/auth";
import {
  Code2,
  Play,
  ChevronLeft,
  ChevronRight,
  Star,
  Info,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/ShadButton";
import { toastStore } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";

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

const FlexProperties = [
  {
    name: "justify-content: flex-start",
    description: "Align items at the start",
  },
  { name: "justify-content: flex-end", description: "Align items at the end" },
  { name: "justify-content: center", description: "Center align items" },
  { name: "justify-content: space-between", description: "Space items evenly" },
];

export default function FlexBoxArena() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [userCSS, setUserCSS] = useState("");
  const [showHint, setShowHint] = useState(false);
  const { xp, setXp, fetchInfo } = useStore();
  const [frogXp, setFrogXp] = useState(0);

  useEffect(() => {
    fetchInfo();
  }, []);

  const IncreaseXp = async () => {
    try {
      setFrogXp((prevFrogXp) => {
        const updatedFrogXp = prevFrogXp + 5;

        setXp((prevXp = 0) => {
          const newXp = (xp || 0) + updatedFrogXp;
          const updateData = { totalScore: newXp };

          console.log(updateData);
          console.log(updatedFrogXp, prevXp);

          // Call API after updating XP
          updateInfo(updateData).catch(console.error);

          return newXp;
        });

        return updatedFrogXp;
      });
    } catch (error) {
      console.log(error);
    }
  };

  const parseCSS = (cssString) => {
    const styleObj = {};
    const rules = cssString.split(";").filter((rule) => rule.trim() !== "");
    rules.forEach((rule) => {
      const [property, value] = rule.split(":").map((str) => str.trim());
      if (property && value) {
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
    ...parseCSS(userCSS),
  };

  const handleCheck = () => {
    const targetCSS = levels[currentLevel].targetCSS;
    const isCorrect = Object.keys(targetCSS).every(
      (key) => boxStyle[key] === targetCSS[key]
    );

    if (isCorrect) {
      IncreaseXp();
      setCurrentLevel(currentLevel + 1);
      setUserCSS("");
      setShowHint(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] p-4">
      {console.log(xp)}
      <Navbar />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-green-400" />
            <h1 className="text-2xl font-bold text-green-400">FlexBox Arena</h1>
          </div>
          <div className="flex items-center  space-x-4">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-medium">XP: {frogXp}</span>
            </div>
            <div className="bg-gray-800 px-4 py-2 rounded-lg text-gray-200">
              Level {currentLevel + 1} of {levels.length}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-6">
          {/* Left Panel */}
          <div className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-xl text-gray-200 my-4">
                  {levels[currentLevel].description}
                  { 
                    levels[currentLevel].level === 5 ? <span className="text-green-400 font-medium">flex-direction</span> : <span className="text-green-400 font-medium">Justify-content</span>
                    
                  }
                </h2>

                <div className="space-y-4">
                  <h3 className="text-gray-300 font-medium">
                    Available Properties:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {FlexProperties.map((prop) => (
                      <div
                        key={prop.name}
                        className="bg-gray-700 p-3 rounded-lg"
                      >
                        <code className="text-green-400 text-sm">
                          {prop.name}
                        </code>
                        <p className="text-gray-400 text-xs mt-1">
                          {prop.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="relative pt-4">
                  <textarea
                    className="w-full h-48 bg-gray-900 text-gray-200 p-4 rounded-lg font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
                    value={userCSS}
                    onChange={(e) => setUserCSS(e.target.value)}
                    placeholder="Write your CSS here..."
                  />
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowHint(!showHint)}
                    >
                      <Info className="w-4 h-4 mr-1" />
                      Hint
                    </Button>
                    <Button
                      onClick={handleCheck}
                      size="sm"
                      className="bg-green-500 hover:bg-green-600 text-white"
                    >
                      <CheckCircle2 className="w-4 h-4 mr-1" />
                      Check
                    </Button>
                  </div>
                </div>
                {showHint && (
                  <div className="mt-4 p-3 bg-gray-700 rounded-lg text-gray-300 text-sm">
                    💡 {levels[currentLevel].hints}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Preview */}
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 pt-4">
              <div className="bg-gray-900 rounded-lg p-4 h-[500px] relative">
                <div
                className="gap-2"
                  style={{
                    ...levels[currentLevel].initialCSS,
                    height: "100%",
                    border: "2px solid rgba(74, 222, 128, 0.2)",
                    borderRadius: "0.5rem",
                    ...boxStyle,
                  }}
                >
                  <div className="bg-green-500 h-24 w-24 rounded-lg flex items-center justify-center text-white font-medium shadow-lg transition-all duration-300">
                    🐸
                  </div>
                  <div className="bg-green-500 h-24 w-24 rounded-lg flex items-center justify-center text-white font-medium shadow-lg transition-all duration-300">
                    🐸
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
