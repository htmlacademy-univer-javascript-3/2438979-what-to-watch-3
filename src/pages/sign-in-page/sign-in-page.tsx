import { LogoLink } from '../../components/logos/logo-link';
import { FooterLink } from '../../components/footers/footer-link';
import { useAppSelector, useAppDispatch } from '../../hooks/redux-hooks';
import { useNavigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../constants/authorization-status';
import { AppRoute } from '../../constants/app-route';
import { useRef, useState } from 'react';
import { login } from '../../store/api-actions';
import { FormEvent } from 'react';
import { ERROR_RESPONSE_FIELD } from '../../constants/constants';

export function SignInPage(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const navigate = useNavigate();

  if (authorizationStatus === AuthorizationStatus.Auth) {
    navigate(AppRoute.Main);
  }

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const [isValidationError, setIsValidationError] = useState(false);

  const handleLogin = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (emailRef.current !== null && passwordRef.current !== null) {
      dispatch(login({email: emailRef.current.value, password: passwordRef.current.value})).then((response) => {
        if (ERROR_RESPONSE_FIELD in response) {
          setIsValidationError(true);
        }
      });
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <LogoLink />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleLogin}>
          <div className="sign-in__fields">
            <div className="sign-in__message">
              {isValidationError && <p>Please enter a valid email address and password</p>}
            </div>
            <div className="sign-in__field">
              <input ref={emailRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
      <FooterLink/>
    </div>
  );
}
