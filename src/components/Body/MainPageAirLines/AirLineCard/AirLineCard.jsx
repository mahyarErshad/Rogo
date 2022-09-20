import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import linkPhoto from "../../../../assets/images/mainPageAirlines/linkPhoto.PNG"
import hoverLinkPhoto from "../../../../assets/images/mainPageAirlines/hoverLinkPhoto.PNG"

function AirLineCard(props) {
    const {image , text} = props
    const [isHover, setIsHover] = useState(false)
  return (
    <div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} >
    <Box sx={{height:"172px",cursor:"pointer", width:"199px", border: "1px solid transparent", boxShadow: "-7px 12px 25px 0px rgba(0, 0, 0, 0.04)", transition: "all 0.3s ease-in-out 0.1s", borderRadius:"20px",display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", "&:hover":{boxShadow: "-7px 12px 32px 0px rgba(0, 0, 0, 0.08)", transform: "translateY(-1.7px)"}}}>
        <Box component="img" sx={{height:"75%", borderRadius:"20px", objectFit:"cover"}} src={image} />
        <Box component="img" sx={{position:"relative", right:"73px", bottom:"21px"}} src={isHover ? hoverLinkPhoto : linkPhoto} />
        <Typography sx={{height:"20%", color: "#1f2126", fontWeight: "100", fontSize:"1rem", transform:"translateY(-10px)"}} dir="rtl" variant="h5">
            {text}
        </Typography>
    </Box>
    </div>
  )
}

export default AirLineCard