'use client';

import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import styles from './CookieBanner.module.scss';

export default function CookieBanner() {
  const [areCookiesTermsAccepted, setAreCookiesTermsAccepted] = useState(false);

  // this function triggers on first render
  useEffect(() => {
    // Check if there is a localStorage field for the cookieBanner
    const localStorageValue = getLocalStorage('areCookiesTermsAccepted');
    // if not then initial value is false
    // if yes the initial value is what is stored in the browser
    const initialState =
      localStorageValue === undefined ? false : localStorageValue;

    setAreCookiesTermsAccepted(initialState);
  }, []);

  return areCookiesTermsAccepted ? (
    <div />
  ) : (
    <>
      <div className={styles.div}>
        This is the cookie police. Please accept terms and conditions
      </div>
      <button
        onClick={() => {
          setAreCookiesTermsAccepted(true);
          setLocalStorage('areCookiesTermsAccepted', true);
        }}
      >
        Accept
      </button>
    </>
  );
}
