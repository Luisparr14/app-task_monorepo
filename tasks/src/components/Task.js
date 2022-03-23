import React from 'react'
import './style/Task.css'
import { Card, CardContent, Typography, CardActions, IconButton } from '@mui/material'
import Check from '@mui/icons-material/CheckCircleOutline'
const Task = ({ id, title, description, leftColor, rightColor, showButton = true }) => (
  <Card className='card Task' sx={{
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 'auto',
    marginTop: '5px',
    marginBottom: '5px',
    background: `url(${process.env.PUBLIC_URL}/images/circles.png), linear-gradient(to right, ${leftColor || '#456'}, ${rightColor || '#406'}), no-repeat`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
    variant="outlined"
  >
    <CardContent>
      <Typography sx={{
        fontSize: 30,
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;'
      }} color="white">
        {title}
      </Typography>
      <Typography variant="p" color="white" sx={{
        fontSize: 20,
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;'
      }}>
        {description}
      </Typography>
    </CardContent>
    {showButton && <CardActions
      sx={{
        color: 'white',
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;'
      }}
    >
      Completar
      <IconButton
      onClick={() => {
        console.log('Complete', id)
      }}
      sx={{
        color: 'white',
        marginLeft: '4px',
        '&:hover': {
          backgroundColor: '#ccc',
          color: '#000',
          transform: 'scale(1.1)',
          transition: 'transform .2s ease-in-out'
        }
      }}>
        <Check />
      </IconButton>
    </CardActions>}
  </Card>
)

export default Task
