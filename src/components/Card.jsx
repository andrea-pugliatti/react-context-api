export default function Card({ product }) {
	return (
		<div className="card">
			<img src={product.image} alt={product.title} />
			<div className="card-body">
				<h3>{product.title}</h3>
				<div className="d-flex space-between">
					<div className="product-rating">{product.rating.rate}/5 </div>
					<div>
						<span>PRICE: </span>
						<span className="product-price">{product.price}€</span>
					</div>
				</div>
			</div>
		</div>
	);
}
