# Ứng dụng:

- Render danh sách photo yêu thích
- Lọc photo theo category
- Thêm mới một photo
- Chỉnh sửa một photo
- Remove một photo
- Persist dữ liệu khi reload browser
- Random photo ngẫu nhiên từ picsum
- Hiển thị danh sách photo picsum đã lựa chọn

# Công nghệ:

- ReactJs
- Redux
- Form management: Formik
- Routings: React Router
- UI lib: Reactstrap
- Redux-Persist

# Custom-field:

- Cầu nối giữa UI control và Formik
- UI control là môt controlled component với props
  - name: tên xác định control
  - value: giá trị của control
  - onChange: trigger hàm này với giá trị mới khi có thay đổi
  - onBlur: xác định khi nào thì control này bị touched

## Random Photo control

Props : name, imageUrl, onImageUrlChange, onRandomButtonBlur
