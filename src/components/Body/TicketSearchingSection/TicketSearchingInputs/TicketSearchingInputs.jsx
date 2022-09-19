import { Box } from '@mui/material'
import React from 'react'
import CustomTextField from '../../../Utils/CustomTextField/CustomTextField'

function TicketSearchingInputs(props) {
    const {text1, text2} = props
  return (
    <>
    <Box sx={{width: "504px",display:"flex",justifyContent:"center",alignItems:"center",gap:"3rem",alignSelf:"flex-end",height:"45px",mt:"2rem", border:"1px solid #e7e7e7",p:"15px", borderRadius:"15px","&:hover":{borderColor: "rgba(0, 0, 0, 0.3)"} }}>
    <CustomTextField text={text1} />
    <CustomTextField text={text2} />
    </Box>
    </>
  )
}

export default TicketSearchingInputs