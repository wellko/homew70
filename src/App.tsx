import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./hooks";
import {fetchContacts} from "./store/ContactsThunks";
import UserForm from "./Components/UserForm/UserForm";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Containers/HomePage/HomePage";
import {selectContacts} from "./store/ContactsSlice";
import Modal from "./Components/Modal/Modal";

function App() {
	const dispatch = useAppDispatch();

	const state = useAppSelector(selectContacts);

	useEffect(() => {
			dispatch(fetchContacts())
		},
		[fetchContacts]);


	return (
		<div className="App">
			{state.modal ? <Modal/> : <> </>}
			<UserForm/>
			<Routes>
				<Route path='/' element={<HomePage/>}/>
				<Route path='/add' element={<UserForm/>}/>
				<Route path='/edit/:id' element={<UserForm/>}/>
			</Routes>
		</div>
	);
}

export default App;
