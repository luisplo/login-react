import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Stack, Container, Typography, CardContent, Card } from '@material-ui/core';
// components
import Page from '../components/Page';
import RegisterForm from '../components/authentication/RegisterForm';
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

export default function Login() {
	return (
		<RootStyle title="Register">
			<Container maxWidth="sm">
				<ContentStyle>
					<Card variant="outlined">
						<CardContent sx={{ mb: 5, px: 5 }}>
							<Stack sx={{ mb: 5 }}>
								<Stack sx={{ alignItems: 'center', mt: 2 }}>
									<Typography variant="h4" sx={{ mt: 2 }} gutterBottom>
										Registro
									</Typography>
								</Stack>
							</Stack>
							<RegisterForm />
						</CardContent>
					</Card>
				</ContentStyle>
			</Container>
		</RootStyle>
	);
}
