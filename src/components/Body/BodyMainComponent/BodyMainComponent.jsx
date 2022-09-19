import { Box } from '@mui/system'
import React from 'react'
import TicketSearchSection from '../TicketSearchSectionj/TicketSearchSection'

function BodyMainComponent() {
  return (
    <>
    <Box sx={{display:"flex",width:"100%",flexDirection:"column", alignItems:"center", justifyContent:"center",mt:"11.5rem"}}>
    <TicketSearchSection />
    </Box>
    </>
  )
}

export default BodyMainComponent