import React from 'react'
import { Container, Button, Stack, TextField } from '@mui/material'
import { validField } from '../helpers/valid'
import './style/Forms.css'

const FormAddTask = ({ onChange, onSubmit, form, sendForm }) => {
  return (
    <Stack
      component={'form'}
      noValidate
      onSubmit={onSubmit}
      spacing={2}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '90%' },
        '& .MuiButton-root': { m: 1, width: '25ch', alignSelf: 'center' },
        backgroundColor: '#f5f5f5',
        alignSelf: 'center',
        p: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
      }}>
      <Container
        component={'div'}
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row'
          },
          alignItems: 'flex-start',
          justifyContent: 'center'

        }}
      >
        <TextField
          required
          error={validField(form.title).error && sendForm}
          helperText={sendForm && validField(form.title).message}
          id="title"
          name='title'
          label="Task title"
          value={form.title}
          onChange={onChange}
          type="text"
          size="small"
        />
        <TextField
          id="description"
          label="Description"
          name='description'
          value={form.description}
          onChange={onChange}
          type="text"
          size="small"
        />
      </Container>
      <Container
        component={'div'}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          margin: 'auto',
          marginTop: '5px',
          marginBottom: '5px'
        }}
      >
        <TextField
          id="leftColor"
          label="Left Color"
          name='leftColor'
          value={form.leftColor}
          onChange={onChange}
          type="color"
          size="small"
        />
        <TextField
          id="rightColor"
          label="Right Color"
          name='rightColor'
          value={form.rightColor}
          onChange={onChange}
          type="color"
          size="small"
        />
      </Container>
      <Container
        component={'div'}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Button
          type="submit"
          sx={{
            width: '20ch',
            color: '#000000',
            backgroundColor: '#1976d2',
            alignSelf: 'center',
            '&:hover': {
              color: '#000',
              transform: 'scale(1.1)',
              transition: 'transform .2s ease-in-out',
              backgroundColor: '#1976dd'
            }
          }}
        >
          Agregar
        </Button>
      </Container>
    </Stack>
  )
}

export default FormAddTask
