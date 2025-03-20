import React from 'react'
import ContactForm from '~/components/ContactForm'
import Footer from '~/components/Footer'
import Navbar from '~/components/Navbar'
import SolutionsHero from '~/components/SolutionsHero'
import SolutionsList from '~/components/SolutionsList'

const solutions = () => {
  return (
    <div className='bg-white'>
        <Navbar/>
        <SolutionsHero/>
        <SolutionsList/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default solutions