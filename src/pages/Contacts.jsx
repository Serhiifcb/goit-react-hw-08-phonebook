import { Contacts } from "components/Contacts/Contacts";
import { Filter } from "components/Filter/Filter";
import { Form } from "components/Form/Form";

export default function Login() {
  return (
    <div>
      <Form/>
      <Filter/>
      <Contacts />
    </div>
  );
}