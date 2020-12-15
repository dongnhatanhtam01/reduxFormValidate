import React, { Component } from "react";
import { connect } from "react-redux";

class FormSinhVien extends Component {
  state = {
    maSV: "",
    hoTen: "",
    soDienThoai: "",
    email: "",
  };
  submitHandler = (e) => {
    e.preventDefault();
    this.props.themSinhVien(this.state);
  };
  onChangeHandler = (e) => {
    let tagInput = e.target;
    let { name, value } = tagInput;
    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log(this.state);
      }
    );
  };
  render() {
    return (
      <div className="container text-start">
        <div className="card  text-white bg-dark">
          <div className="card-header text-left">Thông tin sinh viên</div>
          <div className="card-body">
            <form onSubmit={this.submitHandler}>
              <div className="row">
                <div className="form-group col-6">
                  <span>Mã Sinh Viên</span>
                  <input
                    className="form-control"
                    name="maSV"
                    value={this.state.maSV}
                    placeholder={this.state.maSV}
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div className="form-group col-6">
                  <span>Họ và tên</span>
                  <input
                    className="form-control"
                    name="hoTen"
                    value={this.state.hoTen}
                    placeholder={this.state.maSV}
                    onChange={this.onChangeHandler}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-6">
                  <span>Số điện thoại</span>
                  <input
                    className="form-control"
                    name="soDienThoai"
                    value={this.state.soDienThoai}
                    placeholder={this.state.maSV}
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div className="form-group col-6">
                  <span>Email</span>
                  <input
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    placeholder={this.state.maSV}
                    onChange={this.onChangeHandler}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-end mt-4">
                  <button type="submit" className="btn btn-success">
                    Thêm sinh viên
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhVien) => {
      const action = {
        type: "THEM_SINH_VIEN",
        sinhVien,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(FormSinhVien);
