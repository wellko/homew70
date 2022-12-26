import React from 'react';
import {useAppSelector} from "../../hooks";
import {selectContacts} from "../../store/ContactsSlice";
import Contact from "../../Components/Contact/Contact";

const HomePage = () => {
	const Contacts = useAppSelector(selectContacts);

	return (
		<div className='container'>
			{Contacts.contacts.map(item => <Contact key={Math.random()} contacts={item}/>)}
		</div>
	);
};

export default HomePage;