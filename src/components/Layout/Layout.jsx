import React from 'react'
import './layout.scss'
import Header from '../Header/Header.jsx'
import { Navbar } from '../Navbar/Navbar.jsx'
import { Footer } from '../Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

export const Layout = ({ children }) => {
	return (
		<div className='app'>
			<Header></Header>
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	)
}
