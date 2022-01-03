import * as React from 'react';
import { Link } from 'gatsby';
import LayoutStyles from './layoutStyles';

const Layout = ({ pageTitle, children }) => {
	return (
		<LayoutStyles>
			<div className='container'>
				<title>{pageTitle}</title>
				<nav>
					<ul className='nav-links'>
						<li className='nav-link-item'>
							<Link to='/'>Home</Link>
						</li>
						<li className='nav-link-item'>
							<Link to='/about'>About</Link>
						</li>
					</ul>
				</nav>
				<main>
					<h1 className='heading'>{pageTitle}</h1>
					{children}
				</main>
			</div>
		</LayoutStyles>
	);
};

export default Layout;
