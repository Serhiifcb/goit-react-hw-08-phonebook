import { Contacts } from "components/Contacts/Contacts";
import { Filter } from "components/Filter/Filter";
import { Form } from "components/Form/Form";
import { Typography } from "@mui/material";

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
};

export default function ContactsPage() {
  return (
    <div style={styles.container}>
      <Form />
      <Typography variant="h5" gutterBottom={true}>Contacts</Typography>
      <Filter/>
      <Contacts />
    </div>
  );
}