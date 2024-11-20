import { app } from "./app";

const port = app.get("port");

const server = app.listen(port, onListening);

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr?.port}`;
  console.log(`Listening on ${bind}`);
}

export default server;
