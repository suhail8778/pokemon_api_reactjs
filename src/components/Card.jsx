import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
//import PokInfo from "./PokInfo";

export default function Card({ pokeData, loading, pokeDex, setPokeDex }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="container mt-4">
        <div className="row d-flex justify-contant-center">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            pokeData.map((item, ind) => {
              return (
                // <div
                //   className="card"
                //   key={ind}
                //   onClick={() => setPokeDex(item,ind)}
                // >
                //   <h2>{item.id}</h2>
                //   <img src={item.sprites.front_default} alt="" />
                //   <h2>{item.name}</h2>
                // </div>

                //       <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0"  key={ind}
                //                onClick={() => setPokeDex(item,ind)}>

                // <img src={item.sprites.front_default} className="img-fluid product-thumbnail" alt={item.sprites.front_default} />
                // <h3 className="product-title">{item.id}</h3>
                // <strong className="product-price">${item.name}</strong>

                // <span className="icon-cross">
                //     <img src="/images/cross.svg" className="img-fluid" />
                // </span>

                // </div>

                <div
                  className="col-sm-3"
                  key={ind}
                  onClick={() => {
                    setPokeDex(item);
                    navigate("/pinfo", { state: { item } });
                  }}
                >
                  {/* <NavLink className="product-item" to='/pinfo'  onClick={()=>setPokeDex(item)}> */}

                  <div className="d-flex justify-content-center align-items-center">
                    {" "}
                    <img
                      src={item.sprites.front_default}
                      className=" img img-fluid product-thumbnail"
                      onClick={() => setPokeDex(item)}
                    />
                  </div>
                  <h3 className="d-flex justify-content-center align-items-center mb-5">
                    {item.name.toUpperCase()}
                  </h3>

                  <span className="icon-cross">
                    <img src="images/cross.svg" className="img-fluid" />
                  </span>
                  {/* </NavLink> */}
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
