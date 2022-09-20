import { Box } from '@mui/material'
import React from 'react'
import guaranteeShadow from "../../../../assets/images/guaranteeSection/GguaranteeShadow.png"
import GuaranteeCards from '../GuaranteeCards/GuaranteeCards'
import support from "../../../../assets/images/guaranteeSection/support.PNG"
import redSupport from "../../../../assets/images/guaranteeSection/redSupport.PNG"

function GuaranteeSection() {
  return (
    <>
    <Box sx={{width: "1110px",height: "7px", backgroundColor: "#fff", position: "relative", overflow: "hidden", borderRadius: "30px 30px 0 0", background: `url(${guaranteeShadow}) no-repeat center center #fff`,  backgroundPositionY: "center", backgroundSize: "90% 65px"}}>
    </Box>
    <Box sx={{width: "1350px", height:"100px", mt:"1rem", display:"flex",alignItems:"center",justifyContent:"flex-start",flexDirection:"row-reverse"}}>
      <GuaranteeCards image={support} redImage={redSupport} title="پشتیبانی ۲۴ ساعته" description="حتی در روزهای تعطیل" hoverDescription="راه های تماس" />
    </Box>
    </>
  )
}

export default GuaranteeSection