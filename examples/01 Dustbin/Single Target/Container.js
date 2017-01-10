import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Dustbin from './Dustbin';
import Box from './Box';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

@DragDropContext(HTML5Backend)
export default class Container extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div style={{ overflow: 'hidden', clear: 'both' }}>
            <Dustbin />
          </div>
          <div style={{ overflow: 'hidden', clear: 'both' }}>
            <Box name='Glass' />
            <Box name='Banana' />
            <Box name='Paper' />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
