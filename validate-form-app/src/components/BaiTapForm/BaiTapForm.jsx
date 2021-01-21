import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import TableSinhVien from './TableSinhVien'

export default class BaiTapForm extends Component {
    render() {
        return (
            <div className="container">
                <h3>Bài Tập Form Sinh Viên</h3>
                <div className="row mt-5">
                    <FormSinhVien></FormSinhVien>
                    <TableSinhVien />
                </div>
            </div>
        )
    }
}
