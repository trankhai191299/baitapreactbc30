import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
  state = {
    itemInform :{
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    }
  }
  xemChiTiet = (sanphamClick) =>{
    this.setState({
      itemInform : sanphamClick
    })
  }
  render() {
    let {phoneData,addCart} = this.props
    let {tenSP,manHinh,heDieuHanh,cameraTruoc,cameraSau,ram,rom,hinhAnh} = this.state.itemInform
    return (
      <div className='container'>
        <div className="row">
        {phoneData.map((phone,index) => {
            return <div className="col-4" key={index}>
                        <ProductItem phone = {phone} xemChiTiet = {this.xemChiTiet} addCart={addCart}/>
                    </div>
        })}
        </div>
        <div className="mt-5">
          <h3>Thông tin chi tiết</h3>
          <div className="row mt-5">
            <div className="col-4">
              <h3 className='text-center'>{tenSP}</h3>
              <img src={hinhAnh} alt="..." width={300} height={300}/>
            </div>
            <div className="col-8 ps-5">
              <h4>Thông số kỹ thuật</h4>
              <table className='table'>
                <thead className='text-start'>
                  <tr>
                    <td className='fw-bold'>Màn hình:</td>
                    <td>{manHinh}</td>
                  </tr>
                  <tr>
                    <td className='fw-bold'>Hệ điều hành:</td>
                    <td>{heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td className='fw-bold'>Camera trước:</td>
                    <td>{cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td className='fw-bold'>Camera sau:</td>
                    <td>{cameraSau}</td>
                  </tr>
                  <tr>
                    <td className='fw-bold'>RAM:</td>
                    <td>{ram}</td>
                  </tr>
                  <tr>
                    <td className='fw-bold'>ROM:</td>
                    <td>{rom}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
