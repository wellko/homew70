import {createAsyncThunk} from "@reduxjs/toolkit";
import AxiosApi from "../axios-api";
import {Contact, ContactState} from "../types";

export  const fetchContacts = createAsyncThunk<ContactState[]>(
	'contacts/fetchAll',
	async() =>{
		const MovieResponse = await AxiosApi.get('contacts.json');
		return Object.keys(MovieResponse.data).map(key => {
			return {...MovieResponse.data[key], id: key}
		})
	}
)

export const newContact = createAsyncThunk<void, Contact>(
	'contacts/addNew',
	async (arg) => {
		await  AxiosApi.post('contacts.json', arg)
	}
)

export const editContact = createAsyncThunk<void, ContactState>(
	'contacts/edit',
	async (arg) => {
		await  AxiosApi.put('contacts/' + arg.id + '.json', arg)
	}
)

export const deleteContact = createAsyncThunk<void, string>(
	'contacts/delete',
	async (id) =>{
		await AxiosApi.delete('contacts/' + id + '.json')
	}
)