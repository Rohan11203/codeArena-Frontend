import { useEffect, useState } from "react";
import { useStore } from "../ContextAPi/store/ContextProvide";
import { updateInfo } from "../api/auth";
import { Grid, Play, Star, Info, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/ShadButton';
import { Navbar } from "../components/Navbar";
import { levels } from "./Levels/gridBoxLevels";


const GridProperties = [
  { name: 'place-items: center', description: 'Center items in the grid' },
  { name: 'align-items: start', description: 'Align items at the start' },
  { name: 'justify-content: space-between', description: 'Space items evenly' },
];

export default function GridBoxArena() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [userCSS, setUserCSS] = useState("");
  const [showHint, setShowHint] = useState(false);
  const { xp, setXp,fetchInfo } = useStore();
  const [gridXp, setGridXp] = useState(0);
  
   useEffect(() =>{
      fetchInfo()
    },[])

  const IncreaseXp = async () => {
    try {
      setGridXp((prevGridXp) => {
        const updatedGridXp = prevGridXp + 5;
        setXp((prevXp = 0) => {
          const newXp = (prevXp || 0) + updatedGridXp;
          updateInfo({ totalScore: newXp }).catch(console.error);
          return newXp;
        });
        return updatedGridXp;
      });
    } catch (error) {
      console.log(error);
    }
  };

  const parseCSS = (cssString) => {
    const styleObj = {};
    cssString.split(";").filter(Boolean).forEach((rule) => {
      const [property, value] = rule.split(":").map(str => str.trim());
      if (property && value) {
        const camelCaseProperty = property.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
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
    const isCorrect = Object.keys(targetCSS).every((key) => boxStyle[key] === targetCSS[key]);
    if (isCorrect) {
      IncreaseXp();
      setCurrentLevel(currentLevel + 1);
      setUserCSS("");
      setShowHint(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] p-4">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Grid className="w-8 h-8 text-blue-400" />
            <h1 className="text-2xl font-bold text-blue-400">GridBox Arena</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-medium">XP: {gridXp}</span>
            </div>
            <div className="bg-gray-800 px-4 py-2 rounded-lg text-gray-200">
              Level {currentLevel + 1} of {levels.length}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-xl text-gray-200 my-4">
                  {levels[currentLevel].description}
                  <span className="text-blue-400">Grid properties</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {GridProperties.map((prop) => (
                    <div key={prop.name} className="bg-gray-700 p-3 rounded-lg">
                      <code className="text-blue-400 text-sm">{prop.name}</code>
                      <p className="text-gray-400 text-xs mt-1">{prop.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 mt-4">
                <textarea
                  className="w-full h-48 bg-gray-900 text-gray-200 p-4 rounded-lg font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={userCSS}
                  onChange={(e) => setUserCSS(e.target.value)}
                  placeholder="Write your CSS here..."
                />
                <div className="flex space-x-2 text-gray-600 mt-4">
                  <Button variant="outline" size="sm" onClick={() => setShowHint(!showHint)}>
                    <Info className="w-4 h-4 mr-1 " /> Hint
                  </Button>
                  <Button onClick={handleCheck} size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                    <CheckCircle2 className="w-4 h-4 mr-1" /> Check
                  </Button>
                </div>
                {showHint && <div className="mt-4 p-3 bg-gray-700 rounded-lg text-gray-300 text-sm">💡 {levels[currentLevel].hints}</div>}
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 pt-4">
              <div className="bg-gray-900 rounded-lg p-4 h-[500px] relative grid " style={{ ...levels[currentLevel].initialCSS,  ...boxStyle }}>
                <div className="bg-blue-500 h-24 w-24 rounded-lg flex items-center justify-center text-white font-medium shadow-lg">
                  📦
                </div>

                <div className="bg-blue-500 h-24 w-24 rounded-lg flex items-center justify-center text-white font-medium shadow-lg">
                  📦
                </div>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}