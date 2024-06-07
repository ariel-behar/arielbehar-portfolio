import IFormData from "../model/FormData"

import { baseUrl } from "../lib/base-url"

export const submit = (formData: IFormData) => fetch(`${baseUrl}/form`, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(formData)
})