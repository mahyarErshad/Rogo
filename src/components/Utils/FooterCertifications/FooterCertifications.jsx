import { Box } from '@mui/system'
import React, { memo } from 'react'

function FooterCertifications(props) {
    const { image } = props
    const width = props.width || "60px"
  return (
    <>
      <Box sx={{width, cursor:"pointer", height:"50px", backgroundColor:"#fff", p:"0.3rem", borderRadius:"10px", "&:hover":{boxShadow: "-5px 8px 17px 0 rgba(0, 0, 0, 0.15)"}}} component='img' src={image} alt="certificates" />
    </>
  )
}

export default memo(FooterCertifications)