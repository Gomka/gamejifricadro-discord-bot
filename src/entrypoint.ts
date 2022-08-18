import errorHandler from "errorhandler";
import app from "./App";
import dotenv from "dotenv";
import CreateDiscordClient from "./Server";

dotenv.config();
CreateDiscordClient();
// /**
//  * Error Handler. Provides full stack
//  */
// if (process.env.NODE_ENV === "development") {
//     app.use(errorHandler());
// }


// /**
//  * Start Express server.
//  */
// const entrypoint = app.listen(app.get("port"), () => {
//     console.log(
//         "  App is running at http://localhost:%d in %s mode",
//         app.get("port"),
//         app.get("env")
//     );
//     console.log("  Press CTRL-C to stop\n");
// });

// export default entrypoint;