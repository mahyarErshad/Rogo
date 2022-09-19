import { Box } from '@mui/material'
import React from 'react'
import TicketSearchingButton from '../TicketSearchingButton/TicketSearchingButton'

function TicketSearchingButtonGroup() {
  return (
    <>
    <Box sx={{transition: "all 0.3s ease-in-out 0.01s",backgroundColor:"#fff",display:"flex",flexDirection:"row"}}>
        <TicketSearchingButton text="پرواز داخلی" />
        <TicketSearchingButton text="پرواز خارجی" />
    </Box>
    </>
  )
}

export default TicketSearchingButtonGroup