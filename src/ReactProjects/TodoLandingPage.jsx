import { useState } from "react";
import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import "../todo.css";
import DeleteIcon from "@mui/icons-material/Delete";
import InterviewQues from "./InterviewQues";
import JavaScriptObjectsGuide from "./ObjectsGuide";
import "../App.css";
import LeftDrawer from "../LeftDrawer";


const TodoLandingPage = () => {

const[name, setName]= useState("")
const [description, setDescription]=useState("")

  const [enteredtask, setEnteredtask] = useState("");
  const [todoIsActive, setTodoIsActice] = useState(true);
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todo")) || [],
  );

  const Sno = new Date().getTime();

  const handleAdd = () => {
    setTodo((todoItems) => {
      localStorage.setItem(
        "todo",
        JSON.stringify([...todoItems, { enteredtask, id: Sno }]),
      );
      return [...todoItems, { enteredtask, id: Sno }];
    });
    setEnteredtask("");
  };

  const handlereset = () => {
    setTodo([]);
  };

  const handleDelete = () => console.log("Deleted");

  const element = (e) => setEnteredtask(e.target.value);
  return (
    <>
      <LeftDrawer />
      {todoIsActive ? (
        <Box>
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter todo"
            type="text"
            value={name}
          ></input>
          <input
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Box>
      ) : (
        <JavaScriptObjectsGuide />
      )}

      {/* <InterviewQues /> */}
      <Button
        onClick={() => setTodoIsActice(!todoIsActive)}
        variant="contained"
        className="bottomButton"
      >
        {todoIsActive ? (
          <Typography>Get Object Guide</Typography>
        ) : (
          <Typography>Get Back to Todo</Typography>
        )}
      </Button>
    </>
  );
}

export default TodoLandingPage
