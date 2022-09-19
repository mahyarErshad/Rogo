import { Box } from '@mui/system'
import React from 'react'

function HeaderNavigationLink(props) {
    const {text} = props
  return (
    <>
    <Box sx={{display: "inline-block", margin: "0 10px", borderBottom: "2px solid rgba(255, 255, 255, 0.2)",cursor:"pointer","&:hover":{borderColor: "white",display: "inline-block",transition: "200ms all linear"}}}>
      <Box component="a" sx={{ color: "#fff",display: "inline-block",transition: "200ms all linear",paddingBottom: "18px",fontWeight: "normal","&:hover":{transform: "translateY(-7px)"}}}>
        {text}
      </Box>
    </Box>
    </>
  )
}

export default HeaderNavigationLink