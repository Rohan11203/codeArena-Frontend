import Layout from "./Layout";

export function PuzzleGame() {
  return ( 
    <Layout>
      <div className="bg-zinc-900 px-12 h-screen">
      <div className="flex justify-evenly  gap-5 ">
          <div className="mt-10 border border-gray-600  bg-blue-500 h-80 w-full">
            Card
          </div>

          <div className="mt-10 border h-80  w-full border-gray-600  bg-blue-500">
            Card
          </div>
        </div>
        <div>
          <h1 className="text-white font-poppins text-2xl pt-5">
          Classic Puzzle - Easy
          </h1>
          <p className="text-white">Improve your skills by solving algorithmic puzzles</p>

          <div className="flex justify-evenly gap-5">
          <div className="mt-10 border border-gray-600  bg-blue-500 h-60 w-96">
            Card
          </div>

          <div className="mt-10 border h-60 w-96 border-gray-600  bg-blue-500">
            Card
          </div>

          <div className="mt-10 border h-60 w-96 border-gray-600  bg-blue-500">
            Card
          </div>

          <div className="mt-10 border h-60 w-96 border-gray-600  bg-blue-500">
            Card
          </div>
        </div>
        
        </div>
      </div>
    </Layout>
  )
}