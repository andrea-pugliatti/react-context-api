/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <Bug> */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";

export default function ProductPage() {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();

	const endpoint = `https://fakestoreapi.com/products/${id}`;

	const fetchProduct = () => {
		fetch(endpoint)
			.then((response) => response.json())
			.then(setProduct)
			.catch((error) => {
				console.error(error);
				navigate("/products");
			})
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		fetchProduct();
		// Scroll to top when entering the product page
		window.scrollTo(0, 0);
	}, [id]);

	return (
		<main>
			<div className="container">
				{isLoading ? (
					<Loader />
				) : (
					<div className="product-detail">
						<div className="product-category">{product.category}</div>
						<img src={product.image} alt={product.title} />
						<div className="product-buttons">
							<button
								type="button"
								onClick={() => navigate(`/products/${Number(id) - 1}`)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="64"
									height="64"
									fill="currentColor"
									className="bi bi-arrow-left"
									viewBox="0 0 16 16"
								>
									<title>Left</title>
									<path
										fillRule="evenodd"
										d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
									/>
								</svg>
							</button>
							<button type="button" onClick={() => navigate(`/products/`)}>
								Torna alla lista di prodotti
							</button>
							<button
								type="button"
								onClick={() => navigate(`/products/${Number(id) + 1}`)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="64"
									height="64"
									fill="currentColor"
									className="bi bi-arrow-right"
									viewBox="0 0 16 16"
								>
									<title>Right</title>
									<path
										fillRule="evenodd"
										d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
									/>
								</svg>{" "}
							</button>
						</div>
						<div className="product-title">{product.title}</div>
						<div className="product-price">{product.price.toFixed(2)}€</div>
						{product.rating ? (
							<div className="product-rating">
								<span className="product-rating-rate">
									{product.rating.rate}/5
								</span>{" "}
								<span className="product-rating-count">
									{product.rating.count} recensioni
								</span>
							</div>
						) : (
							""
						)}
						<div className="product-description">{product.description}</div>
					</div>
				)}
			</div>
		</main>
	);
}
