import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navBar.css';

function NavBar() {
	return (
		<nav>
			<NavLink to={'/about_us'}>ABOUT US</NavLink>
			<NavLink to="/programs">OUR PROGRAMS</NavLink>
			<NavLink to={'/instructors'}>OUR INSTRUCTORS</NavLink>
			<Link to={'/'}>
				<img className="navImg" src="./img/logo.png" alt="Company logo" />
			</Link>
			<NavLink to={'/merch'}>MERCHANDISE</NavLink>
			<NavLink to={'/faq'}>FAQ</NavLink>
			<NavLink to={'/contact_us'}>CONTACT US</NavLink>
		</nav>
	);
}

export default NavBar;
