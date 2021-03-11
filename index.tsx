import React, {Suspense} from "react"
import ReactDOM from "react-dom"
import {RecoilRoot} from "recoil"
import {BrowserRouter as Router} from "react-router-dom"
import App from "./src/App"
import {
	makeStyles,
	withStyles,
	ThemeProvider,
	createMuiTheme,
	useTheme
} from "@material-ui/core/styles"
import "./index.scss"

ReactDOM.render(
	<Suspense fallback={<div>loading...</div>}>
		<RecoilRoot>
			<Router>
				<App />
			</Router>
		</RecoilRoot>
	</Suspense>,
	document.querySelector("#root")
)
