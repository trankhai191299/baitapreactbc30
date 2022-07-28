import React, { Component } from "react";
import "./css/BaiTapGlassess.css";
const data1 = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];
const data2 = [
  { id: 1, img: "./img/glassesImage/g1.jpg" },
  { id: 2, img: "./img/glassesImage/g2.jpg" },
  { id: 3, img: "./img/glassesImage/g3.jpg" },
  { id: 4, img: "./img/glassesImage/g4.jpg" },
  { id: 5, img: "./img/glassesImage/g5.jpg" },
  { id: 6, img: "./img/glassesImage/g6.jpg" },
  { id: 7, img: "./img/glassesImage/g7.jpg" },
  { id: 8, img: "./img/glassesImage/g8.jpg" },
  { id: 9, img: "./img/glassesImage/g9.jpg" },
];
export default class BaiTapGlasses extends Component {
  renderGlasses = () => {
    return data2.map((glassImg, index) => {
      return (
        <div className="col-2" key={index}>
          <div className="item p-3">
            <img src={glassImg.img} alt="..." className="img-fluid" />
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="baiTapGlass_Body">
        <div className="overlay"></div>
        <header
          className="text-center p-4 text-white"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="container">
            <h2 className="fs-bold">Try Glasses App Online</h2>
          </div>
        </header>
        <div className="main-content pt-5">
          <div className="container">
            <div className="model-section pb-4">
              <div className="row">
                <div className="col-6">
                  <img
                    src="/img/glassesImage/model.jpg"
                    alt="..."
                    height={250}
                  />
                </div>
                <div className="col-6">
                  <img
                    src="/img/glassesImage/model.jpg"
                    alt="..."
                    height={250}
                  />
                </div>
              </div>
            </div>
            <div className="glasses-choice p-3 mt-5 bg-white">
              <div className="row align-items-center">
                {this.renderGlasses()}
                {/* <div className="col-2">
                            <img src="/img/glassesImage/g1.jpg" alt="" className='img-fluid'/>
                        </div>
                        <div className="col-2">
                            <img src="/img/glassesImage/g2.jpg" alt="" className='img-fluid'/>
                        </div>
                        <div className="col-2">
                            <img src="/img/glassesImage/g3.jpg" alt="" className='img-fluid'/>
                        </div>
                        <div className="col-2">
                            <img src="/img/glassesImage/g4.jpg" alt="" className='img-fluid'/>
                        </div>
                        <div className="col-2">
                            <img src="/img/glassesImage/g5.jpg" alt="" className='img-fluid'/>
                        </div>
                        <div className="col-2">
                            <img src="/img/glassesImage/g6.jpg" alt="" className='img-fluid'/>
                        </div>
                        <div className="col-2">
                            <img src="/img/glassesImage/g7.jpg" alt="" className='img-fluid'/>
                        </div>
                        <div className="col-2">
                            <img src="/img/glassesImage/g8.jpg" alt="" className='img-fluid'/>
                        </div>
                        <div className="col-2">
                            <img src="/img/glassesImage/g9.jpg" alt="" className='img-fluid'/>
                        </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
