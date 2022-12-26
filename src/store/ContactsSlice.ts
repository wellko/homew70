import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "./store";
import {fetchContacts} from "./ContactsThunks";

const initialState = {
	contacts: {},
	loading: false
}

const ContactsSlice = createSlice({
		name: 'contacts',
		initialState,
		reducers: {},
		extraReducers: (builder) => {
			builder.addCase(fetchContacts.pending, (state) => {
				state.loading = true;
			});
			builder.addCase(fetchContacts.fulfilled, (state, action) => {
				state.loading = false;
				state.contacts = action.payload;
			});
			builder.addCase(fetchContacts.rejected, (state) => {
				state.loading = false;
			});


		}
	}
)

export const contactsReducer = ContactsSlice.reducer;
export const selectContacts = (state: RootState) => state.contacts;