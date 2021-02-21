import { useEffect, useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { getList1 } from './services/covidTestService';
import Button from 'react-bootstrap/Button';
import Chart from 'react-apexcharts';

export function CovidVaccineSites() {
    const [zipCode, setZipCode] = useState(['']);
    //this.state={zipCode: ''};
    const [zipCodeData, setZipCodeData] = useState([]);
  useEffect(() => {
    let mounted = true;
    getList1()
      .then(items => {
        if(mounted) {
            setZipCodeData(items)
          console.log(items)
        }
      })
    return () => mounted = false;
  }, [])
  return (
      <div>
      <div>
        <input onChange={event => setZipCode(event.target.value)}/>
        <Button style={{backgroundColor: "#9bb1db", color:"white"}} variant="outline-*" onClick={() => {getList1(zipCode)}}>Submit</Button>{' '}
      </div>
      {/* <div>
          if (zipCodeData != undefined) {
              zipCideData.map(entry => entry);
          }
      </div> */}
      </div>
      )
    }