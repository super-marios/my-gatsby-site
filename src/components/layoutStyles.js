import styled from 'styled-components';

const LayoutStyles = styled.div`
	.container {
		margin: auto;
		max-width: 500px;
		font-family: sans-serif;
	}

	.heading {
		color: rebeccapurple;
	}
	.nav-links {
		display: flex;
		list-style: none;
		padding-left: 0;
	}
	.nav-link-item {
		padding-right: 2rem;
	}
	.nav-link-text {
		color: black;
	}

	.site-title {
		font-size: 3rem;
		color: gray;
		font-weight: 700;
		margin: 3rem 0;
	}
`;

export default LayoutStyles;
