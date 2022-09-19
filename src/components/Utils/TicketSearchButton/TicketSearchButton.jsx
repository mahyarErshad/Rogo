import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import "../../../styles/TicketSearchButton/TicketSearchButton.css"

function TicketSearchButton() {
  return (
    <>
        <Box className="TicketSearchButton" sx={{display:"flex",fontWeight:"bold", alignItems:"center", justifyContent:"space-between"}} >
          <SearchIcon htmlColor='#fff' fontSize='large' />
          <Typography sx={{fontSize:"1rem", color:"#fff"}}>
            جستجوی بلیط
          </Typography>
        </Box>
    </>
  )
}

export default TicketSearchButton