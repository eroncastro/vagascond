// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import parkingSpots from './ParkingSpots';
import SearchBar from './SearchBar';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const spotType = {
  double: 'Dupla',
  single: 'Simples',
  uncovered: 'Descoberta'
};

const spot = spotRegister => {
  return Array.isArray(spotRegister) ? spotRegister.join(', ') : spotRegister;
};

const partner = partnerRegister => {
  return partnerRegister
    ? `${partnerRegister.apartment}${partnerRegister.building.toUpperCase()}`
    : '-';
};

const filteredApartments = (elements, term) => {
  if (!term.trim()) return elements;

  return elements.filter(({ apartment, building }) => {
    const [apartmentTerm, buildingTerm] = term.split(/([a-zA-Z]+)/);

    try {
      if (apartmentTerm && buildingTerm) {
        return apartment.toString() === apartmentTerm && building === buildingTerm.toLowerCase();
      }

      return apartment.toString() === apartmentTerm || building === buildingTerm.toLowerCase();
    } catch(e) {
      return false;
    }
  });
};

class SimpleTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm: ''};
    this.classes = props.classes;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    return (
      <div>
        <SearchBar
          onSearchTermChange={this.handleChange}/>
        <Paper className={this.classes.root}>
          <Table className={this.classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Apartmento</TableCell>
                <TableCell align="right">Garagem</TableCell>
                <TableCell align="right">Tipo</TableCell>
                <TableCell align="right">Andar</TableCell>
                <TableCell align="right">Dupla</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredApartments(parkingSpots, this.state.searchTerm).map((elem, id) => {
                return (
                  <TableRow key={id}>
                    <TableCell component="th" scope="row">
                      {`${elem.apartment}${elem.building.toUpperCase()}`}
                    </TableCell>
                    <TableCell align="right">{spot(elem.garage.spot)}</TableCell>
                    <TableCell align="right">{spotType[elem.garage.type]}</TableCell>
                    <TableCell align="right">{elem.garage.floor}</TableCell>
                    <TableCell align="right">{partner(elem.partner)}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
