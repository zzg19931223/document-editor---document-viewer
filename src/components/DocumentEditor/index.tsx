// @ts-nocheck
import React, {useEffect, useRef} from "react"
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document"
import "./index.scss"

function DocumentEditor() {
	useEffect(() => {
		DecoupledEditor.create(document.querySelector(".document-editor__editable"), {})
			.then((editor) => {
				const toolbarContainer = document.querySelector(".document-editor__toolbar")

				toolbarContainer.appendChild(editor.ui.view.toolbar.element)
			})
			.catch((err) => {
				console.error(err)
			})
	}, [])
	return (
		<div className="document-editor">
			<div className="document-editor__toolbar"></div>
			<div className="document-editor__editable-container">
				<div className="document-editor__editable">
					<h2
						style={{
							textAlign: "center"
						}}
					>
						The Flavorful Tuscany Meetup
					</h2>
					<h3
						style={{
							textAlign: "center"
						}}
					>
						Welcome letter
					</h3>
					<p>Dear Guest,</p>
					<p>
						We are delighted to welcome you to the annual{" "}
						<i>Flavorful Tuscany Meetup</i> and hope you will enjoy the programme as
						well as your stay at the <a href="http://ckeditor.com">Bilancino Hotel</a>.
					</p>
					<p>Please find below the full schedule of the event.</p>
					<figure className="table">
						<table>
							<thead>
								<tr>
									<th colSpan="2">Saturday, July 14</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>9:30 AM - 11:30 AM</td>
									<td>
										<p>
											<strong>Americano vs. Brewed</strong> - “know your
											coffee” with:&nbsp;
										</p>
										<ul
											style={{
												listStyleType: "circle"
											}}
										>
											<li>Giulia Bianchi</li>
											<li>Stefano Garau</li>
											<li>Giuseppe Russo</li>
										</ul>
									</td>
								</tr>
								<tr>
									<td>1:00 PM - 3:00 PM</td>
									<td>
										<p>
											<strong>Pappardelle al pomodoro</strong> - live cooking
										</p>
										<p>
											Incorporate the freshest ingredients&nbsp;
											<br />
											with Rita Fresco
										</p>
									</td>
								</tr>
								<tr>
									<td>5:00 PM - 8:00 PM</td>
									<td>
										<strong>Tuscan vineyards at a glance</strong> -
										wine-tasting&nbsp;
										<br />
										with Frederico Riscoli
									</td>
								</tr>
							</tbody>
						</table>
					</figure>
					<blockquote>
						<p>
							The annual Flavorful Tuscany meetups are always a culinary discovery.
							You get the best of Tuscan flavors during an intense one-day stay at one
							of the top hotels of the region. All the sessions are lead by top chefs
							passionate about their profession. I would certainly recommend to save
							the date in your calendar for this one!
						</p>
						<p>Angelina Calvino, food journalist</p>
					</blockquote>
					<p>
						Please arrive at the <a href="http://ckeditor.com">Bilancino Hotel</a>{" "}
						reception desk{" "}
						<span
							style={{
								backgroundColor: "hsl(60,75%,60%)"
							}}
						>
							at least half an hour earlier
						</span>{" "}
						to make sure that the registration process goes as smoothly as possible.
					</p>
					<p>We look forward to welcoming you to the event.</p>
					<p>
						<strong>Victoria Valc</strong>
					</p>
					<p>
						<strong>Event Manager</strong>
					</p>
					<p>
						<strong>Bilancino Hotel</strong>
					</p>
				</div>
			</div>
		</div>
	)
}

export default DocumentEditor
