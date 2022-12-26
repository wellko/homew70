import React, {useEffect} from 'react';
import {useAppDispatch} from "./hooks";
import {fetchContacts} from "./store/ContactsThunks";
import UserForm from "./Components/UserForm/UserForm";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Containers/HomePage/HomePage";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  },
      [fetchContacts]);


  return (
    <div className="App">
      <UserForm/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
          <Route path='/add' element={<UserForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
