const products = [
    {
      id: 1,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-1.jpg"
    },
    {
      id: 2,
      name: "Sports Shoes",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-2.jpg"
    },
    {
      id: 3,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-3.jpg"
    },
    {
      id: 4,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-4.jpg"
    },
    {
      id: 5,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-5.jpg"
    },
    {
      id: 6,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-6.jpg"
    },
    {
      id: 7,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-7.jpg"
    },
    {
      id: 8,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-8.jpg"
    },
    {
      id: 9,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-9.jpg"
    },
    {
      id: 10,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-10.jpg"
    },
    {
      id: 11,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-11.jpg"
    },
    {
      id: 12,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-12.jpg"
    },
    {
      id: 13,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-13.jpg"
    },
    {
      id: 14,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-14.jpg"
    },
    {
      id: 15,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-15.jpg"
    },
    {
      id: 16,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-16.jpg"
    }
  ];
localStorage.setItem("products", JSON.stringify(products));

function viewProduct(productId) { const product = products.find(p => p.id === productId)
    ; if (product) { document.getElementById('product-img').src = product.img; document.getElementById('product-name').innerText = product.name; document.getElementById('product-price').innerText = product.price; 
        document.getElementById('product-description').innerText = product.description;
         document.getElementById('product-category').innerText = `Home / ${product.category}`; 
         document.getElementById('small-img-1').src = product.img; document.getElementById('small-img-2').src = "../asset/image/gallery-2.jpg";
          document.getElementById('small-img-3').src = "../asset/image/gallery-3.jpg"; 
          document.getElementById('small-img-4').src = "../asset/image/gallery-4.jpg"; } } 
          viewProduct(1);

document.getElementsByClassName("btn") 