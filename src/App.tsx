import React, {Suspense, useEffect, useState} from "react"
import {atom, useRecoilState} from "recoil"
import {makeStyles, ThemeProvider, createMuiTheme, useTheme} from "@material-ui/core/styles"
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Button,
	Container,
	Drawer,
	Menu,
	MenuItem,
	List,
	ListItem,
	Box,
	PaletteType,
	ThemeOptions
} from "@material-ui/core"
import Edite from "./pages/Edite"
import ListPage from "./pages/List"
import View from "./pages/View"
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom"
import MenuIcon from "@material-ui/icons/Menu"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import {currentPage as currentPageAtom} from "./state/global"
import ListItemLink from "./components/ListItemLink"
import {Brightness4, Language, ExpandMore, Translate, GitHub} from "@material-ui/icons"
import "./App.scss"

function App() {
	var [isDrawerOpen, setIsDrawerOpen] = useRecoilState(isDrawerOpenAtom)
	var [theme, setTheme] = useRecoilState(themeAtom)
	var [selectingLanguage, setSelectingLanguage] = useState(false)
	var [anchorEl, setAnchorEl] = useState(null)
	var [currentPage, setCurrentPageAtom] = useRecoilState(currentPageAtom)
	var classes = useStyles()
	var history = useHistory()

	useEffect(() => {
		history.listen(() => {
			setIsDrawerOpen(false)
		})
	}, [])

	return (
		<div
			style={{
				background: theme == "light" ? "white" : "rgb(33, 33, 33)"
			}}
			id="app"
		>
			<ThemeProvider
				theme={createMuiTheme({
					palette: {
						type: theme,
						primary: {
							light: "#6ec6ff",
							main: "#2196f3",
							dark: "#0069c0"
						},
						secondary: {
							light: "#82f7ff",
							main: "#40c4ff",
							dark: "#0094cc"
						}
					}
				})}
			>
				<AppBar
					style={{
						background: theme == "light" ? "" : "rgb(51, 51, 51)"
					}}
					position="sticky"
				>
					<Toolbar>
						<IconButton
							onClick={() => setIsDrawerOpen(!isDrawerOpen)}
							edge="start"
							color="inherit"
							aria-label="menu"
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6">{currentPage}</Typography>
						<Box
							style={{
								marginLeft: "auto"
							}}
						>
							<IconButton
								classes={{
									root: classes.colorWhite
								}}
								onClick={() =>
									window.open(
										"https://github.com/zzg19931223/document-editor---document-viewer"
									)
								}
							>
								<GitHub></GitHub>
							</IconButton>
							<IconButton
								classes={{
									root: classes.colorWhite
								}}
								onClick={() => {
									setTheme(theme == "light" ? "dark" : "light")
								}}
							>
								<Brightness4></Brightness4>
							</IconButton>
							<Button
								classes={{
									root: classes.colorWhite
								}}
								startIcon={<Translate></Translate>}
								endIcon={<ExpandMore></ExpandMore>}
								onClick={(e) => {
									// @ts-ignore
									setAnchorEl(e.target)
									setSelectingLanguage(true)
								}}
							>
								中文
							</Button>
							<Menu
								anchorEl={anchorEl}
								open={selectingLanguage}
								onClose={() => {
									setSelectingLanguage(false)
									setAnchorEl(null)
								}}
								classes={{
									paper: classes.minWidth100
								}}
							>
								<MenuItem>中文</MenuItem>
								<MenuItem>English</MenuItem>
							</Menu>
						</Box>
					</Toolbar>
				</AppBar>
				<Drawer
					classes={{
						paper: classes.drawer
					}}
					open={isDrawerOpen}
					onClose={() => setIsDrawerOpen(false)}
				>
					<List component="nav" aria-label="main mailbox folders">
						<ListItemLink to="/" primary="文档编辑器" icon={<InboxIcon />} />
						<ListItemLink to="/list" primary="文档列表" icon={<InboxIcon />} />
					</List>
				</Drawer>
				<Container
					maxWidth={false}
					classes={{
						root: classes.container
					}}
					style={{
						background: theme == "light" ? "white" : "rgb(33, 33, 33)"
					}}
				>
					<Suspense fallback={<div>loading...</div>}>
						<Switch>
							<Route path="/" exact component={Edite}></Route>
							<Route path="/list" component={ListPage}></Route>
							<Route path="/view" component={View}></Route>
						</Switch>
					</Suspense>
				</Container>
			</ThemeProvider>
		</div>
	)
}

var useStyles = makeStyles((theme: ThemeOptions) => {
	return {
		drawer: {
			width: 240
		},
		container: {
			padding: 20,
			minHeight: "calc(100% - 64px)"
		},
		colorWhite: {
			color: "white"
		},
		minWidth100: {
			minWidth: 100
		}
	}
})

var isDrawerOpenAtom = atom<boolean>({
	key: "isDrawerOpenAtom",
	default: false
})

var themeAtom = atom<PaletteType>({
	key: "themeAtom",
	default: "light"
})

export default App
