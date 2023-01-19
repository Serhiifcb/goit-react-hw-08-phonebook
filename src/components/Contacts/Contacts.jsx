import css from "./Contacts.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts'; 
import { useEffect } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export const Contacts = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts())
  }, [dispatch]);

  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(contactsSelectors.getFilter);
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  const deleteItem = (id) => {
    dispatch(contactsOperations.deleteContact(id));
  }
  
  return (
    <>
      <div className={css.contactListBlock}>
        <List dense={true}>
              {visibleContacts.length > 0 ? (visibleContacts.map(({ id, name, number }) => (
                <ListItem 
                  className={css.contactItem}
                  key={id}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => deleteItem(id)}>
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText/>
                  {name}: {number}
                </ListItem>
              ))) : <p>There are no contacts</p>}
            </List>
        </div>
    </>
  )
}