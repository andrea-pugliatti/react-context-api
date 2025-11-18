import "ldrs/react/Quantum.css";
import { Quantum } from "ldrs/react";

export default function Loader() {
	return (
		<div className="loader">
			<Quantum size="150" speed="0.6" color="black" />
		</div>
	);
}
