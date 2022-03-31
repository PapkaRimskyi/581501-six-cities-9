import {useState, MouseEvent, ChangeEvent, useMemo} from 'react';
import { Link } from 'react-router-dom';

import useAppSelector from '../../hooks/use-app-selector';
import useAppDispatch from '../../hooks/use-app-dispatch';

import sendAuthRequest  from '../../store/auth/thunk/send-auth-request';
import { changeCityName } from '../../store/city/city';

import LoadingNotification from '../../components/notifications/loading-notification/loading-notification';
import ErrorNotification from '../../components/notifications/error-notification/error-notification';

import ROUTES_PATHS from '../../const/routes-paths';
import { CITY_LIST } from '../../const/city-list';

function Login() {
  const { pending, error } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const randomCity = useMemo(() => {
    const randomCityIndex = Math.floor(Math.random() * CITY_LIST.length);
    return CITY_LIST[randomCityIndex];
  },[]);

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
    dispatch(sendAuthRequest(userData));
  }

  function randomCityClickHandler() {
    dispatch(changeCityName(randomCity));
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
            <button className="login__submit form__submit button" type="submit" onClick={submitHandler}>Sign in</button>
            {error?.errText && <ErrorNotification errText={error.errText} />}
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to={ROUTES_PATHS.MAIN} onClick={randomCityClickHandler}>
              <span>{randomCity}</span>
            </Link>
          </div>
        </section>
      </div>
      {pending && <LoadingNotification />}
    </main>
  );
}

export default Login;
