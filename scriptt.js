let flights = [];
let scheduled = [];

function addFlight() {
    const id = fid.value;
    const s = parseInt(start.value);
    const e = parseInt(end.value);

    flights.push({ id, s, e });
    displayFlights();
}

function displayFlights() {
    flightList.innerHTML = "";
    flights.forEach(f =>
        flightList.innerHTML += `<li>${f.id}: ${f.s} - ${f.e}</li>`
    );
}

function schedule() {
    scheduled = [];
    flights.sort((a, b) => a.e - b.e);

    let lastEnd = -1;
    flights.forEach(f => {
        if (f.s >= lastEnd) {
            scheduled.push(f);
            lastEnd = f.e;
        }
    });

    result.innerHTML = "";
    scheduled.forEach(f =>
        result.innerHTML += `<li style="color:green">${f.id}: ${f.s}-${f.e}</li>`
    );
}

function searchFlight() {
    const key = searchId.value;
    const found = scheduled.find(f => f.id === key);

    searchResult.innerText = found
        ? "Flight Scheduled ✔"
        : "Flight Not Scheduled ✖";
}
