import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "./store";
import {fetchContacts} from "./ContactsThunks";
import {ContactState} from "../types";

interface State {
	contacts: ContactState[];
	loading: boolean;
	modal: boolean;
	modalActive: ContactState;
}

const initialState: State = {
	contacts: [],
	loading: false,
	modal: false,
	modalActive:{
		name: '',
		photo: '',
		id: '',
		tel: '',
		email:'',
	}
}

const ContactsSlice = createSlice({
		name: 'contacts',
		initialState,
		reducers: {
			OpenModal: (state, {payload: contact}) => {
				const find = state.contacts.findIndex(item => {
					return item.id === contact
				});
				state.modalActive = state.contacts[find];
				state.modal = true;
			},
			CloseModal: (state) => {
				state.modal = false;
			}
		},
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
export const {OpenModal, CloseModal} = ContactsSlice.actions;