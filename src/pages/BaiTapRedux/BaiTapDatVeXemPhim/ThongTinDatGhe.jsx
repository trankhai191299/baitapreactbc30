import React, { Component } from 'react'
import { connect } from 'react-redux'

class ThongTinDatGhe extends Component {
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
            
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(ThongTinDatGhe)