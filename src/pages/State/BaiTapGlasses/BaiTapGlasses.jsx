import React, { Component } from "react";
import "./css/BaiTapGlassess.css";
const data = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./img/glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./img/glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./img/glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./img/glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./img/glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./img/glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./img/glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./img/glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./img/glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

export default class BaiTapGlasses extends Component {
  state = {
    thongTinMatKinh :{
      name:"GUCCI G8850U",
      url:"./img/glassesImage/v1.png",
      desc:"Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
  }
  renderGlasses = () => {
      return data.map((glassInform, index) => {
        return (
          <div className="col-2" key={index}>
            <div className="item p-3">
              <img style={{cursor:'grab'}} src={glassInform.url} alt="..." className="img-fluid" onClick={()=>{
                this.changeGlasses(glassInform)
              }}/>
            </div>
          </div>
        );
      });
  };
  changeGlasses = (sanphamClick) => {
    this.setState({
      thongTinMatKinh : sanphamClick,
    })
  }
  render() {
    const keyframeGlass = `
    @keyframes animateGlasses${Date.now()} {
      from{
        transform: scale(0%) rotate(-60deg);
      }
      to{
        transform: scale(100%) rotate(0deg);
      }
    }
    `
    const styleGlass = {
      transform: 'rotate(0deg)',
      animation: `animateGlasses${Date.now()} 1s`
    }
    let {name,url,desc} = this.state.thongTinMatKinh
    return (
      <div className="baiTapGlass_Body">
        <style>
            {keyframeGlass}
        </style>
        <div className="overlayBody">
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
              <div className="row align-items-center justify-content-center">
                <div className="col-6">
                  <div className="image">
                    <img
                      src="/img/glassesImage/model.jpg"
                      alt="..."
                      height={250}
                    />
                    <div className="overlay-content">
                      <img style={styleGlass}  src={url} alt="..." />
                      <div className="information">
                        <h2 className="glass-name">{name}</h2>
                        <p className="glass-description">{desc}</p>
                      </div>
                    </div>
                  </div>
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
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
