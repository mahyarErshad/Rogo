import { Box } from '@mui/system'
import React from 'react'
import GuaranteeSection from '../GuaranteeSection/Main/GuaranteeSection'
import TicketSearchSection from '../TicketSearchingSection/MainTicketSearchingSection/MainTicketSearchSection'

function BodyMainComponent() {
  return (
    <>
    <Box sx={{display:"flex",width:"100%",flexDirection:"column", alignItems:"center", justifyContent:"center",mt:"11.5rem"}}>
    <TicketSearchSection />
    <GuaranteeSection />
    </Box>
    </>
  )
}

export default BodyMainComponent