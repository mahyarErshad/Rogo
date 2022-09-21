import { Box } from '@mui/system'
import React, { memo } from 'react'
import FooterNavigationLink from '../FooterNavigationLink/FooterNavigationLink'
import clock from "../../../assets/images/footerImages/clock.PNG"
import FooterButtonBase from '../FooterButtonBase/FooterButtonBase'
import phone from "../../../assets/images/footerImages/phone.PNG"
import chat from "../../../assets/images/footerImages/chat.PNG"
import mail from "../../../assets/images/footerImages/mail.PNG"
import faq from "../../../assets/images/footerImages/faq.PNG"
import hoveredPhone from "../../../assets/images/footerImages/hoveredPhone.PNG"
import hoveredChat from "../../../assets/images/footerImages/hoveredChat.PNG"
import hoveredMail from "../../../assets/images/footerImages/hoveredMail.PNG"
import hoveredFaq from "../../../assets/images/footerImages/hoveredFaq.PNG"

function FooterLinksAndButtons() {
  return (
    <>
    <Box component="footer" sx={{backgroundColor:"#f9f9f9", borderRadius:"10px", width: "100%", display:"flex", alignItems:"center", justifyContent:"center",flexDirection:"row-reverse", mx:"auto", transform: "translateY(-60px)"}}>
      <Box sx={{width:"27%", display:"flex", flexDirection:"row-reverse", mb:"2rem", marginRight:{lg:"8%"}}}>
        <Box sx={{width:"50%"}}>
        <FooterNavigationLink title="دسترسی سریع ..." navLinks={["صفحه اصلی", "درباره ما" , "تماس با ما", "مجله روگو", "قوانین و مقررات", "دریافت اپلیکیشن", "ایرلاینهای طرف قرارداد", "استرداد بلیط"]} />
        </Box>
        <Box sx={{width:"50%"}}>
        <FooterNavigationLink title="برای مطالعه بیشتر ..." navLinks={["خرید آنلاین بلیط هواپیما", "خرید بلیط هواپیما" , "خرید بلیط چارتر", "بلیط ارزان هواپیما", "بلیط لحظه آخری"]} />
        </Box>
      </Box>
      <Box component="img" src={clock} alt="clock" />
      <Box dir="rtl" sx={{width:"45%", display:"flex", gap:"1.5rem", flexDirection:"column"}}>
        <FooterButtonBase redText="پشتیبانی تلفنی" blackText="۰۲۱۷۷۹۱۲" image={phone} hoveredImage={hoveredPhone} />
        <FooterButtonBase redText="پشتیبانی گفتگوی آنلاین" blackText="با کلیک روی آیکن چت آنلاین با ما گفتگو کنید" image={chat} hoveredImage={hoveredChat} />
        <FooterButtonBase redText="ثبت درخواست پشتیبانی" blackText="پس از ورود، درخواست خود را از این طریق ثبت نمایید" image={mail} hoveredImage={hoveredMail} />
        <FooterButtonBase redText="پرسش های متداول" blackText="بسیاری از پرسش های شما را می دانیم و پاسخ را در این بخش نوشته ایم" image={faq} hoveredImage={hoveredFaq} />
      </Box>
    </Box>
    </>
  )
}

export default memo(FooterLinksAndButtons)