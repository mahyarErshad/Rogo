import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { memo } from 'react'
import bazar from "../../../assets/images/footerImages/bazar.png"
import myket from "../../../assets/images/footerImages/myket.png"
import bazarHovered from "../../../assets/images/footerImages/bazarHovered.png"
import myketHovered from "../../../assets/images/footerImages/myketHovered.png"
import enamad from "../../../assets/images/footerImages/enamad.png"
import MarketPlaceButton from '../../Utils/MarketPlaceButton/MarketPlaceButton'
import FooterCertifications from '../../Utils/FooterCertifications/FooterCertifications'

function FooterInformations() {
    const wrapperStyle = { display:"flex", flexDirection:"column", alignItems:"flex-end"}
  return (
    <>
    <Box sx={{width:"100%" , backgroundColor:"#ECECEC", py:"1rem", transform: "translateY(-84px)", display:"flex",gap:"1rem", flexDirection:"row-reverse"}}>
        <Box sx={{...wrapperStyle , paddingRight:"15%", width:"640px", gap:"1.3rem"}}>
            <Typography variant='h3' sx={{color: "#747577", fontWeight: "bold", fontSize: "1.1em"}}>
            خرید آنلاین بلیط هواپیما 
            </Typography>
            <Typography dir="rtl" variant='p' sx={{color: "#747577", fontSize: "1em", lineHeight: "30px", textAlign: "justify"}}>
            روگو، سامانه آنلاین خرید بلیط هواپیما از هر جای دنیا به هر جای دنیاست که به در آن واحد به شما امکان بررسی و خرید پرواز های همه ایرلاین ها دنیا را می دهد. تمامی بلیط های سیستمی و چارتری خریداری شده در روگو شامل بیمه لغو پرواز و پشتیبانی تا لحظه سوار شدن به هواپیما هستند. 
            </Typography>
        </Box>
        <Box sx={{...wrapperStyle , gap:"0.7rem", backgroundColor:"#F6F6F6", mt:"0.8rem", borderRadius:"10px"}}>
            <Box sx={{background: "#e60f44", borderRadius: "17px", padding: "15px 20px", display:"flex", height:"70px", flexDirection:"column", width:"600px", justifyContent:"center", alignItems:"flex-end"}}>
                <Typography dir="rtl" variant="p" sx={{color: "#fff", fontSize: "1em"}}>
                    راستی، یه هواپیما تو جیبت داری
                </Typography>
                <Typography dir="rtl" variant="p" sx={{color: "#fff", opacity: "0.8", fontSize: "0.9em", padding: "2px 0", lineHeight: "2"}}>
                اپلیکیشن روگو با پوشش سراسری بلیط چارتر و سیستمی و کاربری آسان و پشتیبانی 24 ساعته، فرایند خرید بلیط هواپیما را به تجربه ای مطمئن و لذت بخش تبدیل می کند. 
                </Typography>
            </Box>
            <Box sx={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"row-reverse", alignSelf:"center", gap:"1rem"}}>
            <MarketPlaceButton image={bazar} hoveredImage={bazarHovered} />
            <MarketPlaceButton image={myket} hoveredImage={myketHovered} />
            </Box>
            <Box sx={{display:"flex", alignItems:"center", justifyContent:"flex-start", alignSelf:"center", mb:"0.5rem"}}>
                <FooterCertifications image={enamad} />
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default memo(FooterInformations)