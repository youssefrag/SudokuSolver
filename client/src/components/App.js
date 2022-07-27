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

  const classes= useStyles();

  return (
    <div className={classes.root}>
      <Board />
    </div>
  );
}

export default App;
