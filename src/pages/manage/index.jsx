import React, { useState } from "react";
import Wrapper from "./styles";
import Button from "../../components/button";
import Category from "./category";
import { useDispatch, useSelector } from "react-redux";
import { setInventory } from "../../reducers/global";

const Manage = () => {
  const { inventory: data } = useSelector((state) => state?.globalData);
  const dispatch = useDispatch();
  const setData = (val) => dispatch(setInventory(val));

  const handleCategory = () => {
    const id = Math.random();

    return setData([
      ...data,
      {
        id: id,
        name: " ",
        title: "",
        fields: [],
      },
    ]);
  };

  return (
    <Wrapper className="app-padding">
      {data?.map((val, index) => (
        <Category
          val={val}
          data={data}
          setData={setData}
          key={val?.id}
          index={index}
        />
      ))}

      <div>
        <Button
          background={"var(--primary)"}
          content="Add Category"
          onClick={handleCategory}
        />
      </div>
    </Wrapper>
  );
};

export default Manage;
