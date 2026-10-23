import styles from "./Item.module.css";

const Item = ({ foodItem , bought , handleBuyButton}) => {

  // const handleBuyButtonClicked = (event) => {
  //   console.log(event)
  //   console.log(`${foodItem} being bought`)
  //}

  return (
    <li className={`${styles['rv-item']} list-group-item ${bought &&'active'}`}>
      <span className={styles['rv-span']}>{foodItem}</span>
      <button
        className={`${styles.button} btn-solid btn-styled theme-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;