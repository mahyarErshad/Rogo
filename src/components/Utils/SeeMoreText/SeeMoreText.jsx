import { Typography } from '@mui/material'
import React from 'react'

function SeeMoreText(props) {
const {title , description} = props
  return (
    <>
    <Typography sx={{color:"#0b839d", mt:"1.5rem", fontSize:"24px", transform:"translateY(-11px)", mx:"1.5rem", fontWeight:"bold"}} variant="h2">
    {title}
    </Typography>
    {description}
    </>
  )
}

export default SeeMoreText