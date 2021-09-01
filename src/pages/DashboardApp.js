// material
import { Box, Grid, Container, Typography } from '@material-ui/core';
import { useContext } from 'react';
// components
import Page from '../components/Page';
import { UserContext } from '../context/User/UserContext';
import TabPanelAdmin from '../components/TabPanelAdmin'
// ----------------------------------------------------------------------

export default function DashboardApp() {
	const { selectedUser } = useContext(UserContext);

	return (
		<Page title="Dashboard">
			<Container maxWidth="xl">
				<Grid container spacing={3} >
					<Grid item xs={12} sm={6} md={12} alignItems="center">
						<TabPanelAdmin />
					</Grid>
				</Grid>
			</Container>
		</Page>
	);
}
