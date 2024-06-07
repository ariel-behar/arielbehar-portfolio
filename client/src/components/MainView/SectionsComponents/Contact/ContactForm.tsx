import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import IFormData from '../../../../model/FormData';
import contactFormSchema from '../../../../validations/contactFormSchema';
import * as formService from '../../../../services/formService'
import styled from '@mui/material/styles/styled';

import Box from "@mui/material/Box"
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CreateIcon from '@mui/icons-material/Create';
import { useState } from 'react';
import Typography from '@mui/material/Typography';


const StyledTextField = styled(TextField)`
	input, textarea, label.Mui-error, label.Mui-focused ,label.Mui-error span {
		color: ${(({theme}) => theme.palette.text.secondary)};
	}

	p.Mui-error {
		color: ${(({theme}) => theme.palette.text.muted.light)};
	}
`
interface Props {
	formSubmitSuccessHandler: (bool: boolean) => void
}

function ContactForm({formSubmitSuccessHandler}:Props ) {
	const [errorDuringProcessing, setErrorDuringProcessing ] = useState<boolean>(false)
	const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm<IFormData>({
		mode: 'onBlur',
		resolver: yupResolver(contactFormSchema),
		defaultValues: {
			name: '',
			email: '',
			subject: '',
			message: ''
		}
	});

	const onFormSubmit = async (data: IFormData, e: React.BaseSyntheticEvent<object, any, any> | undefined) => {
		e?.preventDefault()

		const {name, email, subject, message } = data;

		try {
			let formSubmissionResponse = await formService.submit({name, email, subject, message})
			let formSubmissionData = await formSubmissionResponse.json();

			if(formSubmissionData.success) {
				formSubmitSuccessHandler(true)
				setErrorDuringProcessing(false)
			} else {
				setErrorDuringProcessing(true)
			}
		} catch(err: any) {
			setErrorDuringProcessing(true)
		}
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

					{ errorDuringProcessing && <Typography variant='body1' component='p' color='error.light' textAlign='center' style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '20px'}}>An error occurred while attempting to process your message.</Typography>}

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