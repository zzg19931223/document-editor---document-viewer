import {Fab, Paper} from "@material-ui/core"
import {makeStyles} from "@material-ui/styles"
import {Edit} from "@material-ui/icons"
import React, {useEffect} from "react"
import DocumentEditor from "../components/DocumentEditor"
import {useSetRecoilState} from "recoil"
import {currentPage} from "../state/global"

function Edite() {
	var classes = useStyles()
	var setCurrentPage = useSetRecoilState(currentPage)

	useEffect(() => {
		setCurrentPage("Document Editor")
	}, [])

	return (
		<Paper
			classes={{
				root: classes.paper
			}}
		>
			<DocumentEditor />
			<Fab
				classes={{
					root: classes.edit
				}}
				color="secondary"
			>
				<Edit
					style={{
						color: "white"
					}}
				/>
			</Fab>
		</Paper>
	)
}

var useStyles = makeStyles({
	paper: {
		width: 800,
		margin: "0px auto"
	},
	edit: {
		position: "fixed",
		right: 50,
		bottom: 50
	}
})
export default Edite
