// Sửa đoạn code sau để hoạt động đúng
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Hiện tại in ra 3,3,3
  }, 100);
}
// Yêu cầu: Sửa để in ra 0,1,2


const student = {
    name: "thuy tien",
    age: 20,
};

// 1. Thêm thuộc tính grade với giá trị "A"
student.grade = "A";

 //2. Thay đổi tuổi thành 21
 student.age = 21;

 // 3. In ra toàn bộ thông tin student
 console.log(student);
