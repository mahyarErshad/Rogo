import { Box } from '@mui/system'
import React from 'react'

function FooterNavigationLink() {
  return (
    <>
    <Box sx={{display:'flex', flexDirection:"row-reverse"}}>
        <Box sx={{display:'flex', flexDirection:"column"}}>
            <Box sx={{fontSize:"1rem", mt:"1.5rem", fontWeight:"bold", mb:"0.9rem"}} dir="rtl" variant="h5">
                دسترسی سریع ...
            </Box>
            <Box dir="rtl" sx={{fontSize:"0.9rem", fontWeight:"100", mt:"0.7rem"}}>
                صفحه اصلی
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default FooterNavigationLink