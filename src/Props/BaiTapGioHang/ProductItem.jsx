import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let {phone,xemChiTiet,addCart} = this.props
    return (
      <div>
        <div className="card text-white bg-dark" >
          <img className="card-img-top" src={phone.hinhAnh} alt="..." height={350}/>
          <div className="card-body">
            <h4 className="card-title">{phone.tenSP}</h4>
            <div className="btn-area mt-3">
              <button className="btn btn-success me-2" onClick={()=>{
                xemChiTiet(phone)
              }}>Xem chi tiết</button>
              <button className="btn btn-danger ms-2" onClick={()=>{
                addCart(phone)
              }}>Thêm giỏ hàng</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
