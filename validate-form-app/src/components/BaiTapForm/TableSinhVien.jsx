import React, { Component } from "react";
import { connect } from "react-redux";
// import ModalSinhVien from "./ModalSinhVien"

class TableSinhVien extends Component {
  renderSinhVienHandler = () => {
    const { mangSinhVien } = this.props;
    return mangSinhVien.map((sinhVien, index) => {
      return (
        <tr className="text-white" key={index}>
          <td>{sinhVien.maSV}</td>
          <td>{sinhVien.hoTen}</td>
          <td>{sinhVien.soDienThoai}</td>
          <td>{sinhVien.email}</td>
          <td>
            <button 
            className="btn btn-warning  btn-sm "
            onClick={()=>this.props.XoaBangSinhVien(sinhVien.maSV)}
            >Xóa sinh viên</button>
            {/* <button className="btn btn-warning  btn-sm " data-toggle="modal" data-target="#exampleModal">Xóa sinh viên</button> */}
          </td>
          <td>
          <button 
            className="btn btn-primary  btn-sm "
            onClick={()=>this.props.CapNhatThongTinSinhVien(sinhVien)}
            >Cập nhật</button>
          </td>
        </tr>
      );
    });
  };
  render() {
    console.log(this.props.mangSinhVien);
    return (
      <div className="container col-8">
        <table className="table">
          <thead>
            <tr className="text-white">
              <th>Mã Sinh Viên</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderSinhVienHandler()}</tbody>
        </table>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    CapNhatThongTinSinhVien: (sinhVien) => {
      const action = {
        type:"CAP_NHAT_THONG_TIN_SINH_VIEN",
        sinhVien
      }
      dispatch(action)
    },
    XoaBangSinhVien: (maSV) => {
      const action = {
        type: "XOA_SV_THEO_MASV",
        maSV
      }
      dispatch(action)
    }
  }
}
// Nhận props từ state được map lên reducer con
const mapStateToProps = (state) => {
  return {
    mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableSinhVien);
