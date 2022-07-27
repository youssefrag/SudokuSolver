import { useState } from "react";
import Board from "./ui/Board";

import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    paddingTop: '100px',
    paddingBottom: '500px',
    backgroundColor: '#D3D3D3',
  },
});

function App() {

  let emptyBoard = []

  for (let i = 1; i <= 81; i++) {
    emptyBoard.push(0)
  }

  const [board, setBoard] = useState(emptyBoard)

  const classes= useStyles();

  const handleSubmit = () => {
    let boardString = ''
    for (let i = 0; i < 81; i++) {
      if (board[i]) {
        boardString += board[i].toString()
      } else {
        boardString += '.'
      }
    }
    console.log(boardString)
  }

  return (
    <div className={classes.root}>
      <Board 
        board={board}
        setBoard={setBoard}
      />
      <Button
        onClick={handleSubmit}
      >
        log board
      </Button>
    </div>
  );
}

export default App;
