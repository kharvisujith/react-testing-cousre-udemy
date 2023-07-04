import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [editId, setEditId] = useState("");

  const handleChange = (e) => {
    console.log("value is ", e.target.value);
    setValue(e.target.value);
  };

  const add = () => {
    console.log("add called");
    if (editId) {
      let tempData = [...data];
      const index = data.findIndex((cur) => cur.id === editId);

      tempData[index] = { id: editId, content: value };
      setData(tempData);
      setValue("");
      setEditId("");
    } else {
      console.log("Else of add called");
      const id = Date.now();
      setData([...data, { id: id, content: value }]);
      setValue("");
    }
  };
  console.log("value of dataaa isss", data);

  const deleteData = (id) => {
    const newData = data.filter((cur) => cur.id !== id);
    setData(newData);

    //for delete use filter
  };

  const UpdateData = (id) => {
    const index = data.findIndex((cur) => cur.id === id);
    const tempData = [...data];
    tempData[index].content = value;
  };

  const editData = (id) => {
    const index = data.findIndex((cur) => cur.id === id);
    let curData = data[index].content;
    setValue(curData);
    setEditId(id);
  };

  console.log("val ", value);
  console.log("Dat is", data);
  return (
    <>
      <h3>keeek</h3>
      <div>
        <input
          type="text"
          placeholder="enter todo data"
          onChange={handleChange}
          value={value}
        />
        <button onClick={add}>{editId ? "Updata" : "ADD"}</button>
      </div>

      {data?.map((cur, index) => {
        return (
          <div key={index} style={{ dipslay: "flex" }}>
            <label>{cur.content}</label>
            <button onClick={() => editData(cur.id)}>Edit</button>
            <button onClick={() => deleteData(cur.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};
export default App;
