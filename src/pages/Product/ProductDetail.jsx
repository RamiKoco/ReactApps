import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    getProductDetails();
  }, [productId]);

  const getProductDetails = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      setProduct(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  return (
    <div className="container mt-5">
      {product ? (
        <div>
          <div className="row">
            <div className="col-md-6">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h2>{product.title}</h2>
              <p>
                <strong>Brand:</strong> {product.brand}
              </p>
              <p>
                <strong>Category:</strong> {product.category}
              </p>
              <p>
                <strong>Description:</strong> {product.description}
              </p>
              <p>
                <strong>Price:</strong> ${product.price}
              </p>
              <p>
                <strong>Discount Percentage:</strong>{" "}
                {product.discountPercentage}%
              </p>
              <p>
                <strong>Rating:</strong> {product.rating}
              </p>
              <p>
                <strong>Stock:</strong> {product.stock}
              </p>
              <a href="#" className="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <h3>Product Images</h3>
              <div
                id="productImages"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  {product.images.map((image, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <img
                        src={image}
                        className="d-block w-100"
                        alt={`Image ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
                <a
                  className="carousel-control-prev"
                  href="#productImages"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#productImages"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        
        </div>
      ) : (
        <p>Loading...</p>
      )}
       <div style={{ marginBottom: "20px" }}></div>
    </div>
  );
}