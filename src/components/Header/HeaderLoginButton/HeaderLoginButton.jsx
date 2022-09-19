import { Box } from '@mui/material'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import React from 'react'

function HeaderLoginButton() {
  return (
    <>
    <Box dir="rtl" component="span" sx={{alignSelf: "center", border: "1.5px solid rgba(255, 255, 255, 0.42)", color: "#fff",padding: "9px 0px 9px 18px",borderRadius: "10px",position: "relative",overflow: "hidden",transition: "all 0.3s ease-in-out 0.1s", cursor:"pointer","&:hover":{border:"1.5px solid #fff"}}}>
        <PermIdentityIcon sx={{color:"#fff", width:"45px",height:"22px"}} />
    </Box>
    </>
  )
}

export default HeaderLoginButton