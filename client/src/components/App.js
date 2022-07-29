import { useState, useEffect } from "react";

import axios from "axios";

import Board from "./ui/Board";

import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    paddingTop: '100px',
    paddingBottom: '100px',
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
  btns: {
    matginTop: '20px'
  }
});

function App() {

  let emptyBoard = []

  for (let i = 1; i <= 81; i++) {
    emptyBoard.push(null)
  }

  const [board, setBoard] = useState(emptyBoard)
 
  const classes= useStyles();

  const removeMEssage = () => {
    const element = document.getElementById("message");
    if(element) {
      element.remove()
    }
  }
  
  const stringToArray = (string) => {
    const array = []
    for (let i = 0; i < string.length; i++) {
      array.push(Number(string[i]))
    }
    return array
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
      } else if (result.data.solvable === true) {
        const solutionString = result.data.solution
        const solutionArray = stringToArray(solutionString)
        setBoard(solutionArray)
      }
    }).catch((err) => {
      console.log(err.message)
    })
  }
  
  const handleReset = () => {
    setBoard(emptyBoard)
    removeMEssage()
    eraseBoard()
  }
  
  const eraseBoard = () => {
    for (let i = 0; i < emptyBoard.length; i++){
      const fieldIndex = (i + 1).toString()
      document.getElementById(fieldIndex).value = null
    }
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
      <div className={classes.btns}>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{
            width: '90%',
            marginTop: '30px'
          }}
        >
          Solve
        </Button>
        <Button
          onClick={handleReset}
          variant='contained'
          sx={{
            width: '90%',
            marginTop: '30px'
          }}
        >
          Reset board
        </Button>
      </div>
    </div>
  );
}

export default App;
