import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import './login.css';
import { loginUrl } from '../../utils/get-data';
import { useAuth } from '../../context/auth.context';
import { errorMessage } from '../../components/ErrorMessage/error-message';
import { useNotification } from '../../context/notification.context';

const required = "This field is required";

const Login = () => {
  const { setIsAuthenticated } = useAuth();
  const { showNotification, setHasError } = useNotification();
  const { handleSubmit, register, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const navigate = useNavigate();

  const handleResponse = (response) => {
    if (response.ok) {
      setIsAuthenticated(true);
      sessionStorage.setItem('access_token', response?.token);
      navigate('/');

      return response.json();
    }

    if (!response.ok) {
      showNotification('Please enter correct login and password');
      setHasError(true);

      return Promise.reject(response);
    }
  }

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
      .then(handleResponse)
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
