// material
import { Grid, Container } from '@material-ui/core';
import { useContext } from 'react';
// components
import Page from '../components/Page';
import TabPanelAdmin from '../components/TabPanelAdmin'
import { UserContext } from '../context/User/UserContext';
import Maintenance from './Maintenance';
// ----------------------------------------------------------------------

export default function DashboardApp() {

	const { selectedUser } = useContext(UserContext)

	return (
		<Page title="Dashboard">
			<Container maxWidth="xl">
				<Grid container spacing={3} >
					<Grid item xs={12} sm={6} md={12} alignItems="center">
						{selectedUser.role === 'Administrador' ?
							<TabPanelAdmin />
						: <Maintenance />}
					</Grid>
				</Grid>
			</Container>
		</Page>
	);
}
