import React from 'react'
import { Router } from '@reach/router'

import Home from '../Home'
import Favourites from '../Favourites'
import Login from '../Login'
import NotFound from '../../components/NotFound/NotFound'

const Routes = () => {
	return (
		<Router>
			<Home path="/" />
			<Favourites path="favourites" />
			<Login path="login" />
			<NotFound default />
		</Router>
	)
}

export default Routes
