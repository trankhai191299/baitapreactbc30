import React, { Component } from "react";
import { connect } from "react-redux";
import "./BaiTapBookingTicket.css";
import danhSachGhe from '../../data/danhSachGhe.json'
import ThongTinDatGhe from "./ThongTinDatGhe";
import HangGhe from "./HangGhe";

class BaiTapDatVeXemPhim extends Component {
  renderHangGhe = () =>{
    return danhSachGhe.map((hangGhe,index)=>{
      return  <div key={index}>
                <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
              </div>
    })
  }
  render() {
    return (
      <div
        className="bookingMovie position-fixed w-100 h-100"
        style={{
          backgroundImage: "url('./img/bookingTicket/bgmovie.jpg')",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          className="position-fixed w-100 h-100"
        >
          <div className="container">
            <div className="row">
              <div className="col-8 text-center">
                <h1 className="text-warning text-center">Bài tập đặt vé xem phim</h1>
                <h4 className="mt-3 text-light">Màn hình</h4>
                <div className="d-flex flex-column justify-content-center mt-1">
                  <div className="screen"></div>
                  {this.renderHangGhe()}
                </div>
                
              </div>
              <div className="col-4">
                <div className="text-light fs-3 mt-2 text-center">Danh sách bạn chọn</div>
                <ThongTinDatGhe/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(BaiTapDatVeXemPhim);
