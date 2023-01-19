import { Contacts } from "components/Contacts/Contacts";
import { Filter } from "components/Filter/Filter";
// import { Form } from "components/Form/Form";
import { Typography } from "@mui/material";
// import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';
import AddContactModal from "components/AddContactModal/AddContactModal";

const styles = {
  container: {
    marginTop: 20,
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
};

export default function ContactsPage() {
  return (
    <div style={styles.container}>
      {/* <Form /> */}
      <Typography variant="h5">Contacts</Typography>
      <Filter/>
      <Contacts />
      <AddContactModal/>
    </div>
  );
}