import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./hooks";
import {fetchContacts} from "./store/ContactsThunks";
import UserForm from "./Components/UserForm/UserForm";
import {Route, Routes, useLocation} from "react-router-dom";
import HomePage from "./Containers/HomePage/HomePage";
import {selectContacts} from "./store/ContactsSlice";
import Modal from "./Components/Modal/Modal";
import NavBar from "./Components/NavBar/NavBar";

function App() {
    const dispatch = useAppDispatch();

    const location = useLocation();

    const state = useAppSelector(selectContacts);

    useEffect(() => {
            dispatch(fetchContacts())
        },
        [fetchContacts, location, state.action]);


    return (
        <div className="App">
            <NavBar/>
            {state.modal ? <Modal/> : <> </>}
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/add' element={<UserForm/>}/>
                <Route path='/edit/:id' element={<UserForm/>}/>
            </Routes>
        </div>
    );
}

export default App;
