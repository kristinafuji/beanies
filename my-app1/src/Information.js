import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button'

export function Information() {
    return <div>
        <h1 class="headerIn" style={{fontSize: 30}}>
            Information
        </h1>
        <p class="topPa">
            On this page you can learn about symptoms of covid, 
            <br></br>ways to prevent infection, treatment resources, and ways to help.
        </p>
        <ButtonGroup vertical>
            <Button style={{backgroundColor: "#9bb1db", color:"white"}} variant="outline-*" href="#symptoms">Symptoms</Button>
            <Button style={{backgroundColor: "#9bb1db", color:"white"}} variant="outline-*" href="#prevention">Prevention</Button>
            <Button style={{backgroundColor: "#9bb1db", color:"white"}} variant="outline-*" href="#treatment">Treatment</Button>
            <Button style={{backgroundColor: "#9bb1db", color:"white"}} variant="outline-*" href="#donation">Donations</Button>
        </ButtonGroup>
        <body>
            <div class="photos">
            <img align="center" src="icons8-protection-mask-64.png" alt="Mask">
            </img>
            <img src="icons8-insulin-pen-64.png" alt="Vaccine">
            </img>
            <img src="icons8-social-distancing-48.png" alt="Social Distancing">
            </img>
            </div>
            <h1 class="symptoms" id="symptoms" style={{fontSize:20, marginLeft: 75, paddingTop: 75}}>
                Symptoms
            </h1>
            <p class="symptomsBody" style={{marginLeft: 75, marginRight: 300, paddingTop: 20}}>    
            All individuals are susceptible to COVID-19 and may display a wide range of symptoms - from being asymptomatic,
            <br>
            </br> 
            to mild symptoms, to severe illness. Common symptoms of COVID-19 include:
            <ul>
                <li>Fever/chills</li>
                <li>Cough</li>
                <li>Shortness of breath and/or difficulty breathing</li>
                <li>Fatigue</li>
                <li>Muscle or body aches</li>
                <li>Headache</li>
                <li>New Loss of taste or smell</li>
                <li>Sore throat</li>
                <li>Congestion</li>
                <li>Runny nose</li>
                <li>Nausea and/or vomiting</li>
                <li>Diarrhea</li>
            </ul>

            If anyone you are displaying these symptoms, seek medical care immediately. Urgent signs of COVID-19 include:
            <ul>
                <li>Trouble breathing</li>
                <li>Chest pain and/or pressure</li>
                <li>Inability to wake or stay awake</li>
                <li>Bluish lips or face</li>
                <li>New confusion</li>
            </ul>


            </p>
            <h1 class="prevention" id="prevention" style={{fontSize:20, marginLeft: 75, paddingTop: 75}}>
                Prevention
            </h1>
            <p class="preventionBody" style={{marginLeft: 75, marginRight: 300, paddingTop: 20}}>
            Some ways to help prevent the spread of COVID-19 include:
                <ul>
                    <li>Wearing a mask over your mouth and nose when going outside and to public places</li>
                    <li>Keeping a distance of at least 6 feet away from others</li>
                    <li>Avoid crowds</li>
                    <li>Avoiding indoor spaces. (If indoors, open windows and doors to increase ventilation.)</li>
                    <li>Clean your hands often by washing and hand sanitizer</li>
                    <li>Receive a COVID vaccination</li>
                    <li>Avoid close contact with people who show symptoms of sickness</li>
                    <li>Cover your mouth when you cough/sneeze</li>
                    <li>Clean and disinfect objects that you touch often</li>
                </ul>
               
            </p>
            <h1 class="treatment" id="treatment" style={{fontSize:20, marginLeft: 75, paddingTop: 75}}>
                Treatment
            </h1>
            <p class="treatmentBody" style={{marginLeft: 75, marginRight: 300, paddingTop: 20}}>
            If you have tested positive for COVID or believe that you may have COVID, follow these recommendations:
            <ul>
                <li>Stay home except to receive medical care</li>
                <li>Monitor your symptoms carefully</li>
                <li>If your symptoms get worse, get emergency help</li>
                <li>Get rest</li>
                <li>Hydrate</li>
                <li>Take over-the-counter medicine (i.e. acetaminophen)</li>
                <li>Stay in a specific room and away from people in the same house as you. If you need to go out, wear a mask.</li>
            </ul>

            </p>
            <h1 class="donation" id="donation" style={{fontSize:20, marginLeft: 75, paddingTop: 75}}>
                Where can I donate to?
            </h1>
            <p class="donationBody" style={{marginLeft: 75, marginRight: 300, paddingBottom: 100}}>
            <Button style={{backgroundColor: "#142448", color:"white", marginLeft:20, marginTop:20, marginBottom:5}} variant="outline-*" href="https://www.covenanthouse.org/">Covenant House</Button>
                <ul>
                    <li>A human rights organization focusing on helping protect youth across the country who are especially at risk during the COVID outbreak.</li>
                </ul>
                <Button style={{backgroundColor: "#142448", color:"white", marginLeft:20, marginTop:10, marginBottom:5}} variant="outline-*" href="https://familypromise.org/donate/">Family Promise</Button>
                <ul>
                    <li>Makes sure families impacted by current economic changes have what they need to stay housed.</li>
                </ul>
                <Button style={{backgroundColor: "#142448", color:"white", marginLeft:20, marginTop:10, marginBottom:5}} variant="outline-*" href="https://www.salvationarmyusa.org/usn/covid19/">Salvation Army</Button>
                <ul>
                    <li>Provides food, utilities, and safe shelter to homeless and disadvantaged people affected by the pandemic and works with local, federal, & medical leaders to provide coronavirus response.</li>
                </ul>
                <Button style={{backgroundColor: "#142448", color:"white", marginLeft:20, marginTop:10, marginBottom:5}} variant="outline-*" href="https://www.habitat.org/covid-19">Habitat for Humanity</Button>
                <ul>
                   <li>Non-profit organization that helps families around the world build or improve their homes. Their priority during the COVID-19 outbreak is to make sure everyone has a safe place to live.</li>
                </ul>
            </p>

        </body>
    </div>;
  }