import React from 'react';
import {AppContext} from '../App/AppProvider';

export default function (props) {
  return (
    <AppContext.Consumer>
      {({firstVisit}) =>
        firstVisit ? <div>Select favorite coins to begin</div> : null}
    </AppContext.Consumer>
  );
}
