import { Box } from '@mui/system'
import React from 'react'
import "../../../styles/footerNavLink/footerNavlink.css"

function FooterNavigationLink() {
  return (
    <>
    <Box sx={{display:'flex', flexDirection:"row-reverse"}}>
        <Box sx={{display:'flex', flexDirection:"column"}}>
            <Box sx={{fontSize:"1rem", mt:"1.5rem", fontWeight:"bold", mb:"0.9rem"}} dir="rtl" variant="h5">
                دسترسی سریع ...
            </Box>
            <Box dir="rtl" className="footerNavLink" sx={{fontSize:"0.9rem", fontWeight:"100", mt:"0.7rem", transition: "all 0.3s ease-in-out 0.01s", color:"#a6a6a6", "&:hover":{color:"#e60f44", paddingRight:"15px"}}}>
                صفحه اصلی
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default FooterNavigationLink