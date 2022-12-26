import React from 'react';
import {CloseModal, selectContacts} from "../../store/ContactsSlice";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useNavigate} from "react-router-dom";

const Modal = () => {
	const dispatch = useAppDispatch();

	const contact = useAppSelector(selectContacts);

	const navigate = useNavigate();

	const ModalClose = () => {
		dispatch(CloseModal());
	}

	const Edit = () => {
		dispatch(CloseModal());
		navigate('/edit/' + contact.modalActive.id);
	}

	return (
		<>
			<div className='modal-backdrop show'></div>
			<div className="modal fade show position-absolute" tabIndex={-1} style={{display: "block"}} role='dialog'>
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">{contact.modalActive.name}</h5>
						</div>
						<div className="modal-body">
							<p>E Mail : {contact.modalActive.email}</p>
							<p>Tel N : {contact.modalActive.email}</p>
							{contact.modalActive.photo.length > 0? 	<img className='w-25 img-fluid' src={contact.modalActive.photo} alt='Photo'/>:
								<img className='w-25 img-fluid' src='https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg' alt='Photo'/>
							}
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" onClick={ModalClose}>Close</button>
							<button type="button" className="btn btn-outline-dark" onClick={Edit}>Edit</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;