import { Field, reduxForm } from "redux-form";
import { Input } from "../../UI/FormsControls/FormControls";
import { required } from "../../../utils/validators/validators";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"email"}
          type="text"
          placeholder="email"
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          name={"password"}
          type="password"
          placeholder="password"
          validate={[required]}
          component={Input}
        />
      </div>
      <div>
        <Field name={"rememberMe"} type="checkbox" component={Input} />
        remeber me
      </div>
      {props.error && <div>{props.error}</div>}
      <div>
        <button>Sign in</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "login",
})(LoginForm);
