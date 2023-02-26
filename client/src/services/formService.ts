import FormData from "../model/FormData"

const baseUrl = 'https://arielbehar.herokuapp.com/api'

export const submit = (formData: FormData) => fetch(`${baseUrl}/form`, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(formData)
})