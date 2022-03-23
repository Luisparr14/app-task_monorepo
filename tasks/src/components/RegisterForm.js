import { Button, Stack, TextField } from '@mui/material'
import React from 'react'
import { validField, validateEmail } from '../helpers/valid'
import './style/Forms.css'
const RegisterForm = ({ onSubmit, onChange, form, sendForm }) => (
  <Stack
    component={'form'}
    onSubmit={onSubmit}
    spacing={2}
    noValidate
    sx={{
      '& .MuiTextField-root': { m: 1, width: '30ch' },
      '& .MuiButton-root': { m: 1, width: '20ch', alignSelf: 'center' },
      backgroundColor: '#f5f5f5',
      alignSelf: 'center',
      p: '20px'
    }}
  >

    <TextField
      id="name"
      error={validField(form.name).error && sendForm}
      helperText={sendForm && validField(form.name).message}
      name='name'
      label="Name"
      autoComplete='name'
      value={form.name}
      onChange={onChange}
      type="text"
      size="small"
    />

    <TextField
      id="lastName"
      name='lastName'
      label="Last name"
      autoComplete='lastName'
      value={form.lastName}
      onChange={onChange}
      type="text"
      size="small"
    />

    <TextField
      error={validateEmail(form.email).error && sendForm}
      helperText={sendForm && validateEmail(form.email).message}
      id="email"
      name='email'
      label="Email"
      value={form.email}
      autoComplete='email'
      onChange={onChange}
      type="email"
      size="small"
    />

    <TextField
      error={validField(form.password).error && sendForm}
      helperText={sendForm && validField(form.password).message}
      id="password"
      name='password'
      label="Password"
      autoComplete='current-password'
      value={form.password}
      onChange={onChange}
      type="password"
      size="small"
    />

    <TextField
      error={validField(form.confirmPassword).error && sendForm}
      helperText={sendForm && validField(form.confirmPassword).message}
      id="confirmPassword"
      name='confirmPassword'
      label="Confirm password"
      autoComplete='current-password'
      value={form.confirmPassword}
      onChange={onChange}
      type="password"
      size="small"
    />

    <Button type="submit" variant="contained" color="primary">
      Registrarse
    </Button>
  </Stack>
)
export default RegisterForm
