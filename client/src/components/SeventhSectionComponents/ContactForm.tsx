import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import Box from "@mui/material/Box"
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CreateIcon from '@mui/icons-material/Create';
import contactFormSchema from '../../validations/contactFormSchema';
import styled from '@mui/material/styles/styled';

const StyledTextField = styled(TextField)`
	input, textarea, label.Mui-error, label.Mui-focused ,label.Mui-error span {
		color: ${(({theme}) => theme.palette.text.secondary)};
	}

	p.Mui-error {
		color: ${(({theme}) => theme.palette.text.muted.light)};
	}
`

interface FormData {
	name: string,
	email: string,
	subject: string,
	message: string
}

function ContactForm() {
	const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm<FormData>({
		mode: 'onBlur',
		resolver: yupResolver(contactFormSchema),
		defaultValues: {
			name: '',
			email: '',
			subject: '',
			message: ''
		}
	});

	const onFormSubmit = (data: FormData, e: React.BaseSyntheticEvent<object, any, any> | undefined) => {
		e?.preventDefault()

		const {name, email, subject, message } = data;

		// Need to handle form
	}

	return (
		<Box>
			<form onSubmit={handleSubmit(onFormSubmit)}>
				<Stack direction='column' spacing={3}>
					<Stack direction='row' justifyContent='space-between' alignItems='center'>
						<PersonIcon fontSize='large' sx={{ color: 'custom.grey.darker', marginRight: '15px', marginTop: '10px' }} />
						<StyledTextField
							autoComplete='off'
							fullWidth
							required
							{...register('name')}
							variant='standard'
							label="Your name"
							error={errors.name ? true : false}
							helperText={errors.name ? errors.name.message : ''}
						/>
					</Stack>

					<Stack direction='row' justifyContent='space-between' alignItems='center'>
						<MailIcon fontSize='large' sx={{ color: 'custom.grey.darker', marginRight: '15px', marginTop: '10px' }} />
						<StyledTextField
						autoComplete='off'
							fullWidth
							required
							{...register('email')}
							variant='standard'
							label="Your email address"
							error={errors.email ? true : false}
							helperText={errors.email ? errors.email.message : ''}
						/>
					</Stack>

					<Stack direction='row' justifyContent='space-between' alignItems='center'>
						<LocalOfferIcon fontSize='large' sx={{ color: 'custom.grey.darker', marginRight: '15px', marginTop: '10px' }} />
						<StyledTextField
							autoComplete='off'
							fullWidth
							required
							{...register('subject')}
							variant='standard'
							label="Subject"
							error={errors.subject ? true : false}
							helperText={errors.subject ? errors.subject.message : ''}
						/>
					</Stack>

					<Stack direction='row' justifyContent='space-between' alignItems='start'>
						<CreateIcon fontSize='large' sx={{ color: 'custom.grey.darker', marginRight: '15px', marginTop: '12px' }} />
						<StyledTextField
							autoComplete='off'
							multiline
							rows={6}
							fullWidth
							required
							{...register('message')}
							variant='standard'
							label="Your message"
							error={errors.message ? true : false}
							helperText={errors.message ? errors.message.message : ''}

						/>
					</Stack>

					<Stack direction='row' justifyContent='center'>
						<Button
							type='submit'
							size='large'
							sx={{ backgroundColor: 'custom.blue.main', boxShadow: 7 }}
							variant='contained'
							endIcon={<SendIcon />}
							disabled={!(isDirty && isValid)}
						>
							Send
						</Button>
					</Stack>
				</Stack>
			</form>
		</Box>
	)
}

export default ContactForm