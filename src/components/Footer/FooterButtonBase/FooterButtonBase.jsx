import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { memo } from 'react'
import { useState } from 'react'

function FooterButtonBase(props) {
    const [isHovered, setIsHovered] = useState(false)
    const {redText, blackText, image, hoveredImage} = props
  return (
    <div onMouseEnter={()=> setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
        <Box sx={{display:"flex", width:{lg:"660px"}, minHeight:"54px", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
            <Box sx={{display:"flex", gap:"0.5rem", marginRight:"3.5%", flexDirection:"column", justifyContent:"center", alignItems:"flex-start"}}>
                <Typography sx={{color: "#e60f44", fontSize: "1.1em"}}>
                    { redText }
                </Typography>
                <Typography sx={{color: "#1f2126", fontWeight: "normal", fontSize: "1em", lineHeight: "28px"}}>
                    { blackText }
                </Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <Box component="img" src={isHovered ? hoveredImage : image} alt="phone" />
            </Box>
        </Box>
    </div>
  )
}

export default memo(FooterButtonBase)