
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



 // Tạo template cho email thông báo
const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS",
  price: 25000000,
  orderDate: "2024-01-15",
};

// Tạo template string cho email
const emailTemplate = `
xin chào ${user.firstName} ${user.lastName},
mặt hàng: ${user.product},
giá trị đơn hàng: ${user.price},
ngay đặt hàng: ${user.orderDate},

chúng tôi sẽ liên hệ sau 
xin cảm ơn.


`; // Viết template ở đây

console.log(emailTemplate);



// Tạo HTML template cho card sản phẩm
const product = {
  name: "iPhone 15",
  price: 20000000,
  discount: 10,
  inStock: true,
};

// Tính giá sau giảm
const finalPrice = product.price * (1 - product.discount / 100);

// Tạo template HTML
const productCard = `
<div class="product - card">
<h2>${product.name}</h2>
<p> giá gốc ${product.price.toLocaleString()} VND</p>
<p>giảm: ${product.discount}% </p>
<p>giảm sau giá: ${finalPrice.toLocaleString()} VND</p>
<p> trạng thái: ${product.inStock ? "còn hàng" : "hết hàng"}</p>

</div>

`; // Viết template ở đây

console.log(productCard);