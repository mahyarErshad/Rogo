import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TicketSearchingButton from '../TicketSearchingButton/TicketSearchingButton'

function TicketSearchingButtonGroup() {
    const [isButtonActive, setIsButtonActive] = useState("interior")
    const [isInteriorButtonActive, setIsInteriorButtonActive] = useState(true)
    const [isExteriorButtonActive, setExteriorIsButtonActive] = useState(false)
    useEffect(() => {
        if(isButtonActive === "interior"){
            setIsInteriorButtonActive(true)
            setExteriorIsButtonActive(false)
        } else {
            setIsInteriorButtonActive(false)
            setExteriorIsButtonActive(true) 
        }
    }, [isButtonActive])
  return (
    <>
    <Box sx={{transition: "all 0.3s ease-in-out 0.01s",borderRadius:"100px",backgroundColor:"#fff",display:"flex",flexDirection:"row-reverse"}}>
        <Box onClick={()=> setIsButtonActive("interior")}>
        <TicketSearchingButton isActive={isInteriorButtonActive} text="پرواز داخلی" />
        </Box>
        <Box onClick={()=> setIsButtonActive("exterior")}>
        <TicketSearchingButton isActive={isExteriorButtonActive} text="پرواز خارجی" />
        </Box>
    </Box>
    </>
  )
}

export default TicketSearchingButtonGroup