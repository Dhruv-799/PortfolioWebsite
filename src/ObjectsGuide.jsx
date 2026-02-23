import React, { useState } from "react";
import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Stack,
  IconButton,
  Paper,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CodeIcon from "@mui/icons-material/Code";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const JavaScriptObjectsGuide = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [completedProblems, setCompletedProblems] = useState({});

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleComplete = (id) => {
    setCompletedProblems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const concepts = [
    {
      id: "create",
      title: "1. Creating Objects",
      content: `// Object Literal
const person = { name: "Alice", age: 25 };

// Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const bob = new Person("Bob", 30);

// Object.create()
const proto = { greet() { return "Hello"; } };
const obj = Object.create(proto);

// Class syntax (ES6)
class User {
  constructor(name) {
    this.name = name;
  }
}`,
    },
    {
      id: "access",
      title: "2. Accessing Properties",
      content: `const user = { name: "Alice", age: 25, "user-id": 123 };

// Dot notation
console.log(user.name);

// Bracket notation
console.log(user["age"]);
console.log(user["user-id"]);`,
    },
  ];

  const practiceProblems = [
    {
      id: "p1",
      difficulty: "Easy",
      title: "Count Frequency",
      description:
        "Given an array of strings, return an object with each string as a key and its frequency as the value.",
      example: `Input: ["apple", "banana", "apple"]
Output: { apple: 2, banana: 1 }`,
    },
    {
      id: "p2",
      difficulty: "Medium",
      title: "Invert Object",
      description: "Swap keys and values in an object.",
      example: `Input: { a: "1", b: "2" }
Output: { "1": "a", "2": "b" }`,
    },
  ];

  const difficultyColor = {
    Easy: "success",
    Medium: "warning",
    Hard: "error",
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #e3f2fd 0%, #e8eaf6 100%)",
        py: 6,
      }}
    >
      <Container maxWidth="md">
        {/* Header */}
        <Card sx={{ mb: 4, boxShadow: 4 }}>
          <CardContent>
            <Stack direction="row" spacing={2} alignItems="center">
              <MenuBookIcon color="primary" fontSize="large" />
              <Typography variant="h4" fontWeight="bold">
                JavaScript Objects Mastery
              </Typography>
            </Stack>
            <Typography mt={2} color="text.secondary">
              Master object manipulation in JavaScript with clear explanations
              and practice problems.
            </Typography>
          </CardContent>
        </Card>

        {/* Concepts */}
        <Card sx={{ mb: 4, boxShadow: 4 }}>
          <CardContent>
            <Stack direction="row" spacing={1} alignItems="center" mb={2}>
              <CodeIcon color="primary" />
              <Typography variant="h5" fontWeight="bold">
                Core Concepts
              </Typography>
            </Stack>

            {concepts.map((concept) => (
              <Accordion
                key={concept.id}
                expanded={expandedSections[concept.id] || false}
                onChange={() => toggleSection(concept.id)}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight={600}>{concept.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Paper
                    sx={{
                      bgcolor: "#0f172a",
                      color: "#4ade80",
                      p: 2,
                      overflowX: "auto",
                      fontSize: 14,
                    }}
                  >
                    <pre>{concept.content}</pre>
                  </Paper>
                </AccordionDetails>
              </Accordion>
            ))}
          </CardContent>
        </Card>

        {/* Practice Problems */}
        <Card sx={{ boxShadow: 4 }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" mb={3}>
              Practice Problems
            </Typography>

            {practiceProblems.map((problem) => (
              <Box
                key={problem.id}
                mb={3}
                border="1px solid"
                borderColor="divider"
                borderRadius={2}
                overflow="hidden"
              >
                <Box
                  sx={{
                    px: 2,
                    py: 1.5,
                    bgcolor: "#f5f7ff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <IconButton
                      size="small"
                      onClick={() => toggleComplete(problem.id)}
                    >
                      <CheckCircleIcon
                        color={
                          completedProblems[problem.id]
                            ? "success"
                            : "disabled"
                        }
                      />
                    </IconButton>
                    <Typography fontWeight="bold">
                      {problem.title}
                    </Typography>
                  </Stack>

                  <Chip
                    label={problem.difficulty}
                    color={difficultyColor[problem.difficulty]}
                    size="small"
                  />
                </Box>

                <Box p={2}>
                  <Typography mb={1}>{problem.description}</Typography>
                  <Paper sx={{ p: 1.5, bgcolor: "#f3f4f6" }}>
                    <pre style={{ margin: 0, fontSize: 12 }}>
                      {problem.example}
                    </pre>
                  </Paper>
                </Box>
              </Box>
            ))}
          </CardContent>
        </Card>

        {/* Tips */}
        <Card
          sx={{
            mt: 4,
            bgcolor: "primary.main",
            color: "white",
            boxShadow: 4,
          }}
        >
          <CardContent>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Tips for Success
            </Typography>
            <Divider sx={{ mb: 2, bgcolor: "rgba(255,255,255,0.3)" }} />
            <Stack spacing={1}>
              <Typography>• Start with easy problems first</Typography>
              <Typography>• Handle edge cases carefully</Typography>
              <Typography>• Practice multiple approaches</Typography>
              <Typography>• Debug using console.log()</Typography>
              <Typography>• Revisit problems after a few days</Typography>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default JavaScriptObjectsGuide;
