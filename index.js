// Local Dependencies.
const app = require("./src/server/index");
const sequelize = require("./src/database/index");
const dotenv = require("dotenv");
dotenv.config();


// Models Import.
require("./src/database/model/relationships.js");

// Default Port.
const PORT = process.env.PORT || 3001;

// Main Function of the Server.
function main() {
    // Put the Server to Listen.
    app.listen(PORT, async () => {
        // Data Syncronization.
        await sequelize.sync({ force: false });
        if (process.env.DEBUG === "true") {
            // Listening Verify.
            console.log(`server listening on http://localhost:${PORT}`);
        } else {
            console.log(`server listening on https://server-sommeliers.onrender.com:${PORT}`);
        }
    });
}

// Execution Server.
main();
