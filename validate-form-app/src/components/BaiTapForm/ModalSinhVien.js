import React, { Component } from 'react'

export default class ModalSinhVien extends Component {
  state = {
    values: {
      maSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
    errors: {
      maSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
    valid: false
  }
  render() {
    console.log(this.state);
    return (
      <div className="modal fade text-dark" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form >
                <div className="row">
                  <div className="col-6 form-group">
                    <span>Mã Sinh Viên</span>
                    {/* form-student-code  - validated 0 -> 36*/}
                    <input
                      pattern="^([1-9]|[12]\d|3[0-6])$"
                      className="form-control"
                      name="maSV"
                      value={this.state.values.maSV}
                      placeholder={this.state.values.maSV}
                      onChange={this.onChangeHandler}
                    />
                  </div>
                  <div className="col-6 form-group">
                    <span>Họ và tên</span>
                    {/* form-student-name  */}
                    <input
                      className="form-control"
                      name="hoTen"
                      value={this.state.values.hoTen}
                      placeholder={this.state.values.hoTen}
                      onChange={this.onChangeHandler}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-6">
                    <span>Số điện thoại</span>
                    {/* form-student-contact  */}
                    <input
                      type="text"
                      pattern="^(0|[1-9][0-9]*)$"
                      className="form-control"
                      name="soDienThoai"
                      value={this.state.values.soDienThoai}
                      placeholder={this.state.values.soDienThoai}
                      onChange={this.onChangeHandler}
                    />
                    <p className="text-danger">
                      {this.state.errors.soDienThoai}
                    </p>
                  </div>
                  <div className="form-group col-6">
                    <span>Email</span>
                    {/* form-student-emailAddress  */}
                    <input
                      type="text"
                      pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                      className="form-control"
                      name="email"
                      value={this.state.values.email}
                      placeholder={this.state.values.email}
                      onChange={this.onChangeHandler}
                    />
                    <p className="text-danger">
                      {this.state.errors.email}
                    </p>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

