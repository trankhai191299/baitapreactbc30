import React, { Component } from 'react'
import { connect } from 'react-redux'
import './BaiTapBookingTicket.css'

class BaiTapDatVeXemPhim extends Component {
  render() {
    return (
      <div className='position-fixed w-100 h-100' style={{backgroundImage:"url('./img/bookingTicket/bgmovie.jpg')",backgroundSize:'100%',backgroundRepeat:"no-repeat"}}>
        <div style={{backgroundColor:"rgba(0,0,0,0.8)"}} className='position-fixed w-100 h-100'>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(BaiTapDatVeXemPhim)
