import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function TicketSearchingButton(props) {
    const {text, isActive} = props
    const backgroundColor = isActive ? "#31537C" : "#fff"
    const color = isActive ? "#fff" : "#B9BDC3"
  return (
    <Box>
        <Box sx={{borderRadius:"100px",transition: "all 0.3s ease-in-out 0.01s", width:"130px",height:"43px",backgroundColor, color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>
            <Typography sx={{fontSize:"1rem" , color}}>{text}</Typography>
        </Box>
    </Box>
  )
}

export default TicketSearchingButton