import React from 'react'
// import { useSelector } from 'react-redux'

// import DormList from '../DormList/DormList'
import Contact from '../GuestHome/Contact/Contact'
import Features from '../GuestHome/Features/Features'
import Footer from '../GuestHome/Footer/Footer'
import Header from '../GuestHome/Header/Header'

import HeaderCopy from '../GuestHome/Header/HeaderCopy'
import Pricing from '../GuestHome/Pricing/Pricing'
import Slides from '../GuestHome/Slides/Slides'
import Testimonial from '../GuestHome/Testimonial/Testimonial'

const Home = () => {
  // const nm = useSelector((state)=>state.userReducer.user.firstName)
  return (
    // console.log(nm),
    <div>
      {/* <Slides/> */}
      <Header/>
      <Features/>
      {/* <Pricing/> */}
      <HeaderCopy/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default Home