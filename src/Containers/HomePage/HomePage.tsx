import React from 'react';
import {useAppSelector} from "../../hooks";
import {selectContacts} from "../../store/ContactsSlice";
import Contact from "../../Components/Contact/Contact";
import Spinner from "../../Components/Spinner/Spinner";

const HomePage = () => {
    const Contacts = useAppSelector(selectContacts);

    return (
        <div className='container'>
            {Contacts.loading ? <Spinner/> : (Contacts.contacts.map(item => <Contact key={Math.random()}
                                                                                     contacts={item}/>))}
        </div>
    );
};

export default HomePage;