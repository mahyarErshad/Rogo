import { Box } from '@mui/system'
import React from 'react'

function HeaderNavigationLink(props) {
    const {text} = props
  return (
    <>
    <Box sx={{}} component="a">
        {text}
    </Box>
    </>
  )
}

export default HeaderNavigationLink