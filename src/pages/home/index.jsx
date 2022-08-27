import React, { useState } from "react";
import Input, { SelectInput } from "../../components/input";
import Wrapper from "./styles";
import { CheckInput } from "../../components/input/index";
import Button from "../../components/button";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../reducers/global";
const HomePage = () => {
  const { inventory, items } = useSelector((state) => state.globalData);
  const dispatch = useDispatch();
  const setData = (val) => dispatch(setItems(val));

  const handleNew = (id) => {
    const category = inventory?.find((x) => String(x?.id) === id);
    const dataKeys = category?.fields?.map((x) => x?.label?.replace(/ /g, ""));
    const obj = dataKeys.reduce((accumulator, value) => {
      return { ...accumulator, [value]: "" };
    }, {});
    items
      ? setData([
          ...items,
          {
            categoryId: id,
            id: Math?.random(),
            ...obj,
          },
        ])
      : setData([
          {
            categoryId: category?.id,
            id: Math?.random(),
            ...obj,
          },
        ]);
  };

  console.log(inventory);
  console.log(items);

  const handleDelete = (id) => setData(items?.filter((x) => x?.id !== id));
  return (
    <Wrapper className="app-padding home-page">
      {items?.map((item) => (
        <div className="form" key={item?.id}>
          <div className="header">
            <div>
              {inventory?.find((x) => x?.id === item?.categoryId)?.name}
            </div>
            <div onClick={() => handleDelete(item?.id)} className="delBtn">
              x
            </div>
          </div>
          <>
            {inventory
              ?.find((x) => String(x?.id) === String(item?.categoryId))
              ?.fields?.map((cat) =>
                cat?.type === "text" ? (
                  <div className="inputCont">
                    <Input
                      label={cat?.label}
                      type="text"
                      value={item[[cat?.label?.replace(/ /g, "")]]}
                      onChange={(e) => {
                        const newVal = items?.map((y) =>
                          y?.id === item?.id
                            ? {
                                ...item,
                                [cat?.label?.replace(/ /g, "")]: e.target.value,
                              }
                            : y
                        );
                        setData(newVal);
                      }}
                    />
                  </div>
                ) : cat?.type === "check" ? (
                  <div className="inputCont">
                    <CheckInput
                      label={cat?.label}
                      checked={item[[cat?.label?.replace(/ /g, "")]]}
                      onChange={(e) => {
                        const newVal = items?.map((y) =>
                          y?.id === item?.id
                            ? {
                                ...item,
                                [cat?.label?.replace(/ /g, "")]:
                                  Boolean(
                                    item[[cat?.label?.replace(/ /g, "")]]
                                  ) === true
                                    ? false
                                    : true,
                              }
                            : y
                        );
                        setData(newVal);
                      }}
                    />
                  </div>
                ) : cat?.type === "date" ? (
                  <div className="inputCont">
                    <Input
                      label={cat?.label}
                      type="date"
                      value={
                        item[[cat?.label?.replace(/ /g, "")]] || new Date()
                      }
                      onChange={(e) => {
                        const newVal = items?.map((y) =>
                          y?.id === item?.id
                            ? {
                                ...item,
                                [cat?.label?.replace(/ /g, "")]: e.target.value,
                              }
                            : y
                        );
                        setData(newVal);
                      }}
                    />
                  </div>
                ) : (
                  <div className="inputCont">
                    <Input
                      label={cat?.label}
                      type="number"
                      value={item[[cat?.label?.replace(/ /g, "")]]}
                      onChange={(e) => {
                        const newVal = items?.map((y) =>
                          y?.id === item?.id
                            ? {
                                ...item,
                                [cat?.label?.replace(/ /g, "")]: e.target.value,
                              }
                            : y
                        );
                        setData(newVal);
                      }}
                    />
                  </div>
                )
              )}
          </>
        </div>
      ))}
      <div>
        <SelectInput
          background={"var(--primary)"}
          content="Add Item"
          options={inventory}
          placeholder="Add Item"
          onChange={(val) => handleNew(val)}
        />
      </div>
    </Wrapper>
  );
};

export default HomePage;
