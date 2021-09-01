import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Box, Card, CardContent } from '@material-ui/core';
import TableGeneral from './TableGeneral'
import TableCategories from './TableCategories'

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					{children}

				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}



export default function SimpleTabs() {
	const [value, setValue] = React.useState(1);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div>
			<AppBar position="static" elevation={0} color="inherit" variant="outlined">
				<Tabs indicatorColor="primary" textColor="primary"
					variant="fullWidth"
					value={value} onChange={handleChange} aria-label="simple tabs example">
					<Tab label="General" {...a11yProps(0)} />
					<Tab label="Categorias" {...a11yProps(1)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<TableGeneral />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<TableCategories />
			</TabPanel>
		</div>
	);
}
