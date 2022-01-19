import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import LayoutStyles from './layoutStyles';

const Layout = ({ pageTitle, children }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<LayoutStyles>
			<div className='container'>
				<title>
					{pageTitle} | {data.site.siteMetadata.title}
				</title>
				<header className='site-title'>{data.site.siteMetadata.title}</header>
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
