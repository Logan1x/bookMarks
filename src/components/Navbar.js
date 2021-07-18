import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	function navToggle() {
		document.querySelector(".mobile-nav").classList.toggle("hidden");
	}

	return (
		<nav className="bg-green-100 text-gray-700">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex">
						{/* logo */}
						<div>
							<a href="#" className="flex py-6">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
									/>
								</svg>
								<span className="px-2 font-bold"> BookMaarks </span>
							</a>
						</div>
						{/* primary nav  */}
						<div className="hidden mx-2 md:flex items-center">
							<a href="#" className="px-3">
								Pricing
							</a>
							<a href="#" className="px-3">
								About
							</a>
						</div>
					</div>

					{/* secondary nav */}
					<div className="hidden mx-2 md:flex items-center">
						<a href="#" className="px-3">
							Add Bookmark
						</a>
						<a href="#" className="px-3 py-2 bg-blue-700 text-blue-100 rounded">
							Login
						</a>
					</div>
					{/* mobile button goes here */}
					<div className="md:hidden flex items-center">
						<button className="mobile-nav-btn" onClick={() => navToggle()}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* mobile menu */}
			<div className="mobile-nav hidden md:hidden">
				<Link to="/" className="block py-2 px-4 text-sm">
					<li className="list-none"> Home sweet</li>
				</Link>
				<Link to="/workcontainer" className="block py-2 px-4 text-sm">
					<li className="list-none"> Work Container </li>
				</Link>
				<Link to="#" className="block py-2 px-4 text-sm">
					<li className="list-none"> Login </li>
				</Link>
				<Link to="#" className="block py-2 px-4 text-sm">
					<li className="list-none"> Add Bookmark </li>
				</Link>
			</div>
		</nav>
	);
}
