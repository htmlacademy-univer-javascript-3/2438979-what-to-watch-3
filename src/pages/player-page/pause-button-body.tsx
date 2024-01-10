import React from 'react';

export function PauseButtonBody(): JSX.Element {
  return (
    <React.Fragment>
      <svg viewBox="0 0 14 21" width="14" height="21">
        <use xlinkHref="#pause"></use>
      </svg>
      <span>Pause</span>
    </React.Fragment>
  );
}
