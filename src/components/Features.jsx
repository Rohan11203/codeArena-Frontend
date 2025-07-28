export const Features = () => {
  const stats = [
    { count: "50+", label: "Total Registers" },
    { count: "20+", label: "Total Problems" },
    { count: "5+", label: "Total Games" },
    { count: "20+", label: "Leaderboard Ranks" },
  ];

  return (
    <>
      <style>{`
        /* Define the keyframe animation */
        @keyframes infinite-scroll {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        /* Apply the animation to the inner container */
        .animate-scroller {
          animation: infinite-scroll 30s linear infinite;
        }
      `}</style>

      <div className="relative  overflow-hidden  py-4">
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, #000 0%, transparent 0%, transparent 100%, #000 100%)",
          }}
        ></div>

        <div className="flex w-max animate-scroller">
          {[...stats, ...stats].map((stat, index) => (
            <div key={index} className="mx-4 flex-shrink-0">
              <div className="bg-[#111111] border border-yellow-500/20 rounded-2xl w-52 h-36 flex flex-col justify-center items-center shadow-lg shadow-yellow-500/10">
                <h1 className="text-4xl font-bold text-yellow-400 pb-2">
                  {stat.count}
                </h1>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
