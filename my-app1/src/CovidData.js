import { useEffect, useState } from 'react';
import { getList } from './services/covidService';
import Chart from 'react-apexcharts';

export function CovidData() {
    const [covidData, setList] = useState([]);
  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          console.log(items)
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])
  return (<div>
      <Chart
              series= {covidData}
              options= {{
                chart: {
                  type: 'area',
                  stacked: false,
                  height: 350,
                  zoom: {
                    type: 'x',
                    enabled: true,
                    autoScaleYaxis: true
                  },
                  toolbar: {
                    autoSelected: 'zoom'
                  }
                },
                dataLabels: {
                  enabled: false
                },
                markers: {
                  size: 0,
                },
                title: {
                  text: 'Covid Infections',
                  align: 'center'
                },
                fill: {
                  type: 'solid',
                  gradient: {
                    shadeIntensity: 1,
                    inverseColors: false,
                    opacityFrom: 0.5,
                    opacityTo: 0,
                    stops: [0, 90, 100]
                  },
                },
                yaxis: {
                  title: {
                    text: 'Cases'
                  },
                },
                xaxis: {
                  type: 'datetime',
                }
              }}
            />
  </div>)
}