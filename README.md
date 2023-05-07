# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
to install package
### `npm install`
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Note: Chỉnh sửa trong App.js
Khi isLogin = true, mọi địa chỉ lỗi dạng /sadsdsd... hay / hoặc /signup đều bị điều hướng đến /home
Khi isLogin = false, mọi địa chỉ đều bị điều hướng đến / (trừ /signup sẽ vẫn điều hướng đến /signup)
### Chức năng hiện tại
<h1>Đăng nhập bằng username hoặc email</h1>
Kiểm tra nội dung người dùng nhập, xác nhận người dùng đang sử dụng email hay username, sau đó gửi API tương ứng
<h1>Đăng ký</h1>
Tiền xử lý các thao tác như yêu cầu nhập đầy đủ dữ liệu, định dạng email hợp lệ, kiểm tra password và confirm password



