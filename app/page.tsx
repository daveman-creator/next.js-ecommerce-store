import Image from 'next/image';
// import Link from 'next/link';
import styles from './page.module.scss';

type MetaData = {
  title: string;

  shortcut: string;
};

export const metadata: MetaData = {
  title: 'Home Page',
  shortcut: '/favicon.ico',
};

export default function HomePage() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.h1}>Health Is Wealth</h1>
        <div className={styles.div}>
          <p className={styles.p}>
            Health is the general condition of a person's mind, body, and
            spirit, usually meaning to be free from illness, injury, or pain.
            The World Health Organization (WHO) defined health in its broader
            sense in 1946 as "a state of complete physical, mental, and social
            well-being and not merely the absence of disease or infirmity."
            Factors of good health
            <br />
            <br />
            <i>
              Everyone should be serious about having good health. Our health
              decides our future. It is the basic need if you want to have a
              delightful life. There are many things that we should do to
              maintain a healthy life like exercise, meditation, diet and proper
              knowledge of disease, etc. Apart from 'what to do', it is also
              important to know 'what not to do' for a healthy life.
            </i>{' '}
          </p>
          <Image
            data-test-id="product-image"
            className={styles.img}
            src="/images/body-care.jpg"
            alt="Body Care"
            width="900"
            height="600"
          />
        </div>
      </section>
    </main>
  );
}
