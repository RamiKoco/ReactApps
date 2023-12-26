import { useState, useEffect } from "react";
import axios from "axios";

export const useDeleteProduct = (productId) => {
  const [isDeleted, setDeleted] = useState(false);

  useEffect(() => {
    const deleteProduct = async () => {
      try {
        const response = await axios.delete(`https://dummyjson.com/products/${productId}`);
        console.log(response);
        setDeleted(true);
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    };

    if (isDeleted) {
      console.log("Product deleted successfully");
      console.log(productId);
      deleteProduct();
    }
  }, [isDeleted, productId]);

  const handleDeleteClick = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      setDeleted(true);
    }
  };

  return { isDeleted, handleDeleteClick };
};