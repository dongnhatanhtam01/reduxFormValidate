import React, { Component } from "react";
import { connect } from "react-redux";


//asdsad 
class FormSinhVien extends Component {
  // Validate form while onChange action on
  // state = {
  //   maSV: "",
  //   hoTen: "",
  //   soDienThoai: "",
  //   email: "",
  // };

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
  };

  // sau khi cap nhat gia tri moi tien hanh quet
  checkValid = () => {
    let valid = true // lần đầu tiên khi người dùng nhập bất kỳ => setState => trong đó chạy checkValid cho valid = true
    // cho nên nhập thiếu 3 trường kiua nó vẫn cho pass
    // thêm valid 
    // if(valid) {
    //   let flag = false
    //   for (var key in this.state.values) {
    //     // nếu tất cả values chưa có giá trị 
    //     if(!flag) {
    //       valid = false
    //     }
    //     if (this.state.values[key] !== "") {
    //       valid = true
    //     }
    //   }
    // }


    // duyệt đối tượng obj thì dùng for in
    // dùng for of khi duyệt mảng
    for (var key in this.state.errors) {
      if (this.state.errors[key] !== "" || this.state.values[key] ==="") {
        valid = false
      }
    }
    this.setState({
      ...this.state, valid: valid
    })
    //
    // if(valid) {
    //     return (
    //       <button className=" btn btn-success">Thêm đối tượng</button>
    //     )
    // }
    // return <button className=" btn btn-success" disabled >Thêm đối tượng</button>
  }
  // [hoTen, setHoTen] = useState("");
  submitHandler = (e) => {
    e.preventDefault();
    this.props.themSinhVien(this.state.values);
  };
  // onChange event catch
  onChangeHandler = (e) => {
    let tagInput = e.target;
    let { name, value, type, pattern } = tagInput;

    // ôn tập kiến thức ở ES6
    let errorMessage = ''; // mac dinh khong co loi

    // kiểm tra rỗng
    if (value.trim() === "") {
      errorMessage = name + "không được để rỗng..."
      console.log(errorMessage);
    }

    // Kiểm tra email
    if (name === 'email') {
      const regex = new RegExp(pattern) // string to regex obj
      if (!regex.test(value)) {
        errorMessage = name + ' không hợp lệ...'
      }
    }
    if (name === "soDienThoai") {
      const regex = new RegExp(pattern) // string to regex obj
      if (!regex.test(value)) {
        errorMessage = name + ' không hợp lệ...'
      }
    }


    let values = { ...this.state.values, [name]: value }
    let errors = { ...this.state.errors, [name]: errorMessage }
    this.setState({
      ...this.state,
      values: values,
      errors: errors
    }, () => {
      // kiem tra bien Valid de cap nhat state

      console.log(this.state);
      this.checkValid()
    })
    // es6 setState dynamic
    // this.setState(
    //   {
    //     [name]: value,
    //   },
    //   () => {
    //     console.log(this.state.values);
    //   }
    // );
  };
  render() {
    return (
      <div className="container col-6 text-start">
        <div className="card  text-white bg-dark">
          <div className="card-header text-left">Thông tin sinh viên</div>
          <div className="card-body">
            <form onSubmit={this.submitHandler}>
              <div className="row">
                <div className="form-group col-6">
                  <span>Mã Sinh Viên</span>
                  {/* form-student-code  */}
                  <input
                    className="form-control"
                    name="maSV"
                    value={this.state.values.maSV}
                    placeholder={this.state.values.maSV}
                    onChange={this.onChangeHandler}
                  />
                  <p className="text-danger">
                    {this.state.errors.maSV}sss
                  </p>
                </div>
                <div className="form-group col-6">
                  <span>Họ và tên</span>
                  {/* form-student-name  */}
                  <input
                    className="form-control"
                    name="hoTen"
                    value={this.state.values.hoTen}
                    placeholder={this.state.values.hoTen}
                    onChange={this.onChangeHandler}
                  />
                  <p className="text-danger">
                    {this.state.errors.hoTen}
                  </p>
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
              <div className="row">
                <div className="col-md-12 text-end mt-4">
                  {this.state.valid?<button className=" btn btn-success"  >Thêm đối tượng</button>:<button className=" btn btn-success" disabled >Thêm đối tượng</button>}
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
