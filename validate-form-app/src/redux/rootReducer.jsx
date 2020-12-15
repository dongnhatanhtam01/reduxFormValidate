import {combineReducers} from 'redux';
import {QuanLySinhVienReducer} from './QLSVReducer';


// tạo ra store tổng cho toàn ứng dụng
export const rootReducer = combineReducers({
    // Nơi chứa các reducer cho từng nghiệp vụ
    QuanLySinhVienReducer    
})