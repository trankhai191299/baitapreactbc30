import React, { Component } from 'react'
import { connect } from 'react-redux'

class HangGhe extends Component {
  render() {
    return (
      <div>HangGhe</div>
    )
  }
}

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(HangGhe)