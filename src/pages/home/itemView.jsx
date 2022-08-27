import React, { useState } from "react";
import Input from "../../components/input";
import Wrapper from "./styles";
import { CheckInput } from "../../components/input/index";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button";
import { setItems } from "../../reducers/global";

const ItemView = () => {
  const params = useParams();
  const { inventory, items } = useSelector((state) => state.globalData);
  const dispatch = useDispatch();
  const setData = (val) => dispatch(setItems(val));
  const category = inventory?.find((x) => String(x?.id) === params?.id);
  const dataKeys = category?.fields?.map((x) => x?.label?.replace(/ /g, ""));
  const obj = dataKeys.reduce((accumulator, value) => {
    return { ...accumulator, [value]: "" };
  }, {});

  const handleNew = () =>
    items
      ? setData([
          ...items,
          {
            categoryId: category?.id,
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

  const handleDelete = (id) => setData(items?.filter((x) => x?.id !== id));

  return (
    <Wrapper className="app-padding home-page">
      {items
        ?.filter((val) => String(val?.categoryId) === params?.id)
        ?.map((item) => (
          <div className="form" key={item?.id}>
            <div className="header">
              <div>{category?.name}</div>
              <div onClick={() => handleDelete(item?.id)} className="delBtn">
                x
              </div>
            </div>
            <>
              {category?.fields?.map((cat) =>
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
        <Button
          background={"var(--primary)"}
          content="Add Item"
          onClick={handleNew}
        />
      </div>
    </Wrapper>
  );
};

export default ItemView;
