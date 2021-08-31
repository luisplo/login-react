import * as Yup from 'yup';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { UserContext } from '../../context/User/UserContext';
// material
import {
	Stack,
	TextField,
	IconButton,
	InputAdornment,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	FormHelperText
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import { toast } from 'react-toastify'

// ----------------------------------------------------------------------

export default function LoginForm() {
	const { setUser } = useContext(UserContext)

	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const [showPasswordConfirmed, setShowPasswordConfirmed] = useState(false);

	const LoginSchema = Yup.object().shape({
		name: Yup.string().required('El nombre es requerido'),
		email: Yup.string().email('El correo electrónico debe ser una dirección válida').required('El correo electrónico es requerido'),
		password: Yup.string().required('La contraseña es requerida'),
		cofirmedPassword: Yup.string()
			.oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden').required('Confirme la contraseña'),
		role: Yup.string().required('El rol es requerido')
	});

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			role: '',
			password: '',
			cofirmedPassword: '',
		},
		validationSchema: LoginSchema,
		onSubmit: async (values) => {
			const result = await setUser(values);
			if (result) {
				toast.success("Usuario registrado con exito")
				await navigate('/login', { replace: true });
			} else {
				toast.error(`Correo: ${values.email}, ya se encuentra registrado`)
			}
		}
	});

	const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

	const handleShowPassword = () => {
		setShowPassword((show) => !show);
	};

	const handleShowPasswordConfirmed = () => {
		setShowPasswordConfirmed((show) => !show);
	};

	return (
		<FormikProvider value={formik}>
			<Form autoComplete="off" noValidate onSubmit={handleSubmit}>
				<Stack spacing={4} sx={{ mb: 5 }}>
					<TextField
						fullWidth
						autoComplete="name"
						type="text"
						label="Nombre Comppleto"
						{...getFieldProps('name')}
						error={Boolean(touched.name && errors.name)}
						helperText={touched.name && errors.name}
					/>
					<TextField
						fullWidth
						autoComplete="username"
						type="email"
						label="Correo Electrónico"
						{...getFieldProps('email')}
						error={Boolean(touched.email && errors.email)}
						helperText={touched.email && errors.email}
					/>

					<TextField
						fullWidth
						autoComplete="current-password"
						type={showPassword ? 'text' : 'password'}
						label="Contraseña"
						{...getFieldProps('password')}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton onClick={handleShowPassword} edge="end">
										<Icon icon={showPassword ? eyeFill : eyeOffFill} />
									</IconButton>
								</InputAdornment>
							)
						}}
						error={Boolean(touched.password && errors.password)}
						helperText={touched.password && errors.password}
					/>
					<TextField
						fullWidth
						autoComplete="confirmed-password"
						type={showPasswordConfirmed ? 'text' : 'password'}
						label="Confirme Contraseña"
						{...getFieldProps('cofirmedPassword')}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton onClick={handleShowPasswordConfirmed} edge="end">
										<Icon icon={showPasswordConfirmed ? eyeFill : eyeOffFill} />
									</IconButton>
								</InputAdornment>
							)
						}}
						error={Boolean(touched.cofirmedPassword && errors.cofirmedPassword)}
						helperText={touched.cofirmedPassword && errors.cofirmedPassword}
					/>
					<FormControl variant="outlined" error={Boolean(touched.role && errors.role)}>
						<InputLabel id="demo-simple-select-outlined-label" >Rol</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							label="Rol"
							{...getFieldProps('role')}
							error={Boolean(touched.role && errors.role)}

						>
							<MenuItem value="">
								<em>Selecione...</em>
							</MenuItem>
							<MenuItem value="Administrador">Administrador</MenuItem>
							<MenuItem value="Coordinador">Coordinador</MenuItem>
						</Select>
						<FormHelperText>{touched.role && errors.role}</FormHelperText>
					</FormControl>
				</Stack>
				<LoadingButton
					fullWidth
					size="large"
					type="submit"
					variant="contained"
					loading={isSubmitting}
				>
					Registar
				</LoadingButton>
			</Form >
		</FormikProvider >
	);
}
