export interface Contact {
	name: string;
	tel: string;
	email: string;
	photo: string;
}

export interface ContactState extends Contact{
	id: string;
}
