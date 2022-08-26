import React, { Component } from 'react'
import { connect } from 'react-redux'

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>ThongTinDatGhe</div>
    )
  }
}

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(ThongTinDatGhe)