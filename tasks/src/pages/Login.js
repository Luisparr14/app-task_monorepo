import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import { Container } from '@mui/material'
const Login = ({ handleLogin }) => {
  const [sendForm, setSendForm] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Container
      sx={{
        display: 'flex',
        minHeight: 'calc(100vh - 64px)',
        justifyContent: 'center'
      }}
    >
      <LoginForm
        sendForm={sendForm}
        onChange={handleChange}
        onSubmit={(e) => {
          setSendForm(true)
          handleLogin(e, form)
        }}
        form={form}
      />
    </Container>
  )
}
export default Login
