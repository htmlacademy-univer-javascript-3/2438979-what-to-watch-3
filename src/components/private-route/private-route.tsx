import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../constants/app-route';
import { AuthorizationStatus } from '../../constants/authorization-status';
import { useAppSelector } from '../../hooks/redux-hooks';

type PrivateRouteProps = {
  children: JSX.Element;
}

export function PrivateRoute({children}: PrivateRouteProps) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}
