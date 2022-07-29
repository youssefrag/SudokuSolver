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

  const [refreshState, setRefreshState] = useState(0)

  useEffect(() => {
    setBoard(emptyBoard)
  }, [refreshState])

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

  const populateBoard = (board) => {
    for (let i = 0; i < board.length; i++) {
      const textFieldId = (i + 1).toString()
      // console.log('field id:', textFieldId)
      // console.log('value to be populated:', board[i])
      document.getElementById(textFieldId).innerHTML = board[i]
    }
  }

  const resetBoard = () => {
    setRefreshState(refreshState + 1)
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
    // console.log(boardString)
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
        // console.log(solutionArray)
        // populateBoard(solutionArray)
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
          onClick={() => setRefreshState(refreshState + 1)}
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
