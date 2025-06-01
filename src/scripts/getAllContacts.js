import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    try{
        const contacts = await readContacts();
        return contacts;
    } catch(error){
        console.error('Failed to read contacs', error.message);
    }
};

console.log(await getAllContacts());
