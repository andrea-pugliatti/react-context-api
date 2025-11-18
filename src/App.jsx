import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import ProductsPage from "./pages/ProductsPage";

import DefaultLayout from "./layouts/DefaultLayout";

import BudgetContext from "./contexts/BudgetContext";

function App() {
	const [maxPrice, setMaxPrice] = useState(null);

	return (
		<BudgetContext.Provider value={{ maxPrice, setMaxPrice }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<DefaultLayout />}>
						<Route index element={<HomePage />} />
						<Route path="about" element={<AboutPage />} />
						<Route path="products" element={<ProductsPage />} />
						<Route path="products/:id" element={<ProductPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</BudgetContext.Provider>
	);
}

export default App;
