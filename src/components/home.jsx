import React from 'react'
import MyAppContext from './appContext/myAppContext'
import Header from './homeComponents/header'
import Section from './homeComponents/section';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../css/main.css';
import NavbarDesk from './homeComponents/navbar/navbarDes';
import Footer from './homeComponents/footer/Footer';

function Home() {


  return (

    <div>
          <Header />
          <Section />
          <Footer />
    </div>

  )

}

export default Home