import { Outlet, Link  } from "react-router-dom";

export default function Root() {
	return (
		<>
			<header>
				<nav>
					<ul>
						<li>
							<Link  to={`/`}>Main</Link>
						</li>
						<li>
							<Link  to={`/about`}>About</Link>
						</li>
						<li>
							<Link  to={`/contacts`}>Contacts</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
}