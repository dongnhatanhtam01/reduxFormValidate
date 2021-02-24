const stateDefault = {
  mangSinhVien: [
    {
      maSV: 1,
      hoTen: "nguyen van a",
      soDienThoai: "12345678",
      email: "test@test01@email.com",
    },
    {
      maSV: 2,
      hoTen: "nguyen van a",
      soDienThoai: "12345678",
      email: "test@test01@email.com",
    },
    {
      maSV: 13,
      hoTen: "nguyen van a",
      soDienThoai: "12345678",
      email: "test@test01@email.com",
    },
    {
      maSV: 555,
      hoTen: "nguyen van a",
      soDienThoai: "12345678",
      email: "test@test01@email.com",
    },
  ],
};

export const QuanLySinhVienReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CAP_NHAT_THONG_TIN_SINH_VIEN": {
      const mangSinhVienUpdate = [...state.mangSinhVien]
      const index = mangSinhVienUpdate.findIndex(item => item.maSV === action.sinhVien.maSV)
      const item = mangSinhVienUpdate.find(item => item.maSV === action.sinhVien.maSV)
      mangSinhVienUpdate[index] = item
      return state
    }; break;
    case "XOA_SV_THEO_MASV": {
      const mangSinhVienUpdate = [...state.mangSinhVien]
      let index = mangSinhVienUpdate.findIndex((item) => item.maSV === action.maSV)
      if (index !== -1) { mangSinhVienUpdate.splice(index, 1) }

      state.mangSinhVien = mangSinhVienUpdate
      return { ...state }
    }; break;
    case "THEM_SINH_VIEN": {
      const mangSinhVienUpdate = [...state.mangSinhVien, action.sinhVien];
      state.mangSinhVien = mangSinhVienUpdate;
      console.log("redux", action);
      return { ...state };
    }; break;

    default: {
      return { ...state };
    }; break;
  }
};
