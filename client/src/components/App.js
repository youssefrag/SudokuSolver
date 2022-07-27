import { useState } from "react";
import Board from "./ui/Board";
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

  return (
    <div className={classes.root}>
      <Board 
        board={board}
        setBoard={setBoard}
      />
    </div>
  );
}

export default App;
