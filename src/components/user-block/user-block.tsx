import { AuthorizationStatus } from '../../constants/enum-constants/authorization-status';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../constants/enum-constants/app-route';
import { logout } from '../../store/api-actions';
import { Link } from 'react-router-dom';

export function UserBlock(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <Link to={AppRoute.MyList}>
              <img src={user?.avatarUrl} alt="User avatar" width="63" height="63" />
            </Link>
          </div>
        </li>
        <li className="user-block__item">
          <a type="button" className="user-block__link" onClick={() => {
            dispatch(logout());
          }}
          >Sign out
          </a>
        </li>
      </ul>
    );
  }
  return (
    <div className="user-block">
      <a type="button" className="user-block__link" onClick={() => navigate(AppRoute.SignIn)}>Sign in</a>
    </div>
  );
}
