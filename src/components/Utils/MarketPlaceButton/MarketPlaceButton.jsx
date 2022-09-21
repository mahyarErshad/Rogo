import { Box } from '@mui/material'
import React from 'react'

function MarketPlaceButton(props) {
    const {image , hoveredImage} = props
  return (
    <>
    <Box>
        <Box sx={{transition: "all 0.3s ease-in-out 0.01s", boxShadow: "-7px 8px 13px 0 rgba(0, 0, 0, 0.03)", cursor: "pointer", borderRadius: "13px"}} component="img" src={image} alt="ax" />
    </Box>
    </>
  )
}

export default MarketPlaceButton