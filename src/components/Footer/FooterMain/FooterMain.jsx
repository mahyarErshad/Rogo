import { Box } from '@mui/system'
import React, { memo } from 'react'
import FooterNavigationLink from '../FooterNavigationLink/FooterNavigationLink'
import clock from "../../../assets/images/footerImages/clock.PNG"
import FooterButtonBase from '../FooterButtonBase/FooterButtonBase'
import phone from "../../../assets/images/footerImages/phone.PNG"
import hoveredPhone from "../../../assets/images/footerImages/hoveredPhone.PNG"

function FooterMain() {
  return (
    <>
    <Box component="footer" sx={{backgroundColor:"#f9f9f9", borderRadius:"10px", width: "100%", display:"flex", alignItems:"center", justifyContent:"center",flexDirection:"row-reverse", mx:"auto", transform: "translateY(-60px)"}}>
      <Box sx={{width:"30%", display:"flex", flexDirection:"row-reverse", mb:"2rem", marginRight:{lg:"14%"}}}>
        <Box sx={{width:"40%"}}>
        <FooterNavigationLink title="دسترسی سریع ..." navLinks={["صفحه اصلی", "درباره ما" , "تماس با ما", "مجله روگو", "قوانین و مقررات", "دریافت اپلیکیشن", "ایرلاینهای طرف قرارداد", "استرداد بلیط"]} />
        </Box>
        <Box sx={{width:"60%"}}>
        <FooterNavigationLink title="برای مطالعه بیشتر ..." navLinks={["خرید آنلاین بلیط هواپیما", "خرید بلیط هواپیما" , "خرید بلیط چارتر", "بلیط ارزان هواپیما", "بلیط لحظه آخری"]} />
        </Box>
      </Box>
      <Box component="img" src={clock} alt="clock" />
      <Box dir="rtl" sx={{width:"45%", display:"flex", gap:"1.5rem", flexDirection:"column"}}>
        <FooterButtonBase redText="پشتیبانی تلفنی" blackText="۰۲۱۷۷۹۱۲" image={phone} hoveredImage={hoveredPhone}  />
        <FooterButtonBase redText="پشتیبانی تلفنی" blackText="۰۲۱۷۷۹۱۲" image={phone} hoveredImage={hoveredPhone}  />
        <FooterButtonBase redText="پشتیبانی تلفنی" blackText="۰۲۱۷۷۹۱۲" image={phone} hoveredImage={hoveredPhone}  />
        <FooterButtonBase redText="پشتیبانی تلفنی" blackText="۰۲۱۷۷۹۱۲" image={phone} hoveredImage={hoveredPhone}  />
      </Box>
    </Box>
    </>
  )
}

export default memo(FooterMain)