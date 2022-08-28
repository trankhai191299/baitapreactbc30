import React, { Component } from 'react'
import { connect } from 'react-redux'

class ThongTinDatGhe extends Component {
  renderDatGhe = () =>{
    let {listGheDangDat} = this.props.bookingTicketReducer
    return listGheDangDat?.map((ghe,index)=>{
      return  <tr key={index} className="text-warning">
                <td>{ghe.soGhe}</td>
                <td>{ghe.gia.toLocaleString()}</td>
                <td>
                  <button className='btn btn-danger' onClick={()=>{
                    const action = {
                      type:"HUY_GHE",
                      payload:{
                        huyGhe : ghe
                      }
                    }
                    this.props.dispatch(action)
                  }}>Hủy</button>
                </td>
              </tr>
    })
  }
  tongTien = () =>{
    let {listGheDangDat} = this.props.bookingTicketReducer
    return listGheDangDat?.reduce((tongTien,ghe,index)=>{
      return tongTien += ghe.gia
    },0).toLocaleString()
  }
  render() {
    return (
      <div>
        <div className="mt-5">
          <div className="d-flex flex-column">
            <div className="btnDcChon">
              <button className="gheDuocChon me-2"></button>
              <span className="text-light">Ghế đã đặt</span>
            </div>
            <div className="btnDgChon">
              <button className="gheDangChon me-2"></button>
              <span className="text-light">Ghế đang đặt</span>
            </div>
            <div className="btnChChon">
              <button className="ghe me-2" style={{ marginLeft: 0 }}></button>
              <span className="text-light">Ghế chưa đặt</span>
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <table className="table" border="2">
            <thead>
              <tr className='text-light fs-5'>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Hủy</th>
              </tr>
            </thead>
            <tbody>
              {this.renderDatGhe()}
            </tbody>
            <tfoot>
              <tr className='text-success'>
                <td>Tổng tiền:</td>
                <td>
                  {this.tongTien()}
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bookingTicketReducer : state.bookingTicketReducer
})


export default connect(mapStateToProps)(ThongTinDatGhe)