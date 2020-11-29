import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../../utils/validators/validators";
import { Textarea } from "../../../UI/FormsControls/FormControls";

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name={"newPostBody"}
        placeholder={"Enter your post"}
        validate={[required, maxLength10]}
      />
      <button>Add posts</button>
    </form>
  );
};

export default reduxForm({
  form: "profileAddPostForm",
})(AddPostForm);
