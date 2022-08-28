import React, { Component } from 'react'
import { connect } from 'react-redux'

class HangGhe extends Component {
  renderGhe = () =>{
    let {hangGhe} = this.props
    let {listGheDangDat} = this.props.bookingTicketReducer

    return hangGhe.danhSachGhe.map((ghe,index)=>{
      let cssGheDaDat = '';
      let cssGheDangDat = '';
      let disable= false;

      if(ghe.daDat){
        cssGheDaDat = 'gheDuocChon'
        disable = true;
      }

      let gheDangDat = listGheDangDat.find(gheDangDat => gheDangDat.soGhe === ghe.soGhe)
      if(gheDangDat){
        cssGheDangDat = 'gheDangChon'
      }

      return <button disabled={disable} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index} onClick={()=>{
        const action = {
          type:"DAT_GHE",
          payload :{
            datGhe:ghe
          }
        }
        this.props.dispatch(action)
      }}>
        {index+1}
      </button>
    })
  }
  renderSoGhe = () => {
    let {hangGhe} = this.props
    return hangGhe.danhSachGhe.map((hang,index)=>{
      return <button className='rowNumber' key={index}>{hang.soGhe}</button>
    })
  }
  renderHangGhe = () =>{
    let {hangGhe,soHangGhe} = this.props
    if(soHangGhe === 0) {
      return  <div className='ms-3'>
              {hangGhe.hang} {this.renderSoGhe()}
              </div>
    }else{
      return  <div>
              {hangGhe.hang} {this.renderGhe()}
              </div>
    }
    
  }
  render() {
    
    return (
      <div className='text-light text-start ms-2 mt-2'>
        {this.renderHangGhe()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  bookingTicketReducer : state.bookingTicketReducer
})


export default connect(mapStateToProps)(HangGhe)