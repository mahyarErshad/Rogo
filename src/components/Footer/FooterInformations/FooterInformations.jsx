import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { memo } from 'react'

function FooterInformations() {
  return (
    <>
    <Box sx={{width:"100%" , backgroundColor:"#ECECEC", transform: "translateY(-84px)", display:"flex", flexDirection:"row-reverse"}}>
        <Box sx={{width:"50%", display:"flex", flexDirection:"column", alignItems:"flex-end", px:"16.2%", py:"1.3rem", gap:"1.3rem"}}>
            <Typography variant='h3' sx={{color: "#747577", fontWeight: "bold", fontSize: "1.1em"}}>
            خرید آنلاین بلیط هواپیما 
            </Typography>
            <Typography dir="rtl" variant='p' sx={{color: "#747577", fontSize: "1em", lineHeight: "30px", textAlign: "justify"}}>
            روگو، سامانه آنلاین خرید بلیط هواپیما از هر جای دنیا به هر جای دنیاست که به در آن واحد به شما امکان بررسی و خرید پرواز های همه ایرلاین ها دنیا را می دهد. تمامی بلیط های سیستمی و چارتری خریداری شده در روگو شامل بیمه لغو پرواز و پشتیبانی تا لحظه سوار شدن به هواپیما هستند. 
            </Typography>
        </Box>
        <Box sx={{width:"50%"}}>

        </Box>
    </Box>
    </>
  )
}

export default memo(FooterInformations)