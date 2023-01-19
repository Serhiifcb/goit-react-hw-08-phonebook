import { useDispatch, useSelector } from 'react-redux';
import { update } from 'redux/filterSlice';
import { contactsSelectors } from 'redux/contacts';
import { TextField } from "@mui/material";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);
  const changeFilter = event => {
    dispatch(update(event.currentTarget.value));
  }
  return (
    <div>
      <label>
        <TextField id="outlined-basic"  margin="normal" label="Find contacts by name" variant="outlined" size="small" type="text" value={filter} onChange={changeFilter}/>
      </label>
    </div>
  )
}