import React from 'react'
import { Link } from 'react-router-dom'
import './style/ButtonAdd.css'
const ButtonAdd = () => (
    <Link to="/add/task">
        <img src={`${process.env.PUBLIC_URL}/images/add.png`} className="Task-Add" alt="task-add" />
    </Link>
)

export default ButtonAdd
