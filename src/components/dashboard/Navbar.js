import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import { UserContext } from '../../context/User/UserContext'
import { toast } from 'react-toastify';


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
	},
}));

export default function ButtonAppBar() {
	const classes = useStyles();
	const { selectedUser, setLogout } = useContext(UserContext)

	const logout = async () => {
		await setLogout()
		toast.success('Sesion cerrada con exito')
	}

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<EmojiEventsIcon sx={{ mr: 2 }} />
					<Typography variant="h6" className={classes.title}>
						Olympic
					</Typography>
					<Typography variant="subtitle1">
						{selectedUser.name}, {selectedUser.role} |
					</Typography>
					<Button onClick={logout} color="inherit">Logout</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
