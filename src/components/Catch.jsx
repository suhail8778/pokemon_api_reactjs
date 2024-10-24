import React, { useContext } from "react";
import mycontext from "../Store";
import { toast } from "react-toastify";

export default function Catch() {
  const { list, setList } = useContext(mycontext);
  //const {state} = useContext(mycontext);
  //  console.log(list, "this is sumit ");

  // console.log(list,"list catch");

  const DeleteCatch = (id) => {
    // console.log(id,"delete id");
    const updatedList = list.filter((i) => i.id !== id);
    setList(updatedList);
    setTimeout(() => {
      toast.success("Catch deleted sucessfully");
    }, 1000);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-sm">
          {" "}
          <table className="table table-danger table-striped">
            <thead className="heading">
              <th>Serial</th>
              <th>Nickname</th>
              <th>Species</th>
              <th>Image</th>
              <th>Action</th>
            </thead>
            <tbody>
              {list?.map((item, i) => (
                <tr className="mt-4">
                  <td>
                    <b>{i + 1}</b>
                  </td>
                  <td>{item.nickNme}</td>
                  <td>{item?.species?.name}</td>
                  <td>
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item?.id}.svg`}
                      alt=""
                      height={50}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        DeleteCatch(item.id);
                      }}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
