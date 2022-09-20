import { Box, Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React, { useState } from 'react'

function GuaranteeCards(props) {
    const {image, redImage, title, description, hoverDescription} = props
    const [isHover , setIsHover] = useState(false)
    const transform = isHover ? "translateY(-5px) rotate(3deg)" : ""

  return (
    <div onMouseEnter={()=> setIsHover(true)} onMouseLeave={()=> setIsHover(false)}>
    <Box sx={{width:"302px", display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row-reverse",backgroundColor: "#fff"}}>
        <Box sx={{transition: "all 0.1s linear 0.1s", transform }} component="img" src={isHover ? redImage : image } alt="guarantee" />
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"center", flexDirection:"column"}}>
                <Typography sx={{fontSize:"1.1rem", fontWeight:"bold"}} variant='h5'>{title}</Typography>
                <Box sx={{display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"row-reverse"}}>
                    <Typography sx={{fontSize:"0.8em", fontWeight:"normal", color:"#a6a6a6"}} variant="p">{isHover ? hoverDescription : description}</Typography>
                    {isHover && <ArrowBackIosIcon htmlColor='red' fontSize='10px' />}
                </Box>
            </Box>
        </Box>
    </div>
  )
}

export default GuaranteeCards