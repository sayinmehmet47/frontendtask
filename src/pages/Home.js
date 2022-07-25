import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import GridsHistory from '../gridsHistory';
import { addLocalStorage } from '../redux/historySlice';

function Home() {
  const dispatch = useDispatch();
  const handleClick = (e, value) => {
    e.preventDefault();
    dispatch(addLocalStorage(GridsHistory(value)));
  };

  return (
    <div className="d-flex justify-content-between flex-column align-items-center ">
      <form
        className="container-fluid text-center shadow border rounded bg-dark mt-5 p-4"
        id="container"
      >
        <div className="row mt-2">
          <button
            className="btn fs-2 btn-primary rounded m-1 col"
            value="1"
            id="1"
            onClick={(e) => handleClick(e, 1)}
          >
            1
          </button>
          <button
            className="btn fs-2 btn-primary rounded m-1 col operator"
            value="2"
            id="two"
            onClick={(e) => handleClick(e, 2)}
          >
            <div>
              <small typeof="text" className="fs-5">
                ABC
              </small>
              <h1>2</h1>
            </div>
          </button>
          <button
            className="btn fs-2 btn-primary rounded m-1 col operator"
            value="3"
            id="three"
            onClick={(e) => handleClick(e, 3)}
          >
            <small className="fs-5">DEF</small>
            <h1>3</h1>
          </button>
        </div>

        <div className="row  ">
          <button
            className="btn fs-2 btn-primary rounded m-1 col num"
            value="4"
            id="four"
            onClick={(e) => handleClick(e, 4)}
          >
            <small className="fs-5">GHI</small>
            <h1>4</h1>
          </button>
          <button
            className="btn fs-2 btn-primary rounded m-1 col num"
            value="5"
            id="five"
            onClick={(e) => handleClick(e, 5)}
          >
            <small className="fs-5">JKL</small>
            <h1>5</h1>
          </button>
          <button
            className="btn fs-2 btn-primary rounded m-1 col num"
            value="6"
            id="six"
            onClick={(e) => handleClick(e, 6)}
          >
            <small className="fs-5">MNO</small>
            <h1>6</h1>
          </button>
        </div>

        <div className="row">
          <button
            className="btn fs-2 btn-primary rounded m-1 col num"
            value="7"
            id="seven"
            onClick={(e) => handleClick(e, 7)}
          >
            <small className="fs-5">PQRS</small>
            <h1>7</h1>
          </button>
          <button
            className="btn fs-2 btn-primary rounded m-1 col num minus"
            value="8"
            id="eight"
            onClick={(e) => handleClick(e, 8)}
          >
            <small className="fs-5">TUV</small>
            <h1>8</h1>
          </button>
          <button
            className="btn fs-2 btn-primary rounded m-1 col num"
            value="9"
            id="nine"
            onClick={(e) => handleClick(e, 9)}
          >
            <small className="fs-5">WXYZ</small>
            <h1>9</h1>
          </button>
        </div>
        <div className="row">
          <button
            className="btn fs-1 btn-warning rounded m-1 col num text-center"
            value="*"
            id="star"
            onClick={(e) => handleClick(e, '*')}
          >
            *
          </button>
          <button
            className="btn fs-2 btn-primary rounded m-1 col num"
            value="0"
            id="zero"
            onClick={(e) => handleClick(e, 0)}
          >
            0
          </button>
          <button
            className="btn fs-2 btn-warning rounded m-1 col operator"
            value="#"
            id="hastag"
            onClick={(e) => handleClick(e, '#')}
          >
            #
          </button>
        </div>
      </form>
      <Link to="history">
        <button className="btn btn-dark ">See the History</button>
      </Link>
    </div>
  );
}

export default Home;
