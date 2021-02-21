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
        // getList1()
        //   .then(items => {
        //     if(mounted) {
        //         setZipCodeData(items)
        //       console.log(items)
        //     }
        //   })
        return () => mounted = false;
    }, [])
    return (
        <div>
            <div>
                <input onChange={event => setZipCode(event.target.value)} />
                <Button style={{ backgroundColor: "#9bb1db", color: "white" }} variant="outline-*" onClick={() => {
                    getList1(zipCode).then(items => {
                        setZipCodeData(items)
                    })
                }}>Submit</Button>{' '}
            </div>
            {zipCodeData?.map(entry => <Address {...entry}/>)}
        </div>
    )
}

function Address(object) {
    return <div class="addressI">
        <p>{object.name}</p>
        <p>address: {object.address}</p>
        <p>hours: {object.hours}</p>
        <p>serves: {object.serves}</p>
    </div>
}