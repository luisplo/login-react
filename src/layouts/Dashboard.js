import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
//
import DashboardNavbar from '../components/dashboard/Navbar';
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
	display: 'flex',
	minHeight: '100%',
	overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
	flexGrow: 1,
	overflow: 'auto',
	minHeight: '100%',
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {

	return (
		<RootStyle>
			<MainStyle>
				<Box sx={{ mb: 5 }}>
					<DashboardNavbar />
				</Box>
				<Outlet />
			</MainStyle>
		</RootStyle>
	);
}
