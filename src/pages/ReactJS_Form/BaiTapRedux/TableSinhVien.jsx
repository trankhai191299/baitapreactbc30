import React, { Component } from 'react'
import { connect } from 'react-redux'

export class TableSinhVien extends Component {
  
  searchName = (e) => {
    const action = {
      type : "SEARCH_NAME",
      payload :{
        searchName : e.target.value
      }
    }
    this.props.dispatch(action)
  }
  renderTable = () =>{
    let {arrSV,arrSvSearch} = this.props.baitapReduxReducer
    if(!arrSvSearch.length){
      return arrSV.map((sv,index)=>{
        return <tr key={index}>
            <td>{sv.maSV}</td>
            <td>{sv.tenSV}</td>
            <td>{sv.sdt}</td>
            <td>{sv.email}</td>
            <td>
              <button className='btn btn-danger mx-2' onClick={()=>{
                const action = {
                  type : 'DELETE_SV',
                  payload : {
                    maSV : sv.maSV
                  }
                }
                this.props.dispatch(action)
              }}>Xóa SV</button>
              <button className='btn btn-primary mx-2'>Cập nhật</button>
            </td>
        </tr>
    })
    }else{
      return arrSvSearch.map((sv,index)=>{
        return <tr key={index}>
            <td>{sv.maSV}</td>
            <td>{sv.tenSV}</td>
            <td>{sv.sdt}</td>
            <td>{sv.email}</td>
            <td>
              <button className='btn btn-danger mx-2' onClick={()=>{
                const action = {
                  type : 'DELETE_SV',
                  payload : {
                    maSV : sv.maSV
                  }
                }
                this.props.dispatch(action)
              }}>Xóa SV</button>
              <button className='btn btn-primary mx-2'>Cập nhật</button>
            </td>
        </tr>
      })
    }
  }
  render() {
    // let {arrSV,arrSvSearch} = this.props.baitapReduxReducer
    return (
      <div className='mt-3'>
        <form>
          <div className="form-group">
            <input type="text" id='searchName' className='form-control mb-3' placeholder='Search Name...' onChange={this.searchName}/>
          </div>
        </form>
        <table className='table'>
            <thead className='bg-dark text-white'>
                <tr>
                    <th>Mã SV</th>
                    <th>Họ tên</th>
                    <th>Số điện thoại</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.renderTable()}
            </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    baitapReduxReducer : state.baitapReduxReducer
})


export default connect(mapStateToProps)(TableSinhVien)