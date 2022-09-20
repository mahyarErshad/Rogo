import { Box } from '@mui/system'
import React from 'react'
import GuaranteeSection from '../GuaranteeSection/Main/GuaranteeSection'
import MainPageAirLines from '../MainPageAirLines/MainPageAirLines/MainPageAirLines'
import MainPageDescription from '../MainPageDescription/MainPageDescription'
import TicketSearchSection from '../TicketSearchingSection/MainTicketSearchingSection/MainTicketSearchSection'

function BodyMainComponent() {
  return (
    <>
    <Box component="main" sx={{display:"flex",width:"100%",flexDirection:"column", alignItems:"center", justifyContent:"center",mt:"11.5rem"}}>
    <TicketSearchSection />
    <GuaranteeSection />
    <MainPageDescription />
    <MainPageAirLines />
    </Box>
    </>
  )
}

export default BodyMainComponent