import styles from "./trainers.module.css";

const Routines = () => {
  return (
    <div className={`${styles.routines} container `}>
      <p className="paragraph">Welcome</p>
      <h2>Take a look at my routines</h2>
      <p>
        It is a long established and fact that a reader will be distracted by
        the readabled content of a pages when looking at its layout.
      </p>
    </div>
  );
};

export default Routines;
