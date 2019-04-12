const serverUrl = window.location.host.includes('localhost')
  ? 'http://localhost:8000'
  : 'https://medicine-tracker.herokuapp.com';

export default serverUrl;
