import { Box } from '@mui/system'
import React, { memo } from 'react'

function FooterCertifications(props) {
    const { image } = props
    const width = props.width || "60px"
  return (
    <>
        <Box sx={{width, height:"50px", backgroundColor:"#fff", p:"0.3rem", borderRadius:"10px"}} component='img' src={image} alt="certificates" />
    </>
  )
}

export default memo(FooterCertifications)