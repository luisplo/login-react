import { Link, Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Stack, Container, Typography } from '@material-ui/core';
// components
import Page from '../components/Page';
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
	[theme.breakpoints.up('md')]: {
		display: 'flex'
	}
}));

const ContentStyle = styled('div')(({ theme }) => ({
	maxWidth: 480,
	margin: 'auto',
	display: 'flex',
	minHeight: '100vh',
	flexDirection: 'column',
	justifyContent: 'center',
	padding: theme.spacing(0, 0)
}));

// ----------------------------------------------------------------------

export default function Page404() {
	return (
		<RootStyle title="404">
			<Container maxWidth="sm">
				<ContentStyle>
					<Stack sx={{ mb: 5 }}>
						<Stack sx={{ alignItems: 'center' }}>
							<Typography variant="h1" gutterBottom>
								404
							</Typography>
							<Typography variant="h4" gutterBottom>
								Pagina no encontrada
							</Typography>
							<Typography sx={{ color: 'text.secondary' }}>Vuelva a iniciar sesión &rarr; <Link component={RouterLink} variant="subtitle2" to="/login">
								Login
							</Link></Typography>
						</Stack>
					</Stack>
				</ContentStyle>
			</Container>
		</RootStyle>
	);
}
