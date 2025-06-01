import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

export const addOneContact = async () => {
    try{
        const contacts = await readContacts();
        const newContact = createFakeContact();
        const updatedContacts = [...contacts,newContact];
        await writeContacts(updatedContacts);
        console.log('1 contact to add');
    } catch(error){
        console.error('Failed to add contact', error.message);
    }
};

addOneContact();
