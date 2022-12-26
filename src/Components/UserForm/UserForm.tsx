import React, {useEffect, useState} from 'react';
import {ContactState} from "../../types";
import {editContact, newContact} from "../../store/ContactsThunks";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useParams} from "react-router-dom";
import {selectContacts} from "../../store/ContactsSlice";

const UserForm = () => {
	const {id} = useParams() as { id: string };

	const activeContact = useAppSelector(selectContacts).modalActive;

	const dispatch = useAppDispatch();

	const [contact, setContact] = useState<ContactState>({
		name: '',
		tel: '',
		email: '',
		photo: '',
		id: '',
	})

	useEffect(() => {
		if (id) {
			setContact(activeContact);
		}
	}, [id])


	const ChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;
		setContact(prev => ({...prev, [name]: value}));
	};

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (id) {
			dispatch(editContact(contact));
		} else {
			dispatch(newContact(contact));
		}

	}


	return (
		<form onSubmit={onSubmit}>
			<h1>{id ? 'Edit contact' : 'Add new contact'}</h1>

			<input onChange={ChangeEvent} value={contact.name} name='name' type='text' required/>
			<input onChange={ChangeEvent} value={contact.tel} name='tel' type='tel' placeholder='0550-555-555'
				   pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}" required/>
			<input onChange={ChangeEvent} value={contact.email} name='email' type='email'/>
			<input onChange={ChangeEvent} value={contact.photo} name='photo' type='url'/>
			{contact.photo.length > 0 ? <img className='w-25 img-fluid' src={contact.photo} alt='Photo'/> :
				<img className='w-25 img-fluid'
					 src='https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
					 alt='Photo'/>
			}
			<button type='submit'>{id? 'Edit' : 'Add'}</button>
		</form>
	);
};

export default UserForm;