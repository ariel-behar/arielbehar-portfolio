import * as yup from 'yup'
import { LATIN_CHARACTERS_REGEX } from '../utils/regex';

export const contactFormSchemaShape = {
    name: yup
        .string()
        .required('Your name is required')
        .matches(LATIN_CHARACTERS_REGEX, 'Only characters from the latin alphabet are allowed')
        .min(2, "First Name should be at least 2 characters long")
        .max(20, "First Name should be at most 20 characters long"),
    email: yup
        .string()
        .required('Your email address is required')
        .email('Email address should be in valid format'),
    subject: yup
        .string()
        .required('Subject is required')
        .min(2, "Subject should be at least 2 characters long")
        .max(40, "Subject should be at most 40 characters long"),
    message: yup
        .string()
        .required('Your message is required')
        .min(10, "Message should be at least 10 characters long")
}

const contactFormSchema = yup.object().shape(contactFormSchemaShape)

export default contactFormSchema;