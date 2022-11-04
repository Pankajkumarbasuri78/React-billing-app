import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineFolderAdd } from "react-icons/ai";
import "./topBar.css";
import { useDispatch } from "react-redux";
import { searchBill } from "../../redux/actions/Actions";
export const TopBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleQuery = (e) => {
    setQuery(e.target.value);
    dispatch(searchBill(e.target.value));
  };
  return (
    <div className="topfold">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="searchbar">
            <div className="search">
              <AiOutlineSearch size={20} />
            </div>
            <input
              placeholder="Search for expenses"
              value={query}
              onChange={(e) => handleQuery(e)}
            />
          </div>
          <Link to="/add-bill">
            <div className="add-button">
              <div className="add">
                <AiOutlineFolderAdd size={25}/>
              </div>
              <label>Add</label>
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-topfold">
          <Link to="/">
            <div className="add-topfold-button">
              <label>Back</label>
            </div>
          </Link>
          <Link to="/">
            <div className="add-topfold-button">
              <label>Cancel</label>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};
