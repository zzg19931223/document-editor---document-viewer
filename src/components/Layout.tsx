import React, {Suspense, useState} from "react"
import {FormattedMessage, IntlProvider} from "react-intl"
import {atom, useRecoilState} from "recoil"
import MenuIcon from "@material-ui/icons/Menu"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import {currentPage as currentPageAtom} from "../state/global"
import ListItemLink from "./ListItemLink"
import {Brightness4, Language, ExpandMore, Translate, GitHub} from "@material-ui/icons"
import {zhCN} from "@material-ui/core/locale"
import {
	AppBar,
	Box,
	Button,
	Container,
	createMuiTheme,
	Drawer,
	IconButton,
	List,
	makeStyles,
	Menu,
	MenuItem,
	PaletteType,
	ThemeOptions,
	ThemeProvider,
	Toolbar,
	Typography
} from "@material-ui/core"
import {isDrawerOpenAtom, themeAtom} from "../state/global"

function Layout(props: any) {
	var [theme, setTheme] = useRecoilState(themeAtom)
	var [isChinese, setIsChinese] = useState(false)
	var [selectingLanguage, setSelectingLanguage] = useState(false)
	var [anchorEl, setAnchorEl] = useState(null)
	var [currentPage, setCurrentPageAtom] = useRecoilState(currentPageAtom)
	var [isDrawerOpen, setIsDrawerOpen] = useRecoilState(isDrawerOpenAtom)
	var classes = useStyles()
	return (
		<div
			style={{
				background: theme == "light" ? "white" : "rgb(33, 33, 33)"
			}}
			id="app"
		>
			<IntlProvider locale={isChinese ? "zh" : "en"} messages={isChinese ? messages.zh : messages.en}>
				<ThemeProvider
					theme={createMuiTheme(
						{
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
						},
						// @ts-ignore
						isChinese ? zhCN : null
					)}
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
							<Typography variant="h6">{currentPage && <FormattedMessage id={currentPage} />}</Typography>
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
										window.open("https://github.com/zzg19931223/document-editor---document-viewer")
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
									{isChinese ? "中文" : "English"}
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
									<MenuItem
										onClick={() => {
											setIsChinese(true)
											setSelectingLanguage(false)
										}}
									>
										中文
									</MenuItem>
									<MenuItem
										onClick={() => {
											setIsChinese(false)
											setSelectingLanguage(false)
										}}
									>
										English
									</MenuItem>
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
							<ListItemLink to="/list" primary="Dashboard" icon={<InboxIcon />} />
							<ListItemLink to="/dashboard" primary="Dashboard" icon={<InboxIcon />} />
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
						<Suspense fallback={<div>loading...</div>}>{props.children}</Suspense>
					</Container>
				</ThemeProvider>
			</IntlProvider>
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

var messages = {
	en: {
		"Document Editor": "Document Editor",
		"Document List": "Document List"
	},
	zh: {
		"Document Editor": "文档编辑器",
		"Document List": "文档列表"
	}
}

export default Layout
