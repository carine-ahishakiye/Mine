import React, { useState } from "react";
import { useCreateProductMutation } from "../../redux/features/products/productApi";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [createProduct, { isLoading, isError, error }] = useCreateProductMutation();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct(product).unwrap();
      alert("Product created successfully!");
      navigate("/admin/products"); // Redirect after success
    } catch (error) {
      console.error("Failed to create product:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Create New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required className="input" />
        <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required className="input" />
        <textarea name="description" placeholder="Description" value={product.description} onChange={handleChange} required className="input"></textarea>
        <input type="text" name="category" placeholder="Category" value={product.category} onChange={handleChange} required className="input" />
        <button type="submit" disabled={isLoading} className="btn bg-blue-500 text-white w-full">
          {isLoading ? "Creating..." : "Create Product"}
        </button>
        {isError && <p className="text-red-500">{error?.data?.message || "Something went wrong"}</p>}
      </form>
    </div>
  );
};

export default CreateProduct;
