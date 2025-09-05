import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Fun Ecommerce Company</h1>
      <p>
        We sell things, take a look at our <Link href="/">Products</Link>
      </p>
    </main>
  );
}
