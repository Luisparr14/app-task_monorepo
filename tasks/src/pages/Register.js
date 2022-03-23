import React, { useState } from 'react'
import RegisterForm from '../components/RegisterForm'
import url from './config'
import axios from 'axios'
import { Container } from '@mui/material'
import { validField } from '../helpers/valid'
import AlertComponent from '../components/AlertComponent'

const { useHistory } = require('react-router-dom')
const initialForm = { name: '', lastName: '', email: '', password: '', confirmPassword: '' }
const SingUp = () => {
  const history = useHistory()
  const [form, setForm] = useState(initialForm)
  const [sendForm, setSendForm] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = async e => {
    setSendForm(true)
    e.preventDefault();
    if (validField(form.name).error || validField(form.email).error || validField(form.password).error || validField(form.confirmPassword).error) {
      return
    }
    try {
      let config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }

      const res = await axios.post(`${url}/auth/register`, form, config)
      console.log(res)
      if (res.data.success) {
        history.push('/login')
        setForm(initialForm)
      }
    } catch (error) {
      setError(true)
      setErrorMessage(error.response.data.message)
      setTimeout(() => {
        setErrorMessage('')
        setError(false)
      }, 3000)
    }
  }

  return (
    <React.Fragment>
      <Container sx={{
        display: 'flex',
        minHeight: 'calc(100vh - 64px)',
        justifyContent: 'center'
      }}>
      {error && <AlertComponent error={error} errorMessage={errorMessage} />}
        <RegisterForm
          sendForm={sendForm}
          onSubmit={handleSubmit}
          onChange={handleChange}
          form={form}
        />
      </Container>
    </React.Fragment >
  )
}

export default SingUp