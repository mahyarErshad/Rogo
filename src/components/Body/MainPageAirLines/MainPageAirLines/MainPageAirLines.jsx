import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { memo } from 'react'
import redAirplane from "../../../../assets/images/mainPageAirlines/redAirplane.png"
import iranAir from "../../../../assets/images/mainPageAirlines/iranAir.PNG"
import zagros from "../../../../assets/images/mainPageAirlines/zagros.PNG"
import taban from "../../../../assets/images/mainPageAirlines/taban.PNG"
import mahan from "../../../../assets/images/mainPageAirlines/mahan.PNG"
import caspian from "../../../../assets/images/mainPageAirlines/kaspian.PNG"
import kish from "../../../../assets/images/mainPageAirlines/kishAir.PNG"
import seeAllAirlines from "../../../../assets/images/mainPageAirlines/seeAllAirlines.PNG"
import AirLineCard from '../AirLineCard/AirLineCard'

function MainPageAirLines() {
  return (
    <>
    <Box sx={{display:"flex",mb:"5rem", flexDirection:"column",gap: "1rem", justifyContent:"center", alignItems:"center"}}>
        <Box sx={{display:"flex", flexDirection:"row-reverse",gap: "0.5rem", justifyContent:"center", alignItems:"center"}}>
            <Box component="img" src={redAirplane} alt="airplane" />
            <Typography variant="h2" sx={{fontWeight: "100", fontSize: "1.4em", color:"#1f2126"}}>ایرلاین های طرف قرارداد با روگو</Typography>
        </Box>
        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"row-reverse", gap:"0.5rem"}}>
            <AirLineCard image={zagros} text=" [ ZV ] هواپیمایی زاگرس" />
            <AirLineCard image={taban} text=" [ ZV ] هواپیمایی تابان" />
            <AirLineCard image={iranAir} text=" [ IR ] هواپیمایی ایران ایر" />
            <AirLineCard image={mahan} text=" [ W5 ] هواپیمایی ماهان" />
            <AirLineCard image={caspian} text=" [ IV ] هواپیمایی کاسپین" />
            <AirLineCard image={kish} text=" [ IV ] هواپیمایی کیش ایر" />
        </Box>
        <Box sx={{alignSelf:"flex-start", cursor:"pointer", borderBottom:"dashed 1px #213957", display:"flex" , justifyContent:"center", alignItems:"center", flexDirection:"row-reverse", gap:"0.5rem", transition: "all 0.3s ease-in-out 0.1s",  "&:hover":{gap:"0.7rem"} }}>
          <Box component="img" src={seeAllAirlines} alt="مشاهده همه" />
          <Typography sx={{color: "#31537C", fontSize:"1.2em", "&:hover":{color: "#213957"}}} variant='h5'>مشاهده لیست کامل ایرلاین ها</Typography> 
        </Box>
    </Box>
    </>
  )
}

export default memo(MainPageAirLines)