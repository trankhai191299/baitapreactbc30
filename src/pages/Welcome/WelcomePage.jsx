import React, { Component } from 'react'

export default class WelcomePage extends Component {
  render() {
    return (
      <div className='container'>
        <h3 className='text-center fw-bold mt-5'>Bài tập React - Bootcamp 30</h3>
        <p style={{fontSize:'20px'}} className='fw-bold text-decoration-underline'>Họ Tên: Trần Hoàng Khải</p>
        <div className='danh-sach-bai-tap'>
            <ul>
                <li>Bài tập 1: Bài tập react buổi 1 - BaiTapComponent</li>
                <li>Bài tập 2: Bài tập react buổi 2 State - BaiTapGlasses</li>
                <li>Bài tập 3: Bài tập props giỏ hàng - BaiTapGioHang</li>
                <li>Bài tập 4: Bài tập reactjs form - BaiTapRedux</li>
                
            </ul>
        </div>
      </div>
    )
  }
}
