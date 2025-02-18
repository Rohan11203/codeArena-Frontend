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
import { useNavigate } from "react-router-dom";

const GameShowcase = () => {
  const games = [
    {
      title: "Multi Game",
      image: MultiGame,
      description: "Engage in multiple coding challenges simultaneously.",
    },
    {
      title: "Flex Game",
      image: FlexGame,
      description: "Test your flexibility with adaptive coding puzzles.",
    },
    {
      title: "Grid Game",
      image: GridGame,
      description: "Master grid-based coding challenges and algorithms.",
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
    <div className="bg-[#0f0f0f] min-h-screen">
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
                        navigate("/multiplayer");
                      }}
                      variant="contained"
                      startIcon={<Play size={16} />}
                      sx={{
                        backgroundColor: "#cef241",
                        color: "black",
                        "&:hover": {
                          backgroundColor: "#b8d93a",
                        },
                      }}
                    >
                      Play Now
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<Info size={16} />}
                      sx={{
                        color: "#cef241",
                        borderColor: "#cef241",
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
              sx={{ color: "white", mb: 4 }}
            >
              About CodeArena
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{ color: "#7f7f82", mb: 6 }}
            >
              CodeArena is your ultimate destination for honing your coding
              skills through engaging, competitive, and interactive challenges.
              Our platform is designed to push your limits, expand your
              knowledge, and connect you with a global community of passionate
              developers.
            </Typography>
            <Grid container spacing={4}>
              {aboutFeatures.map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
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
                        color: "#cef241",
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
