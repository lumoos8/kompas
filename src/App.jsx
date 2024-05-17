import styles from "./App.module.css";
import BusinessCard from "./сomponents/BusinessCard/BusinessCard";

const App = () => {
  return (
    <div className={styles.container}>
      <BusinessCard />
    </div>
  );
};

export default App;
