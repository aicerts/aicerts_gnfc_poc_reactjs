import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UploadDetails from './pages/UploadDetails'
import { BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import VerifyDetails from './pages/VerifyDetails'
import { Box, Stack, Typography } from '@mui/material'

function App() {

  return (
  
     <Stack
      width="100vw"
      height="100vh"
      bgcolor="#E5E5EF"
      display="flex"
     
      alignItems="center"
     
      margin={0}
      gap={2}

    >
      <Box  width={"100%"} height={"10%"} bgcolor={"white"}  display={"flex"
      } alignItems={"center"} p={1}>
       
        <Box px={1}>
        <img src="/gnfc_logo.png" width={"240px"} height={50} alt="" />
        </Box>
    
     

      </Box>
      <Router>
      <Routes>
        <Route path='/' element={<UploadDetails/>}/>
        <Route path='/verify-details' element={<VerifyDetails/>}/>
      </Routes>
    </Router>

    </Stack>
    
   
 
  )
}

export default App
