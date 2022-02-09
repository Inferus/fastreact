import React from 'react'
import { Navbar } from '../components/Navbar'
export const Mainlayout = ({ children }) => {
  return (
  
<>
        <Navbar/>
            <main>{children}</main>
            </>
  )
}
