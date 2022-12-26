import React, {useEffect} from 'react';
import {useAppDispatch} from "./hooks";
import {fetchContacts} from "./store/ContactsThunks";
import UserForm from "./Components/UserForm/UserForm";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  },
      [fetchContacts]);


  return (
    <div className="App">
      <UserForm/>
    </div>
  );
}

export default App;
