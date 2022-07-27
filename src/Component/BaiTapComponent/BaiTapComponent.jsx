import React, { Component } from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'

export default class BaiTapComponent extends Component {
  render() {
    return (
      <div>
        {/* Navbar */}
        <section>
          <Navbar/>
        </section>
        {/* Header */}
        <header>
          <Header/>
        </header>
        {/* Content */}
        <section>
          
        </section>
      </div>
    )
  }
}
