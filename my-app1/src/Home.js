import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { CovidData } from './CovidData';


export function Home() {
    return <div>
        <Jumbotron className="mainJumbo">
            <h1 style={{fontSize:30}}>
                Massachusetts is currently in phase 3, step 1 of its reopening plan!
            </h1>
            <p style={{fontSize:15, marginLeft: 10, marginRight:100}}>
            Bars, casinos, gyms, museums and others in the entertainment and arts industries can reopen. All other business activities can resume except for nightclubs and large venues.
            More recreation is allowed to restart, including youth sorts with games and tournaments, though crowd sizes will be limited.
            Make sure to continue to wear masks and social distance!
            </p>
            <p>
            <Button style={{backgroundColor: "#142448", color:"white"}} variant="outline-*" href="https://www.mass.gov/info-details/reopening-massachusetts">More Information</Button>
            </p>
        </Jumbotron>
        <p style={{marginLeft:20}}>Below you can find the covid infections in Massachusetts. It is updated daily
            with the new information.
        </p>
        <div>
        <CovidData/>
        </div>
    </div>;
  }