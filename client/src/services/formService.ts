import FormData from "../model/FormData"

const baseUrl = 'http://localhost:3030/api'

export const submit = (formData: FormData) => fetch(`${baseUrl}/form`, {
    method: 'POST',
    body: JSON.stringify(formData)
})