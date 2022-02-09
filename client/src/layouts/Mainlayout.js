import React from 'react'
import { Navbar } from '../components/Navbar'
export const Mainlayout = ( props ) => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
  <main>{props.children}</main>
  </React.Fragment>
  )
}
