import React from 'react';
import {ContactState} from "../../types";
import {OpenModal} from "../../store/ContactsSlice";
import {useAppDispatch} from "../../hooks";

interface ContactProps {
	contacts: ContactState
}

const Contact: React.FC<ContactProps> = ({contacts}) => {
	const dispatch = useAppDispatch();

	const onClick = () => {
		 dispatch(OpenModal(contacts.id));
	}

	return (
		<div className='d-flex w-50 p-3 mb-3 border border-dark rounded' onClick={onClick}>
			{contacts.photo.length > 0? 	<img className='w-25 img-fluid' src={contacts.photo} alt='Photo'/>:
				<img className='w-25 img-fluid' src='https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg' alt='Photo'/>
			}
			<h3 className='m-auto'>{contacts.name}</h3>
		</div>
	);
};

export default Contact;