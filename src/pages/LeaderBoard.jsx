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
import { useEffect, useState } from "react";
import { getLeaderBoardData } from "../api/auth";

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
  const [players1, setPlayers] = useState([]);

  async function fetchLeaderBoardData() {
    const res = await getLeaderBoardData();
    setPlayers(res.data.Users);
  }

  useEffect(() => {
    fetchLeaderBoardData();
  }, []);


  // Sort players based on totalScore in descending order and assign rank
  const sortedPlayers = [...players1].sort((a, b) => b.totalScore - a.totalScore);

  return (
    <div className="bg-[#0f0f0f] p-8">
      <Navbar />
      <Box sx={{ bgcolor: "#0f0f0f", p: 4, borderRadius: 2 }}>
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
          sx={{ bgcolor: "#1a1a1a", color: "white", p: 4 }}
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
              {sortedPlayers.map((player, index) => (
                <TableRow
                  key={index} // Use index as a key if there's no unique id
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={{ color: "white" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      {getRankIcon(index + 1)} {/* Rank based on sorted position */}
                      {index + 1}
                    </Box>
                  </TableCell>
                  <TableCell sx={{ color: "white" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      {/* Placeholder Avatar */}
                      <Avatar
                        src={player.Avtar}
                        alt={player.name}
                      />
                      {player.name}
                    </Box>
                  </TableCell>
                  <TableCell align="right" sx={{ color: "white" }}>
                    {player.totalScore}
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
