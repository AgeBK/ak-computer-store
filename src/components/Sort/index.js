import React, { useState } from "react";
import styles from "./Sort.module.css";

const Sort = ({ props }) => {
  const [categoryArr, setCategoryArr] = props;
  const choicesArr = ["Relevance", "A-Z", "Z-A", "$", "$$$", "Sale"];
  let sortedArr = [...categoryArr];

  const alphabetically = (reverseOrder) => {
    sortedArr.sort((a, b) => (a.productName < b.productName ? -1 : 1));
    reverseOrder && sortedArr.reverse();
  };

  const financially = (reverseOrder) => {
    sortedArr.sort((a, b) => (a.productName < b.productName ? -1 : 1));
    reverseOrder && sortedArr.reverse();
  };

  const salesItemsFirst = () => {
    sortedArr.sort((a) => (a.sale ? -1 : 1));
  };

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
    <select name="filters" onChange={sortDDL}>
      {choicesArr.map((val) => (
        <option value={val.toLowerCase()}>{val}</option>
      ))}
    </select>
  );
};

export default Sort;
