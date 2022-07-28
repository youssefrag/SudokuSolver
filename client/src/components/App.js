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
  msgContainer: {
    backgroundColor: 'white',
    marginBottom: '30px',
    paddingLeft: '50px',
    paddingRight: '50px',
    borderRadius: '15px',
    color: '#d32f2f'
  },

});

function App() {

  let emptyBoard = []

  for (let i = 1; i <= 81; i++) {
    emptyBoard.push(0)
  }

  const [board, setBoard] = useState(emptyBoard)

  const classes= useStyles();

  const removeMEssage = () => {
    const element = document.getElementById("message");
    if(element) {
      element.remove()
    }
  }

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
    axios.post(`http://localhost:6060/solve`, boardObject, {
      withCredentials: true,
    })
    .then((result) => {
      console.log(result.data)
      if (result.data.solvable === false) {
        const messageContainer = document.querySelector('#message-container')

        const message = document.createElement("h1")

        message.setAttribute("id", "message")
        message.setAttribute("className", "message")

        message.textContent = "Board is not solvable!"

        if (!document.getElementById("message")) {
          messageContainer.prepend(message)
        }
      }
    }).catch((err) => {
      console.log(err.message)
    })
  }
  

  return (
    <div className={classes.root}>
      <div id="message-container" className={classes.msgContainer}>
      </div>
      <Board 
        board={board}
        setBoard={setBoard}
        removeMessage={removeMEssage}
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
