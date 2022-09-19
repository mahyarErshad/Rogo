import { Box, Typography } from '@mui/material'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import React from 'react'

function HeaderLoginButton() {
  return (
    <>
    <Box dir="rtl" component="span" sx={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center" ,width:"154px",height:"24px",alignSelf: "center", border: "1.5px solid rgba(255, 255, 255, 0.42)", color: "#fff",padding: "9px 0px 9px 18px",borderRadius: "10px",transition: "all 0.3s ease-in-out 0.1s", cursor:"pointer","&:hover":{border:"1.5px solid #fff"}}}>
        <PermIdentityIcon sx={{color:"#fff", width:"50px",height:"25px"}} />
        <Typography sx={{color:"#fff",fontSize: "1.2em"}}>ورود / عضویت</Typography>
    </Box>
    </>
  )
}

export default HeaderLoginButton