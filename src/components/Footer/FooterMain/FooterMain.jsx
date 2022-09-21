import { Box } from '@mui/system'
import React, { memo } from 'react'
import FooterNavigationLink from '../FooterNavigationLink/FooterNavigationLink'

function FooterMain() {
  return (
    <>
    <Box component="footer" sx={{backgroundColor:"#f9f9f9", borderRadius:"10px", width: "100%", display:"flex", alignItems:"center", justifyContent:"center",flexDirection:"row-reverse", mx:"auto", transform: "translateY(-60px)"}}>
      <Box sx={{width:"50%" , mx:"3rem", mb:"2rem"}}>
        <FooterNavigationLink title="دسترسی سریع ..." navLinks={["صفحه اصلی", "aswed"]} />
      </Box>
      <Box sx={{width:"50%"}}>


      </Box>
    </Box>
    </>
  )
}

export default memo(FooterMain)