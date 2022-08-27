import React from "react";
import Input, { SelectInput } from "../../components/input";

const Category = ({ setData, data, val, index }) => {
  // alert(index);
  const handleNew = (val, newVal) => {
    const newArray = data.map((item) =>
      item.id === val?.id
        ? {
            ...val,
            fields: [
              ...val?.fields,
              {
                type: newVal?.id,
                label: "",
                id: Math.random(),
              },
            ],
          }
        : item
    );
    setData(newArray);
  };
  const handleDelete = (id) => setData(data?.filter((x) => x?.id !== id));

  return (
    <div key={val?.id} className="form">
      <div className="header">
        <div>{val?.name}</div>
        <div onClick={() => handleDelete(val?.id)} className="delBtn">
          x
        </div>
      </div>
      <div className="inputCont">
        <Input
          label="Name"
          value={val.name}
          onChange={(e) => {
            const newArray = data.map((item) =>
              item.id === val?.id ? { ...val, name: e.target.value } : item
            );
            setData(newArray);
          }}
        />
      </div>
      <div className="inputCont">
        <SelectInput
          label="Title Field"
          value={val?.title}
          options={val?.fields?.filter((x) => x?.label !== "")}
          labelName="label"
          onChange={(x) => {
            const newArray = data.map((item) =>
              item.id === val?.id ? { ...val, title: x } : item
            );
            setData(newArray);
          }}
        />
      </div>
      {val?.fields?.map((x) => (
        <div key={x?.id} className="inputCont">
          <Input
            value={x?.label}
            onChange={(e) => {
              const newField = val?.fields?.map((y) =>
                y?.id === x?.id
                  ? {
                      ...x,
                      label: e.target.value,
                    }
                  : y
              );
              const newArray = data.map((item) =>
                item.id === val?.id
                  ? {
                      ...val,
                      fields: newField,
                    }
                  : item
              );
              setData(newArray);
            }}
            inputCont={"removeBorder"}
            rightIcon={
              <div
                style={{
                  width: "auto",
                }}
              >
                <SelectInput
                  inputWrapper={"borderNone"}
                  options={[
                    { label: "Text", id: "text" },
                    { label: "Checkbox", id: "check" },
                    { label: "Date", id: "date" },
                    { label: "Number", id: "number" },
                    { label: "Remove", id: "remove" },
                  ]}
                  value={x?.type}
                  onChange={(id) => {
                    if (id === "remove") {
                      const newArray = data.map((item) =>
                        item.id === val?.id
                          ? {
                              ...val,
                              fields: [
                                ...val?.fields.filter(
                                  (y) => y?.label !== x?.label
                                ),
                              ],
                            }
                          : item
                      );
                      setData(newArray);
                    } else {
                      const newArray = data.map((item) =>
                        item.id === val?.id
                          ? {
                              ...val,
                              fields: [
                                ...val?.fields.filter(
                                  (y) => y?.label !== x?.label
                                ),
                                {
                                  ...x,
                                  type: id,
                                },
                              ],
                            }
                          : item
                      );
                      setData(newArray);
                    }
                  }}
                />
              </div>
            }
          />
        </div>
      ))}
      <div
        className="inputCont"
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            width: "30%",
          }}
        >
          <SelectInput
            className="btn"
            options={[
              { label: "Text", id: "text" },
              { label: "Checkbox", id: "check" },
              { label: "Date", id: "date" },
              { label: "Number", id: "number" },
            ]}
            value=""
            placeholder="Add Field"
            inputClassName="btnClass"
            onChange={(item) => handleNew(val, item)}
            getValue
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
