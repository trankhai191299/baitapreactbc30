import React, { Component } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";
// import dataPhone from './dataPhone.json';

const data = [
  {
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
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

export default class ExerciseCart extends Component {
  state = {
    cart: [],
  };

  addCart = (sanPhamClick) => {
    let itemCart = {
        maSP: sanPhamClick.maSP,
        tenSP: sanPhamClick.tenSP,
        giaBan: sanPhamClick.giaBan,
        hinhAnh: sanPhamClick.hinhAnh,
        soLuong: 1,
    }
    let updateCart = [...this.state.cart]
    let index = updateCart.findIndex(sp => sp.maSP === itemCart.maSP)
    if(index !== -1){
      updateCart[index].soLuong += 1
    }else{
      updateCart.push(itemCart)
    } 
    this.setState({
      cart:updateCart
    })
  }

  deleteCart = (maSP) => {
    let updateCart = [...this.state.cart]
    let index = updateCart.findIndex(sp => sp.maSP === maSP)
    if(index !== -1){
      updateCart.splice(index,1)
    }
    this.setState({
      cart : updateCart
    })
  }

  updownTotalAmount=(maSP,updown)=>{
    let updateCart = [...this.state.cart]
    let index = updateCart.findIndex(item => item.maSP === maSP)
    console.log(updateCart[index])
    if(updown){
      updateCart[index].soLuong += 1
    }else{
      if(updateCart[index].soLuong > 1){
        updateCart[index].soLuong -= 1
      }
    }
    this.setState({
      cart : updateCart
    })
  }
  render() {
    let totalAmount = this.state.cart.reduce((totalAmount,item)=>{
      return totalAmount += item.soLuong
    },0)
    return (
      <div>
        <h3 className="text-center text-white bg-dark py-3">Bài Tập Giỏ hàng</h3>
        <Cart cart = {this.state.cart} deleteCart = {this.deleteCart} updownTotalAmount = {this.updownTotalAmount}/>
        <div className="text-end">
          <span
            style={{ cursor: "pointer" }}
            className="text-danger fw-bold my-3 d-block fs-5"
            data-bs-toggle="modal"
            data-bs-target="#Cart"
          >
            Giỏ Hàng ( {totalAmount} )
          </span>
        </div>
        <ProductList phoneData={data} addCart = {this.addCart}/>
      </div>
    );
  }
}
