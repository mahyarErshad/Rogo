import { Box } from '@mui/system'
import React, { memo } from 'react'
import FooterNavigationLink from '../FooterNavigationLink/FooterNavigationLink'

function FooterMain() {
  return (
    <>
    <Box component="footer" sx={{backgroundColor:"#f9f9f9", borderRadius:"10px", width: "100%", display:"flex", alignItems:"center", justifyContent:"center",flexDirection:"row-reverse", mx:"auto", transform: "translateY(-60px)"}}>
      <Box sx={{width:"50%" ,display:"flex", flexDirection:"row-reverse", mb:"2rem", marginRight:{lg:"17%"}}}>
        <Box sx={{width:"30%"}}>
        <FooterNavigationLink title="دسترسی سریع ..." navLinks={["صفحه اصلی", "درباره ما" , "تماس با ما", "مجله روگو", "قوانین و مقررات", "دریافت اپلیکیشن", "ایرلاینهای طرف قرارداد", "استرداد بلیط"]} />
        </Box>
        <Box sx={{width:"60%"}}>
        <FooterNavigationLink title="برای مطالعه بیشتر ..." navLinks={["خرید آنلاین بلیط هواپیما", "خرید بلیط هواپیما" , "خرید بلیط چارتر", "بلیط ارزان هواپیما", "بلیط لحظه آخری"]} />
        </Box>
      </Box>
      <Box sx={{width:"50%"}}>


      </Box>
    </Box>
    </>
  )
}

export default memo(FooterMain)