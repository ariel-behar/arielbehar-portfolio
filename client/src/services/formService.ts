import FormData from "../model/FormData"

import { baseUrl } from "../lib/base-url"

export const submit = (formData: FormData) => fetch(`${baseUrl}/form`, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(formData)
})