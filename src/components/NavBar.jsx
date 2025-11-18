import { NavLink } from "react-router-dom";

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
				</ul>
			</div>
		</nav>
	);
}
