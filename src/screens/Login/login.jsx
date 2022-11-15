import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import './login.css';
import { loginUrl } from '../../utils/get-data';
import { useAuth } from '../../context/auth.context';

const errorMessage = (error) => {
  return <div className="invalid-feedback">{error}</div>;
};

const required = "This field is required";

const Login = () => {
  const { setIsAuthenticated } = useAuth();
  const { handleSubmit, register, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const navigate = useNavigate();

  const handleLogin = async (data) => {
    await fetch(
      loginUrl,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then((response) => {
        setIsAuthenticated(true);
        sessionStorage.setItem('access_token', response?.token);
        navigate('/');
      })
  }

  const onSubmit = async (data) => {
    await handleLogin(data);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <label className="login-form__label">
        Username
        <input
          {...register('username', { required: true })}
          type="text"
          className="modal__input"
          autoComplete="off"
        />
        {errors.username && errors.username.type === 'required' && errorMessage(required)}
      </label>

      <label className="login-form__label">
        Password
        <input
          {...register('password', { required: true })}
          type="text"
          className="modal__input"
          autoComplete="off"
        />
        {errors.username && errors.username.type === 'required' && errorMessage(required)}
      </label>

      <button className="modal__button">Login</button>
    </form>
  );
};

export default Login;
