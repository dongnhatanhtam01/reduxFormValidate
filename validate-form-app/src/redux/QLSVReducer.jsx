const stateDefault = {
  mangSinhVien: [
    {
      maSV: 1,
      hoTen: "nguyen van a",
      soDienThoai: "+12345678",
      email: "tamdna@vietmap.vn",
    },
  ],
};

export const QuanLySinhVienReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_SINH_VIEN": {
      const mangSinhVienUpdate = [...state.mangSinhVien, action.sinhVien];
      state.mangSinhVien = mangSinhVienUpdate;
      console.log("redux", action);

      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};
