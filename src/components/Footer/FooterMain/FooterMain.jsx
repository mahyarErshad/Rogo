import { Box } from '@mui/system'
import React from 'react'
import FooterNavigationLink from '../FooterNavigationLink/FooterNavigationLink'

function FooterMain() {
  return (
    <>
    <Box component="footer" sx={{backgroundColor:"#f9f9f9", borderRadius:"10px", width: "1260px", display:"flex", alignItems:"center", justifyContent:"center", mx:"auto", transform: "translateY(-60px)"}}>
    <FooterNavigationLink />
    </Box>
    </>
  )
}

export default FooterMain