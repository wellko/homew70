import {createAsyncThunk} from "@reduxjs/toolkit";
import AxiosApi from "../axios-api";
import {Contact} from "../types";

export  const fetchContacts = createAsyncThunk(
	'contacts/fetchAll',
	async() =>{
		const MovieResponse = await AxiosApi.get('contacts.json');
		return MovieResponse.data
	}
)

export const newContact = createAsyncThunk<void, Contact>(
	'contacts/addNew',
	async (arg) => {
		await  AxiosApi.post('contacts.json', arg)
	}
)