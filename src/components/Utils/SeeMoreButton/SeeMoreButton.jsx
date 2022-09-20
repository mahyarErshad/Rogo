import { Box } from '@mui/material'
import React from 'react'

function SeeMoreButton(props) {
    const { text, setSeeMore, dispatchValue } = props
    const py = text === "نمایش بیشتر" ? "14px" : "0"
    const transform = text === "نمایش بیشتر" ? "translateY(-8px)" : ""
  return (
    <>
    <Box onClick={()=> setSeeMore(dispatchValue)} sx={{ textAlign: "center",height:"51px",py , cursor: "pointer", mx:"0", mb:"1rem", color: "#1f2126", fontWeight: "normal", fontSize: "1rem", background: "#f3f3f3", borderRadius: "10px", transition: "all 0.3s ease-in-out 0.1s", width:"1196px", display:"flex", alignItems:"center", justifyContent:"center", alignSelf:"center", transform, "&:hover": {boxShadow: "inset 0 60px 0 0 rgba(255, 255, 255, 0.3)"}}}>
        [ {text} ]
    </Box>
    </>
  )
}

export default SeeMoreButton