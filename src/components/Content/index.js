import React, { useContext } from "react";
import { ComputerContext } from "../../context";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

function Content({ props }) {
  const { loading, error } = useContext(ComputerContext);
  let content = null;

  if (error) {
    content = <Error />;
  } else if (loading) {
    content = <Loading />;
  } else {
    content = props;
  }
  return <main>{content}</main>;
}

export default Content;
