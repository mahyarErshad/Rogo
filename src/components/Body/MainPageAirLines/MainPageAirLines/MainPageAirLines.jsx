import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import redAirplane from "../../../../assets/images/mainPageAirlines/redAirplane.png"
import iranAir from "../../../../assets/images/mainPageAirlines/iranAir.PNG"
import AirLineCard from '../AirLineCard/AirLineCard'

function MainPageAirLines() {
  return (
    <>
    <Box sx={{display:"flex",mb:"5rem", flexDirection:"column",gap: "1rem", justifyContent:"center", alignItems:"center"}}>
        <Box sx={{display:"flex", flexDirection:"row-reverse",gap: "0.5rem", justifyContent:"center", alignItems:"center"}}>
            <Box component="img" src={redAirplane} alt="airplane" />
            <Typography variant="h2" sx={{fontWeight: "100", fontSize: "1.4em", color:"#1f2126"}}>ایرلاین های طرف قرارداد با روگو</Typography>
        </Box>
        <Box>
            <AirLineCard image={iranAir} text=" [ ZV ] هواپیمایی زاگرس" />
        </Box>
    </Box>
    </>
  )
}

export default MainPageAirLines