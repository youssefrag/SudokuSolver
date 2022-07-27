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
    </div>
  );
}

export default App;
