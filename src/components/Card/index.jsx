"use client";
import Image from "next/image";
import styles from "../../components/Card/style.module.scss";

const Card = ({ title, description, src, url, color, i }) => {
  return (
    <div className={styles.cardContainer}>
      <div
        className={styles.card}
        style={{ backgroundColor: color, top: `calc(-5vh + ${i * 25}px)` }}
      >
        <h2>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.inner}>
              <Image
                fill
                src={src}
                alt="image"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
