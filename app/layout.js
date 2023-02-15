import './global.scss';
import Link from 'next/link';
import CookieBanner from './CookieBanner';
import styles from './layout.module.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <CookieBanner />
        <header className={styles.header}>
          <nav className={styles.navbar}>
            <hi className={styles.logo}>Dave</hi>
            <ul className={styles.links}>
              <li className={styles.navlink}>
                <Link href="/">Home</Link>
              </li>
              <li className={styles.navlink}>
                <Link href="/products">Products</Link>
              </li>
              <li className={styles.navlink}>
                <Link href="/about us">About Us</Link>
              </li>
              <li className={styles.navlink}>
                <Link href="/contact">Contact</Link>
              </li>
              <li className={styles.navlink}>
                <Link href="/login">login</Link>
              </li>
              <li className={styles.navlink}>
                {' '}
                <Link href="/cart"> cart</Link>
              </li>
            </ul>
          </nav>
        </header>

        {children}
        <footer className={styles.footer}>copyright BodyCare 2023</footer>
      </body>
    </html>
  );
}
