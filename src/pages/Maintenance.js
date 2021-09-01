import { Link, Link as RouterLink } from 'react-router-dom';
// material
import WarningSharpIcon from '@material-ui/icons/WarningSharp'; 
import { Stack, Typography } from '@material-ui/core';
// components
import Page from '../components/Page';
// ----------------------------------------------------------------------

export default function Maintenance() {
	return (
		<Stack sx={{ mb: 5, mt: 5 }}>
			<Stack sx={{ alignItems: 'center' }}>
				<Typography variant="h1" >
					<WarningSharpIcon style={{ fontSize: 250, color: 'yellow' }} />
				</Typography>
				<Typography variant="h3" gutterBottom>
					Página en mantenimiento
				</Typography>
			</Stack>
		</Stack>
	);
}
