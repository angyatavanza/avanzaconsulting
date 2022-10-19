import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'
//<Education /> <Experience />  <Achievement /> <Testimonials /> <Blog />


function Main() {
    return (
        <div>
            <Helmet>
                <title>Avanza Tech Consulting</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Skills />
            <Projects />
            <Services />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
