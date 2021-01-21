const stateDefault = {
  mangSinhVien: [
    {
      maSV: 1,
      hoTen: "nguyen van a",
      soDienThoai: "+12345678",
      email: "test@test01@email.com",
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
    }; break;

    default: {
      return { ...state };
    }; break;
  }
};
