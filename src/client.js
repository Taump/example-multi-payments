import obyte from "obyte";

const environment = 'testnet';

export default new obyte.Client(
  environment === 'devnet' ? 'ws://localhost:6611' : `wss://obyte.org/bb${environment === 'testnet' ? "-test" : ""}`,
  {
    testnet: environment === 'testnet',
    reconnect: true,
  }
);