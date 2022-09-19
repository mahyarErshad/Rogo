import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function TicketSearchingButton(props) {
    const {text} = props
  return (
    <Box>
        <Box sx={{borderRadius:"100px", width:"130px",height:"43px",backgroundColor:"#31537C", color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>
            <Typography sx={{fontSize:"1rem"}}>{text}</Typography>
        </Box>
    </Box>
  )
}

export default TicketSearchingButton