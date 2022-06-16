import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The most delicious Yemeni sweets</h1>
      <p className={styles.desc}>
        We offer you the most delicious Yemeni sweets..a refined taste and
        guaranteed quality
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => {
          return <PizzaCard key={pizza._id} pizza={pizza} />;
        })}
      </div>
    </div>
  );
};

export default PizzaList;
