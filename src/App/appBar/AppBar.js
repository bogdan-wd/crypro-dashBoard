import React from 'react';
import styled, {css} from 'styled-components';
import {AppContext} from './../AppProvider';

const Logo = styled.div`
    font-size: 1.5em;
`;

const Bar = styled.div`
    display: grid;
    margin-bottom: 40px;
    grid-template-columns: 1fr 1fr 1fr;
`;

const ControlButtonElem = styled.div`
    cursor: pointer;
    ${props => props.active && css`
       text-shadow: 0px 0px 20px #03ff03;
    `}
`;

function toPropsCase (str) {
  return str.charAt (0).toUpperCase () + str.substr (1);
}

function ControlButton({name, active}) {
  return (
    <AppContext.Consumer>
      {({page, setPage}) => (
        <ControlButtonElem
        onClick={() => setPage(name)}
        active={page === name}>
          {toPropsCase (name)}
        </ControlButtonElem>
      )}

    </AppContext.Consumer>
  );
}

export default function AppBar () {
  return (
    <Bar>
      <Logo>
        Dash
      </Logo>
      <ControlButton  name={'dashboard'} />
      <ControlButton name={'settings'} />
    </Bar>
  );
}
