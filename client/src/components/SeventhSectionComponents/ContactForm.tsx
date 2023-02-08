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

	return (
		<Box>
			<form>
				<Stack direction='column' spacing={3}>
					<Stack direction='row' justifyContent='space-between' alignItems='end'>
						<PersonIcon fontSize='large' sx={{ color: 'custom.grey.darker', marginRight: '15px' }} />
						<TextField
							fullWidth
							required
							{...register('name')}
							variant='standard'
							label="Your name"
							error={errors.name ? true : false}
							helperText={errors.name ? errors.name.message : ''}
						/>
					</Stack>

					<Stack direction='row' justifyContent='space-between' alignItems='end'>
						<MailIcon fontSize='large' sx={{ color: 'custom.grey.darker', marginRight: '15px' }} />
						<TextField
							fullWidth
							required
							{...register('email')}
							variant='standard'
							label="Your email address"
							error={errors.email ? true : false}
							helperText={errors.email ? errors.email.message : ''}
						/>
					</Stack>

					<Stack direction='row' justifyContent='space-between' alignItems='end'>
						<LocalOfferIcon fontSize='large' sx={{ color: 'custom.grey.darker', marginRight: '15px' }} />
						<TextField
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
						<TextField
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
							sx={{ backgroundColor: 'custom.blue.main' }}
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