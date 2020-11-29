import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../UI/FormsControls/FormControls";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";

const maxLength10 = maxLengthCreator(50);
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={"newMessageBody"}
          placeholder={"Enter your message"}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add message</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "dialogAddMessageForm",
})(AddMessageForm);
