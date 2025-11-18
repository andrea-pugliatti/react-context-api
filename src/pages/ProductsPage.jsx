/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <Bug> */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Loader from "../components/Loader";
import BudgetContext from "../contexts/BudgetContext";

export default function ProductsPage() {
	const productsEndpoint = "https://fakestoreapi.com/products";

	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [filtered, setFiltered] = useState([]);

	const { budgetMode } = useContext(BudgetContext);

	const fetchProducts = () => {
		fetch(productsEndpoint)
			.then((response) => response.json())
			.then((response) => {
				setProducts(response);
				filterProducts(response);
			})
			.catch((error) => console.error(error))
			.finally(() => setIsLoading(false));
	};

	const filterProducts = (products) => {
		if (budgetMode) {
			const filtered = products.filter((product) => product.price <= 30);
			setFiltered(filtered);
		} else {
			setFiltered(products);
		}
	};

	useEffect(fetchProducts, []);

	useEffect(() => {
		filterProducts(products);
	}, [budgetMode]);

	return (
		<main>
			<div className="container">
				<div className="row">
					{isLoading ? (
						<Loader />
					) : (
						filtered.map((item) => (
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
