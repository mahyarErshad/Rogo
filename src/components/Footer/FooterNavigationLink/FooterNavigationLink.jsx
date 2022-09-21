import { Box } from '@mui/system'
import React from 'react'
import "../../../styles/footerNavLink/footerNavlink.css"

function FooterNavigationLink(props) {
  const {title , navLinks} = props
  return (
    <>
    <Box sx={{display:'flex', flexDirection:"row-reverse"}}>
        <Box sx={{display:'flex', flexDirection:"column"}}>
            <Box sx={{fontSize:"1rem", mt:"1.5rem", fontWeight:"bold", mb:"0.9rem"}} dir="rtl" variant="h5">
                {title}
            </Box>
            { navLinks.map((item, index) =>{
              return (<Box key={index} dir="rtl" className="footerNavLink" sx={{ cursor:"pointer", fontSize:"0.9rem", fontWeight:"100", mt:"1rem", transition: "all 0.3s ease-in-out 0.01s", color:"#a6a6a6", "&:hover":{color:"#e60f44"}}}>
              {item}
          </Box>)
            }) }
        </Box>
    </Box>
    </>
  )
}

export default React.memo(FooterNavigationLink)