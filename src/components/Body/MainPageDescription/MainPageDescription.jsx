import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function MainPageDescription() {
  return (
    <>
    <Box sx={{width:"1260px", height:"200px", borderRadius:"28px", backgroundColor:"#0b839d", mt:"4rem", display:"flex", justifyContent:"center", mb:"18rem"}}>
        <Box sx={{width:"1220px", height:"276px", backgroundColor:"#fff",display:"flex", flexDirection:"column", alignItems:"flex-end", boxShadow: "0px 9px 9px 0px rgba(0, 0, 0, 0.05)", borderRadius: "20px"}}>
            <Typography sx={{color:"#0b839d", fontSize:"24px", transform:"translateY(-11px)", mx:"1.5rem", fontWeight:"bold"}} variant="h2">
                بلیط هواپیما
            </Typography>
            <Typography sx={{mx:"1rem",mb:"1.2rem",fontSize: "1.1em", color: "#1f2126", lineHeight: "2.85",  textAlign: "justify", textJustify: "inter-word"}} dir="rtl" variant='p'>
            روگو، یک سامانه ی معتبر برای <Box sx={{color:"red"}} component="span">خرید اینترنتی بلیط هواپیما</Box> است. از خدمات این سامانه می توان به ارائه بلیط ایرلاین های برتر داخلی همچون ایران ایر، ماهان، آسمان و ... و همچنین فراهم کردن بستری آسان برای <strong>خرید آنلاین بلیط هواپیما</strong> اشاره کرد. برای خرید بلیط از سامانه روگو، تنها پس از وارد کردن مبدأ، مقصد، تعداد مسافران و تاریخ سفر به لیست کاملی از پروازهای موجود در ایرلاین های مختلف با بهترین قیمت ها دست خواهید یافت.
            </Typography>
            <Box sx={{textAlign: "center",height:"45px", cursor: "pointer", padding: "7px 0", margin: "0", color: "#1f2126", fontWeight: "normal", fontSize: "1rem", background: "#f3f3f3", borderRadius: "10px", transition: "all 0.3s ease-in-out 0.1s", width:"1196px", display:"flex", alignItems:"center", justifyContent:"center", alignSelf:"center", "&:hover": {boxShadow: "inset 0 50px 0 0 rgba(255, 255, 255, 0.3)"}}}>
            [ نمایش بیشتر ]
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default MainPageDescription