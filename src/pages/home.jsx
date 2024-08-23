import React from 'react'
import Header from '../components/header'
import Search from '../components/search'
import Footer from '../components/footer'

function home() {
  return (
    <div>
      {/* header */}
      <Header/>
        {/* search */}
      <Search/>
        {/* foooter */}
        <Footer/>
    </div>
  )
}

export default home