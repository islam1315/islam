// script.js

// قائمة المنتجات
const products = [
    {
        name: "product 01",
        description: "وصف مختصر للمنتج 1",
        price: "15$",
        imageUrl: "data:image/jpeg;base64,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"
    },
    {
        name: "Product  02",
        description: "وصف مختصر للمنتج 2",
        price: "20$",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFHmOR-xzhh0JF1Glzi8Vzi71Jh8-M7Yw-Yg&usqp=CAU"
    },
    {
        name: "Product  03",
        description: "وصف مختصر للمنتج 3",
        price: "25$",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzmLvF5w_Fk8XShM3XJBEMx-VG40T5fXwBQ&usqp=CAU"
    }
    // أضف المزيد من المنتجات هنا
];

// دالة لإضافة المنتجات إلى الصفحة
function loadProducts() {
    const productsContainer = document.getElementById("products-container");
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <span class="price">${product.price}</span>
            <button>أضف إلى السلة</button>
        `;

        // إضافة حدث زر "أضف إلى السلة"
        productCard.querySelector("button").addEventListener("click", () => {
            alert(`تم إضافة ${product.name} إلى السلة`);
        });

        productsContainer.appendChild(productCard);
    });
}

// تحميل المنتجات عند فتح الصفحة
document.addEventListener("DOMContentLoaded", loadProducts);