import { lazy } from 'react';

const ContactsPageAsync = lazy(() => {
	return new Promise((resolve) => {
		setTimeout(() => {

			//@ts-ignore
			resolve(import('./Contacts'))
		}, 3000)
	})
})


export default ContactsPageAsync;

