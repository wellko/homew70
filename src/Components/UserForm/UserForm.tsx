import React, {useState} from 'react';
import {Contact} from "../../types";
import {newContact} from "../../store/ContactsThunks";
import {useAppDispatch} from "../../hooks";

const UserForm = () => {
	const dispatch = useAppDispatch();
	const [contact, setContact] = useState<Contact>({
		name: '',
		tel: '',
		email: '',
		photo: ''
	})

	const ChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;
		setContact(prev => ({...prev, [name]: value}));
	};

	const onSubmit = (e: React.FormEvent)=> {
		e.preventDefault();
		dispatch(newContact(contact));
		console.log(contact);
	}



	return (
		<form onSubmit={onSubmit}>
			<input onChange={ChangeEvent} name='name' type='text' required/>
			<input onChange={ChangeEvent} name='tel' type='tel' placeholder='0550-555-555' pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}" required/>
			<input onChange={ChangeEvent} name='email' type='email'/>
			<input onChange={ChangeEvent} name='photo' type='url'/>
			<button type='submit'> Send</button>
		</form>
	);
};

export default UserForm;