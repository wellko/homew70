import React, {useEffect, useState} from 'react';
import {ContactState} from "../../types";
import {editContact, newContact} from "../../store/ContactsThunks";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useNavigate, useParams} from "react-router-dom";
import {selectContacts} from "../../store/ContactsSlice";
import Spinner from "../Spinner/Spinner";

const UserForm = () => {
    const {id} = useParams() as { id: string };

    const navigate = useNavigate();

    const contactState = useAppSelector(selectContacts);

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
            setContact(contactState.modalActive);
        }
    }, [id])


    const ChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setContact(prev => ({...prev, [name]: value}));
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (id) {
            await dispatch(editContact(contact));
        } else {
            await dispatch(newContact(contact));
        }
        navigate('/');
    };


    return (
        <div className='container bg-light'>
            <div className='m-auto w-50 border border-2 rounded bg-white'>
                <form onSubmit={onSubmit}>
                    <h1 className='text-center'>{id ? 'Edit contact' : 'Add new contact'}</h1>
                    <div className='d-flex flex-column fs-3'>
                        <label htmlFor='name'>Enter name</label>
                        <input className='w-75' onChange={ChangeEvent} value={contact.name} name='name' id='name'
                               type='text' required/>
                        <label htmlFor='tel'>telephone number (format : 0550-555-555)</label>
                        <input className='w-75' onChange={ChangeEvent} value={contact.tel} name='tel' id='tel'
                               type='tel' placeholder='0550-555-555'
                               pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}" required/>
                        <label htmlFor='email'>Enter E-mail</label>
                        <input className='w-75' onChange={ChangeEvent} value={contact.email} name='email' id='email'
                               type='email'/>
                        <label htmlFor='photo'>Enter url for image</label>
                        <input className='w-75' onChange={ChangeEvent} value={contact.photo} name='photo' id='photo'
                               type='url'/>
                        {contact.photo.length > 0 ? <img className='w-25 img-fluid' src={contact.photo} alt='Photo'/> :
                            <img className='w-25 img-fluid'
                                 src='https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
                                 alt='Photo'/>}
                        <div className='ms-auto'>
                            <button disabled={contactState.action} className='btn btn-dark me-4' type='submit'>
                                {contactState.action ? <Spinner/> : (id ? 'Edit' : 'Add')}
                            </button>
                            <button disabled={contactState.action} className='btn btn-dark' type='button'
                                    onClick={() => navigate('/')}> Back to contacts
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserForm;