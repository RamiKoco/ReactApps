import React, { useState } from "react";
import axios from "axios";

export default function AddProduct() {
  const [productData, setProductData] = useState({
    title: "",
    brand: "",
    category: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    thumbnail: "",
    images: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setProductData({
      ...productData,
      [name]: files
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
   
    const response= await axios.post("https://dummyjson.com/products/add", productData);
      console.log("Product added successfully");
      console.log(response)
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={productData.title}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Brand:</label>
          <input
            type="text"
            className="form-control"
            name="brand"
            value={productData.brand}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            className="form-control"
            name="category"
            value={productData.category}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            className="form-control"
            name="description"
            value={productData.description}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Price:</label>
          <input
            type="text"
            className="form-control"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Discount Percentage:</label>
          <input
            type="text"
            className="form-control"
            name="discountPercentage"
            value={productData.discountPercentage}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Rating:</label>
          <input
            type="text"
            className="form-control"
            name="rating"
            value={productData.rating}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Stock:</label>
          <input
            type="text"
            className="form-control"
            name="stock"
            value={productData.stock}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Thumbnail URL:</label>
          <input
            type="text"
            className="form-control"
            name="thumbnail"
            value={productData.thumbnail}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Images:</label>
          <input
            type="file"
            className="form-control-file"
            name="images"
            multiple
            onChange={handleImageChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
}