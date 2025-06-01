import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    try{
        const contacts = await readContacts();
        if(contacts.length === 0){
            console.log('You dont have contacts');
            return;
        }
        contacts.pop();
        await writeContacts(contacts);
        console.log('Last contact removed');
    }catch(error){
        console.error('Error removing the last contact', error.message);
    }
};

removeLastContact();
