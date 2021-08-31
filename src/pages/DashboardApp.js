// material
import { Box, Grid, Container, Typography } from '@material-ui/core';
import { useContext } from 'react';
// components
import Page from '../components/Page';
import { UserContext } from '../context/User/UserContext';
// import Categories from '../components/Categories'
// ----------------------------------------------------------------------

export default function DashboardApp() {
	const { selectedUser } = useContext(UserContext);

	return (
		<Page title="Dashboard">
			<Container maxWidth="xl">
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6} md={3}>
						{/* <Typography variant="h4">Hi {selectedUser.name}, Welcome back</Typography> */}
						{/* <Categories/> */}
					</Grid>
				</Grid>
			</Container>
		</Page>
	);
}
