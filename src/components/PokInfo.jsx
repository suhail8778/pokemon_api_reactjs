import React, { Children, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ContextStore from "../Store";
import { toast } from "react-toastify";

export default function PokInfo() {
  //const {state,setState}= useContext(ContextStore)
  const { list, setList } = useContext(ContextStore);
  const location = useLocation();
  const [state, setState] = useState({
    nickNme: "",
  });
  const [error, setError] = useState(false);
  const [catching, setCatching] = useState(false);

  const data = location.state.item;
  // console.log(list, "list");
  // console.log(data.id, "dataa");

  
  const inputChange = (event) => {
    if (state.nickNme.length > -1) {
      setState({ ...state, nickNme: event.target.value });
      setError(false);
    } else {
      setError(true);
    }
  };
  const submit = (event) => {
    event.preventDefault();
    if (state.nickNme == "") {
      setError(true);
    } else {
      const dataWithNickname = { ...data, nickNme: state.nickNme };
      // console.log(catData);
      setList([...list, dataWithNickname]);

      setTimeout(() => {
        toast.success("Catch Saved Sucessfully");
        setState({ nickNme: "" });
        setCatching(true);
      }, 1000);
    }
  };

  useEffect(() => {
    list.map((item) => {
      if (item.id === data.id) {
        setCatching(true);
      }
    });
  });

  return (
    <>
      {!data ? (
        ""
      ) : (
        <div className="container mt-4">
          <div className="row">
            <div className="align-items-center">
              <h1 className="d-flex justify-content-center mb-5">
                {data.name.toUpperCase()}
              </h1>
              <div className=" d-flex justify-content-center align-items-center mb-5">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data?.id}.svg`}
                  alt=""
                />
              </div>

              <div className="group d-flex justify-content-between mt-4 dark">
                <div className="group-item">
                  <h3>Abilites</h3>
                  {data.abilities.map((poke, ind) => {
                    return (
                      <h6 className="group mx-2" key={ind}>
                        {poke.ability.name}
                      </h6>
                    );
                  })}
                </div>
                <div className="group-item">
                  <h2>Form</h2>
                  {data.forms.map((f, index) => {
                    return <h6 key={index}>{f.name}</h6>;
                  })}
                </div>

                <div className="group-item">
                  <h2>Move</h2>
                  {data.moves.slice(0, 5).map((m, index) => {
                    return <h6 key={index}>{m.move.name}</h6>;
                  })}
                </div>
              </div>

              <div className="group d-flex justify-content-between mt-4 dark">
                <div className="group-item">
                  <h2>Weight</h2>
                  <h6>{data.weight}</h6>
                </div>

                <div className="group-item">
                  {catching ? (
                    <h3>Thank You For Catching Item</h3>
                  ) : (
                    <div>
                      {" "}
                      <h5 className="text text-danger">
                        {error && "Please enter the catch.*"}
                      </h5>
                      <form
                        className="d-flex justify-content-center"
                        onSubmit={submit}
                      >
                        <div className="mb-3 mx-4">
                          <input
                            type="text"
                            className="form-control"
                            value={state.nickNme}
                            onChange={inputChange}
                          />
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Catch
                        </button>
                      </form>
                    </div>
                  )}
                </div>

                <div className="group-item mb-5">
                  <h2>Height</h2>
                  <h6>{data.height}</h6>
                </div>
              </div>

              {/* <div className="base-stat d-flex justify-content-center">
            {data.stats.map((state,index) => {
              return <h3 key={index}>{state.stat.name}</h3>;
            })}
          </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
