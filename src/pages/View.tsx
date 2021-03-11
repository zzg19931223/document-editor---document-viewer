import React, {useEffect} from "react"
import DocumentViewer from "../components/DocumentViewer"
import {useSetRecoilState} from "recoil"
import {currentPage} from "../state/global"

function View() {
	var setCurrentPage = useSetRecoilState(currentPage)

	useEffect(() => {
		setCurrentPage("Document Viewer")
	}, [])

	return (
		<div>
			<DocumentViewer></DocumentViewer>
		</div>
	)
}

export default View
