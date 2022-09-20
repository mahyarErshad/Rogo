import { Box } from '@mui/material'
import React from 'react'
import guaranteeShadow from "../../../../assets/images/guaranteeSection/GguaranteeShadow.png"
import GuaranteeCards from '../GuaranteeCards/GuaranteeCards'
import support from "../../../../assets/images/guaranteeSection/support.PNG"
import redSupport from "../../../../assets/images/guaranteeSection/redSupport.PNG"
import privacy from "../../../../assets/images/guaranteeSection/privacy.PNG"
import redPrivacy from "../../../../assets/images/guaranteeSection/redPrivacy.PNG"
import canceling from "../../../../assets/images/guaranteeSection/canceling.PNG"
import redCanceling from "../../../../assets/images/guaranteeSection/redCanceling.PNG"
import covering from "../../../../assets/images/guaranteeSection/covering.PNG"
import redCovering from "../../../../assets/images/guaranteeSection/redCovering.PNG"

function GuaranteeSection() {
  return (
    <>
    <Box sx={{width: "1110px",height: "7px", backgroundColor: "#fff", position: "relative", overflow: "hidden", borderRadius: "30px 30px 0 0", background: `url(${guaranteeShadow}) no-repeat center center #fff`,  backgroundPositionY: "center", backgroundSize: "90% 65px"}}>
    </Box>
    <Box sx={{width: "1350px", height:"100px", mt:"1rem", display:"flex",alignItems:"center",justifyContent:"flex-start",flexDirection:"row-reverse", gap:"1rem"}}>
      <GuaranteeCards image={support} redImage={redSupport} title="پشتیبانی ۲۴ ساعته" description="حتی در روزهای تعطیل" hoverDescription="راه های تماس" />
      <GuaranteeCards image={privacy} redImage={redPrivacy} title="بدون نیاز به ثبت نام" description="ارسال بلیط به تلفن همراه و ایمیل" hoverDescription="توضیحات بیشتر" />
      <GuaranteeCards image={canceling} redImage={redCanceling} title="گارانتی کنسلی پرواز" description="تا لحظه ورود به هواپیما" hoverDescription="انواع کنسلی و ضمانت ها" />
      <GuaranteeCards image={covering} redImage={redCovering} title="پوشش سراسری ایرلاین ها" description="پوشش کامل بلیط چارتری و سیستمی" hoverDescription="ایرلاین های تحت پوشش" />
    </Box>
    </>
  )
}

export default GuaranteeSection