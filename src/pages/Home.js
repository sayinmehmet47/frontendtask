import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Configuration, V0alpha2Api } from '@ory/kratos-client';
import { edgeConfig } from '@ory/integrations/next';
import { AxiosError } from 'axios';

import GridsHistory from '../gridsHistory';
import { addLocalStorage } from '../redux/historySlice';

const kratos = new V0alpha2Api(new Configuration(edgeConfig));

const SignedOut = () => (
  <>
    Get started and{' '}
    <a href={'/api/.ory/self-service/registration/browser'}>
      create an example account
    </a>{' '}
    or <a href={'/api/.ory/self-service/login/browser'}>sign in</a>,{' '}
    <a href={'/api/.ory/self-service/recovery/browser'}>recover your account</a>{' '}
    or{' '}
    <a href={'/api/.ory/self-service/verification/browser'}>
      verify your email address
    </a>
    ! All using open source{' '}
    <a href={'https://github.com/ory/kratos'}>Ory Kratos</a> in minutes with
    just a{' '}
    <a
      href={
        'https://www.ory.sh/login-spa-react-nextjs-authentication-example-api-open-source/'
      }
    >
      few lines of code
    </a>
    !
  </>
);

function Home() {
  // Contains the current session or undefined.
  const [session, setSession] = useState();

  // The URL we can use to log out.
  const [logoutUrl, setLogoutUrl] = useState();

  // The error message or undefined.
  const [error, setError] = useState();

  const dispatch = useDispatch();
  const handleClick = (e, value) => {
    e.preventDefault();
    dispatch(addLocalStorage(GridsHistory(value)));
  };

  useEffect(() => {
    // If the session or error have been loaded, do nothing.
    if (session || error) {
      return;
    }

    // Try to load the session.
    kratos
      .toSession()
      .then(({ data: session }) => {
        // Session loaded successfully! Let's set it.
        setSession(session);

        // Since we have a session, we can also get the logout URL.
        return kratos
          .createSelfServiceLogoutFlowUrlForBrowsers()
          .then(({ data }) => {
            setLogoutUrl(data.logout_url);
          });
      })
      .catch((err) => {
        // An error occurred while loading the session or fetching
        // the logout URL. Let's show that!
        setError({
          error: err.toString(),
          data: err.response?.data,
        });
      });
  }, [session, error]);

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
