import { useState, MouseEvent, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

import useAppSelector from '../../hooks/use-app-selector';
import useAppDispatch from '../../hooks/use-app-dispatch';

import { sendAuthData } from '../../store/actions/auth-actions/auth-actions';

import ROUTES_PATHS from '../../const/routes-paths';
import ErrorNotification from "../../components/error-notification/error-notification";

function Login() {
  const { city }  = useAppSelector((state) => state.cityData);
  const { pending, err } = useAppSelector((state) => state.authStatus);
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function emailChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function passwordChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  function submitHandler(e: MouseEvent) {
    e.preventDefault();
    const userData = { password, email };
    dispatch(sendAuthData(userData));
  }

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post">
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input className="login__input form__input" onChange={emailChangeHandler} type="email" name="email" placeholder="Email" required />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input className="login__input form__input" onChange={passwordChangeHandler} type="password" name="password" placeholder="Password" required />
            </div>
            <button className="login__submit form__submit button" type="submit" disabled={pending} onClick={submitHandler}>Sign in</button>
            {err && <ErrorNotification errText={err} />}
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to={ROUTES_PATHS.MAIN}>
              <span>{city}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;
