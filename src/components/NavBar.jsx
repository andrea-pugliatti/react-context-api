import { useContext } from "react";
import { NavLink } from "react-router-dom";

import BudgetContext from "../contexts/BudgetContext";

export default function NavBar() {
	const menu = [
		{
			id: 1,
			title: "Home",
			link: "/",
		},
		{
			id: 2,
			title: "Chi Siamo",
			link: "/about",
		},
		{
			id: 3,
			title: "Prodotti",
			link: "/products",
		},
	];

	const { budgetMode, setBudgetMode } = useContext(BudgetContext);

	return (
		<nav className="navbar">
			<div className="container">
				<ul className="menu">
					<li>
						<h1>NEGOZIO</h1>
					</li>
					{menu.map((current) => (
						<li key={current.id}>
							<NavLink to={current.link}>{current.title}</NavLink>
						</li>
					))}
					<li>
						<button type="button" onClick={() => setBudgetMode(!budgetMode)}>
							{budgetMode
								? "Disattiva Modalità Budget"
								: "Attiva Modalità Budget"}
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
}
