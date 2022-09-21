import { Box } from '@mui/material'
import React from 'react'
import { useState } from 'react'

function MarketPlaceButton(props) {
    const {image , hoveredImage} = props
    const [isHovered, setIsHovered] = useState(false)
  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
    <Box>
        <Box sx={{transition: "all 0.3s ease-in-out 0.01s", boxShadow: "-7px 8px 13px 0 rgba(0, 0, 0, 0.03)", cursor: "pointer", borderRadius: "13px"}} component="img" src={isHovered ? hoveredImage : image} alt="ax" />
    </Box>
    </div>
  )
}

export default MarketPlaceButton