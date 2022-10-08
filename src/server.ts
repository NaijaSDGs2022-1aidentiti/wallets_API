//src/server.ts

import app from "./app";
import { PORT } from "./constants/constants";

app.listen(process.env.PORT||PORT, () => console.log(`Listening on port ${PORT}`));
