import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Stack, Container, Typography, CardContent, Card } from '@material-ui/core';
// components
import Page from '../components/Page';
import LoginForm from '../components/authentication/LoginForm';
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
	padding: theme.spacing(7, 0)
}));

// ----------------------------------------------------------------------

export default function Login() {
	return (
		<RootStyle title="Login">
			<Container maxWidth="sm">
				<ContentStyle>
					<Card variant="outlined">
						<CardContent sx={{ mb: 5, px: 5 }}>
							<Stack sx={{ mb: 5 }}>
								<Stack sx={{ alignItems: 'center', mt: 2 }}>
									<Typography variant="h4" sx={{ mt: 2 }} gutterBottom>
										Bienvenido
									</Typography>
									<Typography sx={{ color: 'text.secondary' }}>Ingrese sus credenciales</Typography>
								</Stack>
							</Stack>
							<LoginForm />
						</CardContent>
					</Card>
				</ContentStyle>
			</Container>
		</RootStyle>
	);
}
