import http, {
  IncomingMessage,
  ServerResponse
} from "http";

const server = http.createServer(
  (
    req: IncomingMessage,
    res: ServerResponse
  ) => {

    console.log(req.url);

    res.end("Hello TypeScript");
  }
);

server.listen(3000, () => {
  console.log(
    "Server running on port 3000"
  );
});