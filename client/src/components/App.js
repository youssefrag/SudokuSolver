import { useState } from "react";

import axios from "axios";

import Board from "./ui/Board";

import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    paddingTop: '100px',
    paddingBottom: '500px',
    backgroundColor: '#D3D3D3',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
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
      if (Number(board[i]) > 9) {
        alert('Number can\'t exceed 9!')
        return
      }
      if (board[i]) {
        boardString += board[i].toString()
      } else {
        boardString += '.'
      }
    }
    const boardObject = {}
    boardObject["puzzle"] = boardString
    // const JsonBoardObject = JSON.stringify(boardObject)
    console.log(boardObject.puzzle)
    axios.post(`http://localhost:6060/solve`, boardObject, {
      withCredentials: true,
    })
  }

  return (
    <div className={classes.root}>
      <Board 
        board={board}
        setBoard={setBoard}
      />
      <Button
        onClick={handleSubmit}
        variant="contained"
        sx={{
          width: '15%',
          marginTop: '30px'
        }}
      >
        Solve
      </Button>
    </div>
  );
}

export default App;
