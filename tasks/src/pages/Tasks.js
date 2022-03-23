// import React, { useEffect, useState, useRef, useCallback } from 'react'
import React from 'react'
import TaskList from '../components/TaskList'
import ButtonAdd from '../components/ButtonAdd'
import useFechGetTasks from '../Hooks/useFetch'
import url from './config'
import Box from '@mui/material/Box';

const Tasks = () => {
  const token = window.localStorage.getItem('token')
  const { tasks } = useFechGetTasks(`${url}/tasks`, JSON.parse(token).token)
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <TaskList
          tasks={tasks}
        />
        <ButtonAdd />
      </Box>
    </React.Fragment>

  )
}

export default Tasks