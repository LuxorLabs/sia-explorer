import React from 'react'
import styled from 'styled-components'
import SearchBar from 'components/SearchBar'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <div className='bg-primary'>
    <Nav className='container grid-xl text-light'>
      <header className='navbar'>
        <section className='navbar-section'>
          <Logo to='/' className='navbar-brand'>
            Sia Explorer
          </Logo>
          <a href='#' className='btn btn-link'>API</a>
          <a href='#' className='btn btn-link'>Map</a>
          <a href='#' className='btn btn-link'>Network</a>
        </section>
        <section className='navbar-section'>
          <SearchBar />
        </section>
      </header>
    </Nav>
  </div>
)

const Nav = styled.div`
padding: 2rem;
background: transparent;
.navbar-section {
  a {
    color: white;
  }
}
`

const Logo = styled(Link)`
margin-right: 1rem;
height: 1.25rem;
`

export default NavBar
