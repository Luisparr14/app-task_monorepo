import React, { Fragment } from 'react'
import Task from './Task'

const TaskList = ({ tasks }) => (
  <Fragment>
    {
      tasks.map((task) => {
        return (
          <Task
            key={task.taskId}
            id={task.taskId}
            title={task.title}
            description={task.description}
            leftColor={task.leftColor}
            rightColor={task.rightColor}
          />
        )
      })
    }
  </Fragment>
)
export default TaskList
