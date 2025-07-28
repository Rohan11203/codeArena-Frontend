import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Box,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { Play, Info, Code, Users, Trophy, Zap } from "lucide-react";
import MultiGame from "../assets/multiGame.png";
import FlexGame from "../assets/flexGame.png";
import GridGame from "../assets/gridGame.png";
import CodeSimon from "../assets/codeSimon.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal } from "./ui/Modal";

const GameShowcase = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const gameDetails = {
    "Code Simon": {
      description:
        "Challenge your memory and coding skills with Code Simon! This innovative game combines the classic Simon memory game with programming concepts. Each round presents a sequence of code snippets that you must memorize and repeat correctly. Features include:\n\n• Progressive difficulty levels\n• Various programming language options\n• Score tracking and personal bests\n• Tutorial mode for beginners",
    },
    "Clash Of Code": {
      description:
        "Experience the thrill of competitive programming in Clash of Code! Race against other developers in real-time to solve challenging algorithmic problems. Key features include:\n\n• Real-time multiplayer competitions\n• Diverse problem categories\n• Comprehensive test cases\n• Global leaderboard system\n• Code efficiency scoring",
    },
    "Grid Box": {
      description:
        "Grid Box is a unique puzzle game that combines coding logic with spatial reasoning. Navigate through a grid-based environment while solving programming challenges. Features include:\n\n• Multiple difficulty levels\n• Algorithm optimization challenges\n• Custom level creation\n• Performance metrics tracking\n• Interactive tutorials",
    },
  };

  const games = [
    {
      title: "Code Simon",
      image: CodeSimon,
      description:
        "Memorize and repeat an increasing sequence of code snippets each round.",
      link: "/codesimon",
    },

    {
      title: "Clash Of Code",
      image: MultiGame,
      description:
        "Compete in real-time to solve a DSA problem. Players are scored based on passing all test cases with their solution.",
      link: "multiplayer",
    },

    {
      title: "Grid Box",
      image: GridGame,
      description:
        "Navigate a grid to solve coding puzzles, testing algorithms and logic to find the optimal solution.",
      link: "/gridBox",
    },
  ];

  const aboutFeatures = [
    {
      icon: <Code size={24} />,
      title: "Diverse Challenges",
      description: "From algorithms to full-stack development",
    },
    {
      icon: <Users size={24} />,
      title: "Community-Driven",
      description: "Connect with coders worldwide",
    },
    {
      icon: <Trophy size={24} />,
      title: "Competitive Edge",
      description: "Climb the leaderboards and showcase your skills",
    },
    {
      icon: <Zap size={24} />,
      title: "Real-Time Battles",
      description: "Face off against others in live coding duels",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <AppBar position="static" sx={{ backgroundColor: "#1a1a1a" }}></AppBar>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          gutterBottom
          sx={{ color: "white", mb: 4 }}
        >
          Explore Our Coding Games
        </Typography>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
        >
          <Grid container spacing={4}>
            {games.map((game, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#1a1a1a",
                    color: "white",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={game.image}
                    alt={game.title}
                    height="200"
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {game.title}
                    </Typography>
                    <Typography>{game.description}</Typography>
                  </CardContent>
                  <div className="flex justify-between p-4">
                    <Button
                      onClick={() => {
                        navigate(game.link);
                      }}
                      variant="contained"
                      startIcon={<Play size={16} />}
                      sx={{
                        backgroundColor: "#FFEE58",
                        color: "black",
                        "&:hover": {
                          backgroundColor: "#b8d93a",
                        },
                      }}
                    >
                      Play Now
                    </Button>
                    <Button
                      onClick={() => setSelectedGame(game.title)}
                      variant="outlined"
                      startIcon={<Info size={16} />}
                      sx={{
                        color: "#FFEE58",
                        borderColor: "#FFEE58",
                        "&:hover": {
                          borderColor: "#b8d93a",
                          color: "#b8d93a",
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <Modal
          isOpen={!!selectedGame}
          onClose={() => setSelectedGame(null)}
          title={selectedGame}
          content={selectedGame ? gameDetails[selectedGame].description : ""}
        />

        <Divider sx={{ my: 8, backgroundColor: "#333" }} />

        <motion.div
          id="about"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Box sx={{ pb: 4 }}>
            <Typography
              variant="h4"
              component="h2"
              align="center"
              gutterBottom
              sx={{ color: "white", mb: 4, pr: 4 }}
            >
              About CodeArena
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{ color: "#7f7f82", mb: 6, pr: 4 }}
            >
              CodeArena is your ultimate destination for honing your coding
              skills through engaging, competitive, and interactive challenges.
              Our platform is designed to push your limits, expand your
              knowledge, and connect you with a global community of passionate
              developers.
            </Typography>
            <Grid container spacing={4}>
              {aboutFeatures.map((feature, index) => (
                <Grid item xs={11} sm={6} md={3} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      backgroundColor: "#1a1a1a",
                      color: "white",
                      textAlign: "center",
                      p: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: 2,
                        color: "#FFEE58",
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#7f7f82" }}>
                      {feature.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </div>
  );
};

export default GameShowcase;
