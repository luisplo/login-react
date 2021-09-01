// material
import { Grid, Container } from '@material-ui/core';
// components
import Page from '../components/Page';
import TabPanelAdmin from '../components/TabPanelAdmin'
// ----------------------------------------------------------------------

export default function DashboardApp() {

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
