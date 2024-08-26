import React from 'react'
import { Outlet } from "react-router-dom";
import Nav from '../components/Nav';

const AuthLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default AuthLayout