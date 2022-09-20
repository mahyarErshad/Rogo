import { Box } from '@mui/material'
import React from 'react'

function AirLineCard(props) {
    const {image} = props
  return (
    <>
    <Box sx={{height:"172px", width:"199px", bgcolor:"red", border: "1px solid transparent", transition: "all 0.3s ease-in-out 0.1s", borderRadius:"20px",display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Box component="img" sx={{height:"70%", borderRadius:"20px", objectFit:"cover"}} src={image}></Box>
    </Box>
    </>
  )
}

export default AirLineCard