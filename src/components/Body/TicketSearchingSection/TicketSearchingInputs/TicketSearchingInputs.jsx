import { Box } from '@mui/material'
import React from 'react'

function TicketSearchingInputs(props) {
    const {containerWidth} = props.width
  return (
    <>
    <Box sx={{width: containerWidth, border:"1px solid #e7e7e7",padding:"15px", borderRadius:"15px","&:hover":{borderColor: "rgba(0, 0, 0, 0.3)"} }}>

    </Box>
    </>
  )
}

export default TicketSearchingInputs