import url from '../config/config'
import Task from '../components/Task'
import React, { useState } from 'react'
import FormAddTask from '../components/FormAddTask'
import axios from 'axios'
import { validField } from '../helpers/valid'
import { Container, Typography } from '@mui/material'
import { useHistory } from 'react-router-dom'

const token = localStorage.getItem('token')
const AddTask = () => {
  const history = useHistory()
  const [sendForm, setSendForm] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    title: '',
    description: '',
    leftColor: '#aaaaaa',
    rightColor: '#000000'
  })
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handeSubmit = async e => {
    e.preventDefault()
    setSendForm(true)
    if (validField(form.title).error) {
      setError('Some fields are required')
      setTimeout(() => {
        setError('')
      }, 2000)
      return
    }

    try {
      const config = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${JSON.parse(token).token}`
        }
      }
      const res = await axios.post(`${url}/tasks`, form, config)
      if (res.data.success) {
        setSendForm(false)
        history.push('/')
        return
      }
      console.log(res.data)
    } catch (error) {
      console.log('Error: ', error.response.data)
    }
  }

  return (
    <Container
      sx={{
        height: 'calc(100vh - 64px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%'
      }}
    >
      <Task
        title={form.title}
        description={form.description}
        leftColor={form.leftColor}
        rightColor={form.rightColor}
        showButton={false}
      />
      <Typography variant="spam" color="textSecondary" gutterBottom>
        {error}
      </Typography>
      <FormAddTask
        sendForm={sendForm}
        onSubmit={handeSubmit}
        onChange={handleChange}
        form={form}
      />
    </Container>

  )
}

export default AddTask
