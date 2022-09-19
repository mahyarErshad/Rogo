import { Box } from '@mui/material'
import React from 'react'
import HeaderLoginButton from '../HeaderLoginButton/HeaderLoginButton'
import HeaderNavigationLink from '../HeaderNavigationLink/HeaderNavigationLink'
import HeaderLogo from '../HeaderLogo/HeaderLogo'

function HeaderMainComponent() {
  return (
    <Box sx={{position:"absolute",top:"0",right:"-15%", width:"130%",height:"450px",borderRadius:"0px 0 80% 80%", boxShadow:"inset 0px -14px 30px 0px rgba(0, 0, 0, 0.205)",background:"url(https://st.rogo.ir/assets/images/header-back/W-3.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover"}}>
          <Box sx={{display:"flex",alignItems:"center", justifyContent:"space-between",position:"relative",zIndex:"9",width:"1260px",height:"92px",mx:"auto",mt:"2rem"}}>
          <HeaderLogo />
          <Box sx={{display:"flex",flexDirection:"row",gap:"1.2rem"}}>
          <Box sx={{display:"flex",gap:"0.2rem",flexDirection:"row-reverse"}}>
          <HeaderNavigationLink text="صفحه اصلی" />
          <HeaderNavigationLink text="پیگیری بلیط" />
          <HeaderNavigationLink text="مجله روگو" />
          <HeaderNavigationLink text="سوالات متداول" />
          <HeaderNavigationLink text="تماس با ما" />
          </Box>
          <HeaderLoginButton />
          </Box>
          </Box>
    </Box>
  )
}

export default HeaderMainComponent