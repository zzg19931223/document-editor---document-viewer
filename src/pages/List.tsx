import React, {useEffect} from "react"
import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	createStyles,
	Grid,
	makeStyles,
	Paper,
	Theme,
	Typography
} from "@material-ui/core"
import {useHistory} from "react-router-dom"
import {useSetRecoilState} from "recoil"
import {currentPage} from "../state/global"

function List() {
	const classes = useStyles()
	var history = useHistory()
	var setCurrentPage = useSetRecoilState(currentPage)

	useEffect(() => {
		setCurrentPage("Document List")
	}, [])

	return (
		<Box>
			<Grid container spacing={3}>
				<Grid item xs={6} lg={3}>
					<Card onClick={() => history.push("/view")} className={classes.root2}>
						<CardActionArea>
							<CardMedia
								className={classes.media}
								image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
								title="Contemplative Reptile"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Lizard
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								Share
							</Button>
							<Button size="small" color="primary">
								Learn More
							</Button>
						</CardActions>
					</Card>
				</Grid>

				<Grid item xs={6} lg={3}>
					<Card onClick={() => history.push("/view")} className={classes.root2}>
						<CardActionArea>
							<CardMedia
								className={classes.media}
								image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
								title="Contemplative Reptile"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Lizard
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								Share
							</Button>
							<Button size="small" color="primary">
								Learn More
							</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item xs={6} lg={3}>
					<Card onClick={() => history.push("/view")} className={classes.root2}>
						<CardActionArea>
							<CardMedia
								className={classes.media}
								image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
								title="Contemplative Reptile"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Lizard
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								Share
							</Button>
							<Button size="small" color="primary">
								Learn More
							</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item xs={6} lg={3}>
					<Card onClick={() => history.push("/view")} className={classes.root2}>
						<CardActionArea>
							<CardMedia
								className={classes.media}
								image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
								title="Contemplative Reptile"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Lizard
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								Share
							</Button>
							<Button size="small" color="primary">
								Learn More
							</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item xs={6} lg={3}>
					<Card onClick={() => history.push("/view")} className={classes.root2}>
						<CardActionArea>
							<CardMedia
								className={classes.media}
								image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
								title="Contemplative Reptile"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Lizard
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								Share
							</Button>
							<Button size="small" color="primary">
								Learn More
							</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item xs={6} lg={3}>
					<Card onClick={() => history.push("/view")} className={classes.root2}>
						<CardActionArea>
							<CardMedia
								className={classes.media}
								image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
								title="Contemplative Reptile"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Lizard
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								Share
							</Button>
							<Button size="small" color="primary">
								Learn More
							</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item xs={6} lg={3}>
					<Card onClick={() => history.push("/view")} className={classes.root2}>
						<CardActionArea>
							<CardMedia
								className={classes.media}
								image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
								title="Contemplative Reptile"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Lizard
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								Share
							</Button>
							<Button size="small" color="primary">
								Learn More
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</Box>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1
		},
		paper: {
			padding: theme.spacing(2),
			textAlign: "center",
			color: theme.palette.text.secondary
		},
		root2: {
			maxWidth: 345,
			margin: "0 auto"
		},
		media: {
			height: 140
		}
	})
)

export default List
