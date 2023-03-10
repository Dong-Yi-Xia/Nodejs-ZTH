const API_URL = 'http://localhost:8000';

async function httpGetPlanets() {
  // TODO: Once API is ready.
  // Load planets and return as JSON.
  // The server is running on PORT 8000
  const response = await fetch(`${API_URL}/planets`);
  return await response.json();
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
  // Can do sorting on either the frontend or backend
  const response = await fetch(`${API_URL}/launches`);
  const fetchLaunches = await response.json();
  return fetchLaunches.sort((a,b) => {
    return a.flightNumber - b.flightNumber
  })
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
