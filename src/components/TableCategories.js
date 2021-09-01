import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { Button, Card, CardActions, CardContent, Grid, Typography, CardActionArea, ButtonBase } from '@material-ui/core';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';



const columns = [
	{ id: 'athlete', label: 'Atleta' },
	{ id: 'age', label: 'Edad' },
	{ id: 'country', label: 'País' },
	{ id: 'year', label: 'Año' },
	{ id: 'date', label: 'Fecha' },
	{ id: 'sport', label: 'Deporte' },
	{ id: 'gold', label: 'Oro' },
	{ id: 'silver', label: 'Plata' },
	{ id: 'bronze', label: 'Bronce' },
	{ id: 'total', label: 'Total' },

];

const useStyles = makeStyles({
	root: {
		width: '100%',
	},
	container: {
		maxHeight: 440,
	},
});

export default function TableCategories() {
	const classes = useStyles();
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const [rows, setRows] = React.useState([]);

	useEffect(async () => {
		const result = await axios.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json')
		setRows(result.data)
	}, [])

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Grid container spacing={3}>
			<Grid item xs>
				<Card className={classes.root} variant="outlined">
					<CardActionArea>
						<CardContent>
							<Grid container spacing={0}>
								<Grid item xs>
									<EmojiEventsIcon style={{ fontSize: 140, color: 'yellow' }} />
								</Grid>
								<Grid item xs>
									<Grid item>
										<Typography variant="h2" component="h2">
											Oro
										</Typography>
										<Typography variant="h6" component="h2">
											{Object.values(rows).reduce((t, { gold }) => t + gold, 0)}
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</CardContent>
					</CardActionArea>
				</Card>
			</Grid>
			<Grid item xs>
				<Card className={classes.root} variant="outlined">
					<CardActionArea>
						<CardContent>
							<Grid container spacing={0}>
								<Grid item xs>
									<EmojiEventsIcon style={{ fontSize: 140, color: 'gray' }} />
								</Grid>
								<Grid item xs>
									<Grid item>
										<Typography variant="h2" component="h2">
											Plata
										</Typography>
										<Typography variant="h6" component="h2">
											{Object.values(rows).reduce((t, { silver }) => t + silver, 0)}
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</CardContent>
					</CardActionArea>
				</Card>
			</Grid>
			<Grid item xs>
				<Card className={classes.root} variant="outlined">
					<CardActionArea>
						<CardContent>
							<Grid container spacing={0}>
								<Grid item xs>
									<EmojiEventsIcon style={{ fontSize: 140, color: 'brown' }} />
								</Grid>
								<Grid item xs>
									<Grid item>
										<Typography variant="h2" component="h2">
											Bronce
										</Typography>
										<Typography variant="h6" component="h2">
											{Object.values(rows).reduce((t, { bronze }) => t + bronze, 0)}
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</CardContent>
					</CardActionArea>
				</Card>
			</Grid>

		</Grid >
	);
}
