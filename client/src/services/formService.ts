import FormData from "../model/FormData"

const baseUrl = 'http://localhost:3030/api'
// const baseUrl = 'https://arielbehar.herokuapp.com/api'
// const baseUrl = 'http://www.arielbehar.com/api'

export const submit = (formData: FormData) => fetch(`${baseUrl}/form`, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(formData)
})