import styles from './not-found.module.scss';

export const metadata = {
  title: 'Product Not Found',
  description: "sorry can't find the product you are looking for",
};

export default function ProductNotFound() {
  return <div className={styles.div}>Sorry this page was not found</div>;
}
