import React from 'react';
import { useForm, ErrorMessage } from 'react-hook-form';
import './Form.scss'

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <div className = "form-component">
        <form onSubmit={handleSubmit(onSubmit)}>
            <select name="Title" ref={register({ required: true })}>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
            </select>
            <input type="text" placeholder="First name" name="First name" ref={register({required: true, maxLength: 80})} />
            <span><ErrorMessage errors={errors} name="First name" message="This field is required" /></span>

            <input type="text" placeholder="Last name" name="Last name" ref={register({required: true, maxLength: 100})} />
            <span><ErrorMessage errors={errors} name="Last name" message="This field is required" /></span>
            
            <input type="text" placeholder="Email" name="Email" ref={register({required: 'This field is required', pattern: { 
              value: /^\S+@\S+$/i,
              message: "Please enter a valid email address"}
            })} />
            <span><ErrorMessage
              errors={errors}
              name="Email"
              render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
              }
            />  </span>
            <input type="tel" placeholder="Mobile number" name="Mobile number" ref={register({required: true, minLength: 6, maxLength: 12})} />

            <input type="text" placeholder="Company" name="Company" ref={register} />

            <input type="submit" />
        </form>
    </div>
  );
}