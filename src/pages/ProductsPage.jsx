import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Loader from "../components/Loader";

export default function ProductsPage() {
	const productsEndpoint = "https://fakestoreapi.com/products";

	// {
	// 	id: 1,
	// 	title: "",
	// 	price: 1,
	// 	description: "",
	// 	category: "",
	// 	image: "",
	// 	rating: {
	// 		rate: 1,
	// 		count: 1,
	// 	}
	// }

	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchProducts = () => {
		fetch(productsEndpoint)
			.then((response) => response.json())
			.then(setProducts)
			.catch((error) => console.error(error))
			.finally(() => setIsLoading(false));
	};

	useEffect(fetchProducts, []);

	return (
		<main>
			<div className="container">
				<div className="row">
					{isLoading ? (
						<Loader />
					) : (
						products.map((item) => (
							<div key={item.id} className="col">
								<Link to={`/products/${item.id}`}>
									<Card product={item} />
								</Link>
							</div>
						))
					)}
				</div>
			</div>
		</main>
	);
}
