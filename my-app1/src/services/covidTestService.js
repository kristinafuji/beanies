export function getList1(zipCode) {
    console.log(typeof zipCode)
    return fetch(`http://localhost:8181/locations?zipcode=${zipCode}`)
    .then(data => data.json())
}