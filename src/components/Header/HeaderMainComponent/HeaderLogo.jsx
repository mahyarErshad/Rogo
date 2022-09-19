import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function HeaderLogo() {
  return (
    <>
    <Box sx={{display:"flex", flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative",zIndex:"9",width:"1260px",height:"92px",mx:"auto",mt:"2rem"}}>
    <Box sx={{width:"125px",height:"61px"}} component="img" src="https://rogo.ir/assets/images/logo-persian.png" alt="logo" />
    <Typography component="h2" sx={{color: "#fff", fontSize: "1.22rem", paddingTop: "5px", textalign: "center"}}>خرید بلیط هواپیما</Typography>
    </Box>
    </>
  )
}

export default HeaderLogo