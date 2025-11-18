import { Link } from "react-router-dom";

export default function HomePage() {
	return (
		<main>
			<div className="jumbotron">
				<div className="container">
					<h1>Benvenuti sul nostro sito</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
						sapiente consequuntur cumque esse, alias asperiores, iste tempore
						obcaecati iusto nihil repellendus quasi laudantium a illo dicta
						atque nostrum quo quod!
					</p>
					<Link to="/products">Vai al negozio</Link>
				</div>
			</div>
		</main>
	);
}
