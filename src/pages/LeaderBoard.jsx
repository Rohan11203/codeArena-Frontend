import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Box,
} from "@mui/material";
import { Trophy, Medal, Award } from "lucide-react";
import { Navbar } from "../components/Navbar";

const players = [
  {
    rank: 1,
    username: "CodeMaster",
    score: 9850,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    rank: 2,
    username: "AlgoQueen",
    score: 9720,
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    rank: 3,
    username: "ByteWizard",
    score: 9680,
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    rank: 4,
    username: "SyntaxSage",
    score: 9550,
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    rank: 5,
    username: "LogicLord",
    score: 9490,
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    rank: 6,
    username: "DataDiva",
    score: 9420,
    avatar: "https://i.pravatar.cc/150?img=6",
  },
  {
    rank: 7,
    username: "BugSlayer",
    score: 9380,
    avatar: "https://i.pravatar.cc/150?img=7",
  },
  {
    rank: 8,
    username: "DevDynamo",
    score: 9340,
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    rank: 9,
    username: "CipherChamp",
    score: 9290,
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    rank: 10,
    username: "QueryNinja",
    score: 9240,
    avatar: "https://i.pravatar.cc/150?img=10",
  },
];

const getRankIcon = (rank) => {
  switch (rank) {
    case 1:
      return <Trophy size={24} color="#FFD700" />;
    case 2:
      return <Medal size={24} color="#C0C0C0" />;
    case 3:
      return <Award size={24} color="#CD7F32" />;
    default:
      return null;
  }
};

const Leaderboard = () => {
  return (
    <div className="bg-[#0f0f0f] p-8">
    <Navbar />
      <Box sx={{ bgcolor: "#0f0f0f", p: 4, borderRadius: 2,  }}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{ color: "white", mb: 4 }}
        >
          CodeArena Leaderboard
        </Typography>
        <TableContainer
          component={Paper}
          sx={{ bgcolor: "#1a1a1a", color: "white", p:4,  }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="leaderboard table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#cef241", fontWeight: "bold" }}>
                  Rank
                </TableCell>
                <TableCell sx={{ color: "#cef241", fontWeight: "bold" }}>
                  Player
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: "#cef241", fontWeight: "bold" }}
                >
                  Score
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {players.map((player) => (
                <TableRow
                  key={player.rank}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={{ color: "white" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      {getRankIcon(player.rank)}
                      {player.rank}
                    </Box>
                  </TableCell>
                  <TableCell sx={{ color: "white" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Avatar src={player.avatar} alt={player.username} />
                      {player.username}
                    </Box>
                  </TableCell>
                  <TableCell align="right" sx={{ color: "white" }}>
                    {player.score}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default Leaderboard;
