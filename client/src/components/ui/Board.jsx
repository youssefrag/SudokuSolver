import React from 'react'
import {Button, TextField, Box } from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
});

export default function Board() {

  const classes = useStyles()

  const createRowIndexes = (num) => {
    let indexes = []
    for (let c = 1; c <= 9; c++) {
      indexes.push(((num - 1) * 9) + c)
    }
    return indexes
  }

  const renderRow1 = createRowIndexes(1).map((fieldId) => {
    return(
      <TextField
        id={fieldId}
        type="number"
        InputProps={{
          inputProps: { min: 1, max: 9 }
        }}
      />
    )
  })
  const renderRow2 = createRowIndexes(2).map((fieldId) => {
    return(
      <TextField
        id={fieldId}
        type="number"
        InputProps={{
          inputProps: { min: 1, max: 9 }
        }}
      />
    )
  })

  const renderRow3 = createRowIndexes(3).map((fieldId) => {
    return(
      <TextField
        id={fieldId}
        type="number"
        InputProps={{
          inputProps: { min: 1, max: 9 }
        }}
      />
    )
  })

  const renderRow4 = createRowIndexes(4).map((fieldId) => {
    return(
      <TextField
        id={fieldId}
        type="number"
        InputProps={{
          inputProps: { min: 1, max: 9 }
        }}
      />
    )
  })

  const renderRow5 = createRowIndexes(5).map((fieldId) => {
    return(
      <TextField
        id={fieldId}
        type="number"
        InputProps={{
          inputProps: { min: 1, max: 9 }
        }}
      />
    )
  })

  const renderRow6 = createRowIndexes(6).map((fieldId) => {
    return(
      <TextField
        id={fieldId}
        type="number"
        InputProps={{
          inputProps: { min: 1, max: 9 }
        }}
      />
    )
  })

  const renderRow7 = createRowIndexes(7).map((fieldId) => {
    return(
      <TextField
        id={fieldId}
        type="number"
        InputProps={{
          inputProps: { min: 1, max: 9 }
        }}
      />
    )
  })

  const renderRow8 = createRowIndexes(8).map((fieldId) => {
    return(
      <TextField
        id={fieldId}
        type="number"
        InputProps={{
          inputProps: { min: 1, max: 9 }
        }}
      />
    )
  })

  const renderRow9 = createRowIndexes(9).map((fieldId) => {
    return(
      <TextField
        id={fieldId}
        type="number"
        InputProps={{
          inputProps: { min: 1, max: 9 }
        }}
      />
    )
  })

  return (
    <div className={classes.root}>
      <div className={classes.row}>
        {renderRow1}
      </div>
      <div className={classes.row}>
        {renderRow2}
      </div>
      <div className={classes.row}>
        {renderRow3}
      </div>
      <div className={classes.row}>
        {renderRow4}
      </div>
      <div className={classes.row}>
        {renderRow5}
      </div>
      <div className={classes.row}>
        {renderRow6}
      </div>
      <div className={classes.row}>
        {renderRow7}
      </div>
      <div className={classes.row}>
        {renderRow8}
      </div>
      <div className={classes.row}>
        {renderRow9}
      </div>
    </div>
  )
}
