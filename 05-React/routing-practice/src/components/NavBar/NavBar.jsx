import React from 'react'
import Favourites from '../../containers/Favourites'
import styles from './NavBar.modules.scss'

import { Link } from '@reach/router'

const NavBar = () => {
	return (
		<>
			<Link to="/">
				<p>Home</p>
			</Link>

			<Link to="login">
				<p>Login</p>
			</Link>

			<Link to="favourites">
				<p>Favourites</p>
			</Link>
		</>
	)
}

export default NavBar
