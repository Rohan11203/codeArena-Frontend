import { PuzzleGame } from "../components/Puzzles";
import FlexboxFroggy from "../components/singlePlayerGames/FlexBoxGame";

export default function SinglePlayer(){
  return (
    <div>
      {/* Render a game that user clicks */}
      <PuzzleGame />
    </div>
  )
}