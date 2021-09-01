import * as Yup from 'yup';
import { useContext, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { UserContext } from '../../context/User/UserContext';
// material
import {
	Link,
	Stack,
	Checkbox,
	TextField,
	IconButton,
	InputAdornment,
	FormControlLabel
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import { toast } from 'react-toastify'

// ----------------------------------------------------------------------

export default function LoginForm() {
	const { validateUser, users } = useContext(UserContext)

	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);

	const LoginSchema = Yup.object().shape({
		email: Yup.string().email('El correo electrónico debe ser una dirección válida').required('El correo electrónico es requerido'),
		password: Yup.string().required('La contraseña es requerida')
	});

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			remember: true
		},
		validationSchema: LoginSchema,
		onSubmit: async (values) => {
			if (users.length > 0) {
				const result = await validateUser(values);
				if (result) {
					toast.success(`Bienvenido. ${result.name}`)
					await navigate('/dashboard', { replace: true });
				} else {
					toast.error("Credenciales invalidas")
				}
			} else {
				toast.error("Usuario no registrado")
			}
		}
	});

	const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

	const handleShowPassword = () => {
		setShowPassword((show) => !show);
	};

	return (
		<FormikProvider value={formik}>
			<Form autoComplete="off" noValidate onSubmit={handleSubmit}>
				<Stack spacing={3}>
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
				</Stack>

				<Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
					<FormControlLabel
						title="Esta opcion aun no esta en funcionamiento"
						disabled
						control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
						label="Recordar Sesión"
					/>
					<Link component={RouterLink} variant="subtitle2" to="/register">
						Regístrate
					</Link>
				</Stack>

				<LoadingButton
					fullWidth
					size="large"
					type="submit"
					variant="contained"
					loading={isSubmitting}
				>
					Iniciar Sesión
				</LoadingButton>
			</Form>
		</FormikProvider>
	);
}
