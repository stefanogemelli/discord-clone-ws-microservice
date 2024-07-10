import { Server } from "socket.io";
import { config } from "dotenv";
config();

const { PORT, FRONT_END_URL } = process.env;

const io = new Server({
  cors: {
    origin: FRONT_END_URL,
    credentials: true,
  },
});

io.on("connection", (socket) => {
  socket.on("broadcast", (channelKey, data) => {
    io.emit(channelKey, data);
  });
});

io.listen(PORT);
