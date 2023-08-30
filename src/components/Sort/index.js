import React from "react";
import styles from "./Sort.module.css";

function Sort({ props }) {
  const [categoryArr, setCategoryArr] = props;
  const choicesArr = ["Relevance", "A-Z", "Z-A", "$", "$$$", "Sale"];
  let sortedArr = [...categoryArr];

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

  const sortDDL = (e) => {
    switch (e.target.value) {
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
        salesItemsFirst();
        break;
      case "relevance":
        salesItemsFirst();
        break;
      default:
        break;
    }
    setCategoryArr(sortedArr);
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
