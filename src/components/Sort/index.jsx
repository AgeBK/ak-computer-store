import { useState } from "react";
import styles from "./Sort.module.css";

function Sort({ catArr, setCatArr }) {
  const [selected, setSelected] = useState("");
  const choicesArr = ["Relevance", "A-Z", "Z-A", "$", "$$$", "Sale"];
  let sortedArr = [...catArr];

  const alphabetically = (reverseOrder) => {
    sortedArr.sort((a, b) =>
      a.productName.toLowerCase() < b.productName.toLowerCase() ? -1 : 1
    );
    reverseOrder && sortedArr.reverse();
  };

  const financially = (reverseOrder) => {
    sortedArr.sort((a, b) => (a.price < b.price ? -1 : 1));
    reverseOrder && sortedArr.reverse();
  };

  const salesItemsFirst = () => sortedArr.sort((a) => (a.sale ? -1 : 1));

  const sortDDL = ({ target: { value } }) => {
    switch (value) {
      case "a-z":
        alphabetically(false);
        break;
      case "z-a":
        alphabetically(true);
        break;
      case "$":
        financially(false);
        break;
      case "$$$":
        financially(true);
        break;
      case "sale":
      case "relevance":
        salesItemsFirst();
        break; 
      default:
        break;
    }
    setCatArr(sortedArr);
    setSelected(value);
  };

  return (
    <>
      <label htmlFor="sort" id="lbl-sort-items">
        <select
          id="sort"
          name="filters"
          onChange={sortDDL}
          className={styles.container}
          aria-labelledby="lbl-sort-items"
          value={selected}
        > 
          {choicesArr.map((val, ind) => (
            <option value={val.toLowerCase()} key={ind}>
              {val}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}

export default Sort;
