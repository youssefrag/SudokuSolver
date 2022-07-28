import React from 'react'

import {Button, TextField, Box } from '@mui/material';
import { makeStyles } from "@mui/styles";

import './Board.css'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  field: {
    backgroundColor: 'white'
  }
});

export default function Board(props) {

  const { board, setBoard, removeMessage } = props
  const classes = useStyles()

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    const index = Number(name) - 1
    board[index] = Number(value)
    // console.log(board)
    setBoard(board)
    removeMessage()
  }

  const createRowIndexes = (num) => {
    let indexes = []
    for (let c = 1; c <= 9; c++) {
      let index = (((num - 1) * 9) + c)
      indexes.push(index)
    }
    return indexes
  }

  const renderRow1 = createRowIndexes(1).map((index) => {

    const fieldIndex = index.toString()
    let border = 'top '
    if (index %  3 === 0) {
      border += 'right '
    }
    if (index % 9 === 1) {
      border += 'left'
    }

    return(
      <TextField
        id={fieldIndex}
        onChange={handleChange}
        name={fieldIndex}
        className={`field ${fieldIndex} ${border}`}
        type="number"
        InputProps={{
          inputProps: { min: 1, max: 9 }
        }}
      />
    )
  })

  const renderRow2 = createRowIndexes(2).map((index) => {

    const fieldIndex = index.toString()
    let border = ''
    if (index %  3 === 0) {
      border += 'right '
    }
    if (index % 9 === 1) {
      border += 'left'
    }
    return(
      <TextField
        id={fieldIndex}
        onChange={handleChange}
        name={fieldIndex}
        className={`field ${fieldIndex} ${border}`}
        type="number"
        InputProps={{
          inputProps: { min: 1, max: 9 }
        }}
      />
    )
  })

  const renderRow3 = createRowIndexes(3).map((index) => {
    const fieldIndex = index.toString()
    let border = 'bottom '
    if (index %  3 === 0) {
      border += 'right '
    }
    if (index % 9 === 1) {
      border += 'left'
    }
    return(
      <TextField
        id={fieldIndex}
        onChange={handleChange}
        name={fieldIndex}
        className={`field ${fieldIndex} ${border}`}
        type="number"
        InputProps={{
          inputProps: { min: 1, max: 9 }
        }}
      />
    )
  })

  const renderRow4 = createRowIndexes(4).map((index) => {
    const fieldIndex = index.toString()
    let border = ''
    if (index %  3 === 0) {
      border += 'right '
    }
    if (index % 9 === 1) {
      border += 'left'
    }
    return(
      <TextField
        id={fieldIndex}
        onChange={handleChange}
        name={fieldIndex}
        className={`field ${fieldIndex} ${border}`}
        type="number"
        InputProps={{
          inputProps: { min: 1, max: 9 }
        }}
      />
    )
  })

  const renderRow5 = createRowIndexes(5).map((index) => {
    const fieldIndex = index.toString()
    let border = ''
    if (index %  3 === 0) {
      border += 'right '
    }
    if (index % 9 === 1) {
      border += 'left'
    }
    return(
      <TextField
        id={fieldIndex}
        onChange={handleChange}
        name={fieldIndex}
        className={`field ${fieldIndex} ${border}`}
        type="number"
        InputProps={{
          inputProps: { min: 1, max: 9 }
        }}
      />
    )
  })

  const renderRow6 = createRowIndexes(6).map((index) => {
    const fieldIndex = index.toString()
    let border = 'bottom '
    if (index %  3 === 0) {
      border += 'right '
    }
    if (index % 9 === 1) {
      border += 'left'
    }
    return(
      <TextField
        id={fieldIndex}
        onChange={handleChange}
        name={fieldIndex}
        className={`field ${fieldIndex} ${border}`}
        type="number"
        InputProps={{
          inputProps: { min: 1, max: 9 }
        }}
      />
    )
  })

  const renderRow7 = createRowIndexes(7).map((index) => {
    const fieldIndex = index.toString()
    let border = ''
    if (index %  3 === 0) {
      border += 'right '
    }
    if (index % 9 === 1) {
      border += 'left'
    }
    return(
      <TextField
        id={fieldIndex}
        onChange={handleChange}
        name={fieldIndex}
        className={`field ${fieldIndex} ${border}`}
        type="number"
        InputProps={{
          inputProps: { min: 1, max: 9 }
        }}
      />
    )
  })

  const renderRow8 = createRowIndexes(8).map((index) => {
    const fieldIndex = index.toString()
    let border = ''
    if (index %  3 === 0) {
      border += 'right '
    }
    if (index % 9 === 1) {
      border += 'left'
    }
    return(
      <TextField
        id={fieldIndex}
        onChange={handleChange}
        name={fieldIndex}
        className={`field ${fieldIndex} ${border}`}
        type="number"
        InputProps={{
          inputProps: { min: 1, max: 9 }
        }}
      />
    )
  })

  const renderRow9 = createRowIndexes(9).map((index) => {
    const fieldIndex = index.toString()
    let border = 'bottom '
    if (index %  3 === 0) {
      border += 'right '
    }
    if (index % 9 === 1) {
      border += 'left'
    }
    return(
      <TextField
        id={fieldIndex}
        onChange={handleChange}
        name={fieldIndex}
        className={`field ${fieldIndex} ${border}`}
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
