import { CovidVaccineSites } from './CovidVaccineSites';

export function CovidVaccine() {
    return <div>
        <h1 class="headerIn" style={{fontSize: 30}}>
            Covid Vaccination Site Finder
        </h1>
        <p class="topPa">
            On this page you can learn about the two approved vaccines by the CDC
            <br></br> as well as find a Covid vaccination site near you if you enter your zip code below.
        </p>
        <p class="speech3" style={{marginTop: 50, padding:20}}>
        Getting vaccinated is one of the most important steps in preventing cases and deaths of Covid. 
        Please make sure to keep checking with the Massachusetts government Covid website to see what the current 
        vaccination phase the state is at. Currently, there are two vaccines with authorization for use: 
        the Pfizer vaccine and the Moderna vaccine. Check to see if you qualify for a Covid Vaccine <a href="https://www.mass.gov/info-details/massachusetts-covid-19-vaccination-phases">here</a>.
        </p>
        <div class="row">
        <div class="column">
        <p class="speech2" style={{marginTop: 50, marginLeft: 50, padding:20}}>
        <h1 style={{fontSize:15}}>Pfizer-BioNTech COVID-19 vaccine</h1>
        This vaccine has an efficacy rate of 95%. In other words, about 95% of people who get the vaccine are protected from developing symptoms of the COVID-19 virus. The Pfizer vaccine is available for people of age 16 and older. It requires two injections given 21 days apart, but the second does can be given up to 6 weeks after the first doe if needed.
        </p>
        </div>
        <div class="column">
        <p class="speech" style={{marginTop: 50, marginRight: 50, padding:20}}>
        <h1 style={{fontSize:15}}>Moderna COVID-19 vaccine</h1>
        This vaccine has an efficacy rate of 94.1%. In other words, about 95% of people who get the vaccine are protected from developing symptoms of the COVID-19 virus. 
        The Moderna vaccine is available for people of age 18 and older. It requires two injections given 28 days apart, but the second does can be given up to six weeks after the first does if needed.    
        </p>
        </div>
        </div>
    <div style={{textAlign: 'center', marginTop: 30}}>
        <p class="zipTe">
            Enter your zip code below to see if there are any vaccination sites at
            that zip code.
        </p>
        <CovidVaccineSites/>
     </div>
    </div>;
  }

