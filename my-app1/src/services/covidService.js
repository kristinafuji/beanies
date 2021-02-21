export function getList() {
    return fetch('http://localhost:8181/count')
       .then(data => data.json())
        .then(data => {
            let new_posCases = []
            let new_susCases = []
            let new_totalCases = []
         data.forEach(entry => {
             new_posCases.push({x: entry.date, y: entry.newPosCases})
             new_susCases.push({x: entry.date, y: entry.newSusCases})
             new_totalCases.push({x: entry.date, y: entry.cumTotal})
         })
         return [{name:"Positive Cases", data:new_posCases}, {name:"Suspected Cases", data:new_susCases}, {name:"Total Cases", data:new_totalCases}]
        })
  }