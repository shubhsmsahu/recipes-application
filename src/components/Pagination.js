import React, { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import Button from "./reusableComponents/Button";

const Pagination = () => {
  const { isHidden, error, loading, handlePage } = useContext(RecipesContext);

  return (
    <>
      {isHidden && !loading && !error && (
        <div className="pagination">
          <Button btnText="Prev" handleClick={() => handlePage("previous")} />
          <Button btnText="Next" handleClick={() => handlePage("next")} />
        </div>
      )}
    </>
  );
};

export default Pagination;
