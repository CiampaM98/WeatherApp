import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function testtest(city) { //same as testtest=>
  return city == 'Niagara Falls';
}

function App() {
  
  //result is the output of the application. 
  //citylist is to fetch the list from the WebAPI
  const [cities,setCities]=useState([]);
  const [selectedCity,setselectedCity]=useState();
  useEffect(()=>{
    //fetch method takes the request info (url)
    fetch('https://localhost:44333/api/City', 
    {
      method: 'Get',
      headers: {
        'Content-Type':'application/json',
      }
    })
    .then(resp=>resp.json())
    .then(resp=>setCities(resp))
  },[])

  if(cities.length === 0) {
    return null;
  }

  return (
    /* -------------------------------------------------------------------------Title and Sytled Bar-----------------------------------------------------------------------------*/
    <div className='container'>
        <h1> My Weather App </h1>
        <p class="lead">Let's go somewhere.</p>
        <div class="header-bar">
            <h1 class="logo"></h1>
    {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            <center>
              <select onChange={(e)=> { // => is a callback. pass a function to onchange, whenever dropdown is changed, this is called.
                for(var city of cities) {
                  if(city.CityName === e.target.value) {
                    setselectedCity(city);
                    return;
                  }
                }
              }}>
                <option disabled selected>-- Select City --</option>
                {
                  cities.map(x=>{ //.map goes through each element of the array - good for showing each ele in a list. returns new list, does not change original
                    return(
                      <option value={x.CityName}>{x.CityName}</option>
                    )
                  })
                }
              </select> 

              {/* ------------------------------------------------------------------TABLE------------------------------------------------------------------------------------*/}
              {selectedCity && //if selectedCity is true, render the table. Else do nothing. 
                <div><br /><br /><br />
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell></StyledTableCell>
                          <StyledTableCell align="right">Monday</StyledTableCell>
                          <StyledTableCell align="right">Tuesday</StyledTableCell>
                          <StyledTableCell align="right">Wednesday</StyledTableCell>
                          <StyledTableCell align="right">Thursday</StyledTableCell>
                          <StyledTableCell align="right">Friday</StyledTableCell>
                          <StyledTableCell align="right">Saturday</StyledTableCell>
                          <StyledTableCell align="right">Sunday</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        
                          <StyledTableRow>
                            <StyledTableCell component="th" scope="row"></StyledTableCell>
                            <StyledTableCell align="right">{selectedCity.CityTempMon}&deg;C</StyledTableCell>
                            <StyledTableCell align="right">{selectedCity.CityTempTues}&deg;C</StyledTableCell>
                            <StyledTableCell align="right">{selectedCity.CityTempWed}&deg;C</StyledTableCell>
                            <StyledTableCell align="right">{selectedCity.CityTempThurs}&deg;C</StyledTableCell>
                            <StyledTableCell align="right">{selectedCity.CityTempFri}&deg;C</StyledTableCell>
                            <StyledTableCell align="right">{selectedCity.CityTempSat}&deg;C</StyledTableCell>
                            <StyledTableCell align="right">{selectedCity.CityTempSun}&deg;C</StyledTableCell>
                          </StyledTableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              }
              {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            </center>
        </div>
    </div>
  );
}

/* ------------------------------------------------------------------------Table Styling------------------------------------------------------------------------------------ */

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

export default App;
