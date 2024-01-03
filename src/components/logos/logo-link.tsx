import {Link} from 'react-router-dom';

export function LogoLink(): JSX.Element {
  return (
    <div className="logo">
      <Link to="main.html" className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}
