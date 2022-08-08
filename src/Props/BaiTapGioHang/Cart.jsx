import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    let {cart,deleteCart,updownTotalAmount} = this.props
    return (
      <div>
        <div
          className="modal fade"
          id="Cart"
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content" style={{minWidth:"800px"}}>
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                />
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr className="fw-bold">
                      <td style={{width:'75px'}}>Mã sản phẩm</td>
                      <td style={{width:'100px'}}>Hình ảnh</td>
                      <td>Tên sản phẩm</td>
                      <td style={{width:'125px'}}>Số lượng</td>
                      <td>Đơn giá</td>
                      <td>Thành tiền</td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item,index)=>{
                      return  <tr key={index}>
                                <td>{item.maSP}</td>
                                <td><img src={item.hinhAnh} alt="..." width={100} height={100}/></td>
                                <td>{item.tenSP}</td>
                                <td>
                                  <button className="btn btn-success d-inlineblock me-2" onClick={()=>{
                                    updownTotalAmount(item.maSP,true)
                                  }}>+</button>
                                  {item.soLuong}
                                  <button className="btn btn-primary d-inlineblock ms-2" onClick={()=>{
                                    updownTotalAmount(item.maSP,false)
                                  }}>-</button>
                                </td>
                                <td>{item.giaBan} VND</td>
                                <td>{item.soLuong*item.giaBan} VND</td>
                                <td>
                                  <button className="btn btn-danger" onClick={()=>{deleteCart(item.maSP)}}>Delete</button>
                                </td>
                              </tr>
                    })}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
