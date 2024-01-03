import { PropsWithChildren } from 'react';
import { LogoLink } from '../../components/logos/logo-link';
import { FooterLink } from '../../components/footers/footer-link';

export function SignInPage({ children }: PropsWithChildren<Record<never, never>>): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <LogoLink />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        {children}
      </div>

      <FooterLink />
    </div>
  );
}
