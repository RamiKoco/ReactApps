import React from "react";
import {Link} from "react-router-dom";
import { useDeleteProduct } from "../../pages/Product/useDeleteProduct";

export default function ProductCard(props) {

	
	  const { isDeleted, handleDeleteClick } = useDeleteProduct(props.product.id);
	return (
		<div className="card">
			<img src={props.product.thumbnail} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.product.title}</h5>
				<p className="card-text">{props.product.description}</p>
				<Link
					to={`/product-detail/${props.product.id}`}
					className="btn btn-primary"
				>
					Details
				</Link>
				<button
          onClick={() =>handleDeleteClick()} 
          className="btn btn-danger"
             >Delete</button>
			</div>
		</div>
	);
}