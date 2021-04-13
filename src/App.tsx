import React, {Suspense, useEffect, useState} from "react"
import {atom, useRecoilState} from "recoil"
import Layout from "./components/Layout"
import Edite from "./pages/Edite"
import ListPage from "./pages/List"
import DashBoard from "./pages/Dashboard"
import View from "./pages/View"
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom"
import {isDrawerOpenAtom} from "./state/global"

import "./App.scss"

function App() {
	var [isDrawerOpen, setIsDrawerOpen] = useRecoilState(isDrawerOpenAtom)
	var history = useHistory()

	useEffect(() => {
		history.listen(() => {
			setIsDrawerOpen(false)
		})
	}, [])

	return (
		<Layout>
			<Switch>
				<Route path="/" exact component={Edite}></Route>
				<Route path="/list" component={ListPage}></Route>
				<Route path="/view" component={View}></Route>
				<Route path="/dashboard" component={DashBoard}></Route>
			</Switch>
		</Layout>
	)
}

export default App
