import { Box } from '@mui/material'
import React from 'react'
import guaranteeShadow from "../../../assets/images/GguaranteeShadow.png"

function GuaranteeSection() {
  return (
    <>
    <Box sx={{width: "1110px",height: "7px", backgroundColor: "#fff", position: "relative", overflow: "hidden", borderRadius: "30px 30px 0 0", background: `url(${guaranteeShadow}) no-repeat center center #fff`,  backgroundPositionY: "center", backgroundSize: "90% 65px"}}>
    </Box>
    <Box sx={{width: "1110px"}}>

    </Box>
    </>
  )
}

export default GuaranteeSection