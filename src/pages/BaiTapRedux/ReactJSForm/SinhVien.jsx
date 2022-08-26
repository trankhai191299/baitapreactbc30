import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SinhVien extends Component {
  handleChange = (e) =>{
    const action = {
      type : "HANDLE_CHANGE_INPUT",
      payload:{
        id : e.target.id,
        value : e.target.value,
        pattern : e.target.pattern
      }
    }
    this.props.dispatch(action)
  }
  renderBtnSubmit = () =>{
    let {error} = this.props.reactFormReducer
    let valid = true
    for(let key in error){
      if(error[key] !== ''){
        valid = false
      }
    }
    if(valid){
      return <button className='btn btn-success'>Thêm Sinh Viên</button>
    }
    return <button className='btn btn-success' disabled>Thêm Sinh Viên</button>
  }
  render() {
    let {sinhVien,error} = this.props.reactFormReducer
    return (
      <div>
        <form onSubmit={(e)=>{
          e.preventDefault()
          const action = {
            type : "HANDLE_SUBMIT",
            payload :{
              newSinhVien : {...sinhVien}
            }
          }
          this.props.dispatch(action)
        }}>
          <div className="row">
            <div className="col-6">
              <div className="form-group mb-3">
                <p>Mã SV:</p>
                <input className="form-control" pattern='^[0-9]+$' value={sinhVien.maSV} type="text" id="maSV" onChange={this.handleChange}/>
                <span className='text-danger'>{error.maSV}</span>
              </div>
              <div className="form-group mb-3">
                <p>Số điện thoại:</p>
                <input className="form-control" pattern='^[0-9]+$' type="text" value={sinhVien.sdt} id="sdt" onChange={this.handleChange} maxLength={10}/>
                <span className='text-danger'>{error.sdt}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group mb-3">
                <p>Họ tên:</p>
                <input className="form-control" pattern='^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+' type="text" id="tenSV" value={sinhVien.tenSV}  onChange={this.handleChange}/>
                <span className='text-danger'>{error.tenSV}</span>
              </div>
              <div className="form-group mb-3">
                <p>Email:</p>
                <input className="form-control" pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$' type="email" id="email" value={sinhVien.email} onChange={this.handleChange}/>
                <span className='text-danger'>{error.email}</span>
              </div>
            </div>
          </div>
          {this.renderBtnSubmit()}
          <button className='btn btn-primary mx-2'>Cập nhật sinh viên</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reactFormReducer : state.reactFormReducer
})



export default connect(mapStateToProps)(SinhVien)