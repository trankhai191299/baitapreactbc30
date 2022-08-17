import React, { Component } from 'react'
import { connect } from 'react-redux'
import SinhVien from './SinhVien'
import TableSinhVien from './TableSinhVien'

class BaiTapRedux extends Component {
  render() {
    return (
      <div className='container'>
        <h3 className='bg-dark text-white display-6 p-3 fw-bold'>Thông tin sinh viên</h3>
        <SinhVien/>
        <TableSinhVien/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(BaiTapRedux)

