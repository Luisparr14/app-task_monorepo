import url from '../config/config'
import Tasks from '../pages/Tasks'
import Register from '../pages/Register'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Login from '../pages/Login'
import { CssBaseline } from '@mui/material'
import axios from 'axios'
import AddTask from '../pages/AddTask'
import { validateEmail, validField } from '../helpers/valid'
import { Redirect, BrowserRouter, Route, Switch } from 'react-router-dom'
import AlertComponent from './AlertComponent'
const App = () => {
  const [sessionActive, setSessionActive] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  useEffect(() => {
    const token = localStorage.getItem('token')
    token ? setSessionActive(true) : setSessionActive(false)
  }, [])

  const handleLogin = async (e, form) => {
    e.preventDefault()
    if (validateEmail(form.email).error || validField(form.password).error) {
      return
    }
    try {
      const config = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
      const info = await axios.post(`${url}/auth/login`, form, config)
      const { data, success } = info.data
      if (success) {
        localStorage.setItem('token', JSON.stringify(data))
        setSessionActive(true)
        return
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

  const handleLogOut = () => {
    localStorage.removeItem('token')
    setSessionActive(false)
  }

  if (sessionActive === null) {
    return null
  }

  if (!sessionActive) {
    return (
      <>
        <CssBaseline />
        {error && <AlertComponent error={error} errorMessage={errorMessage} />}
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/login" render={() => <Login handleLogin={handleLogin} />} />
            <Route exact path="/register" render={() => <Register />} />
            <Route exact path="/**">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    )
  }

  if (sessionActive) {
    return (
      <>
        <CssBaseline />
        <BrowserRouter>
          <NavBar
            sessionActive={sessionActive}
            logOut={handleLogOut}
          />
          <Switch>
            <Route exact path="/" component={Tasks} />
            <Route exact path="/tasks" component={Tasks} />
            <Route exact path="/add/task" component={AddTask} />
            <Route exact path="/**">
              <Redirect to="/" />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App
