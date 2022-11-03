import { useAmp } from "next/amp";
import styles from "../..//styles/Home.module.css";

export const config = {
  amp: true,
};

export default function Home() {
  const isAmp = useAmp();

  if (isAmp) {
    return (
      <amp-lightbox>
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h2>Deploy(AMP) &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </amp-lightbox>
    );
  }

  return (
    <a
      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <h2>Deploy(NOT AMP) &rarr;</h2>
      <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
    </a>
  );
}
