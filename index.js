// Local Dependencies.
const app  = require("./src/server/index");
const sequelize = require("./src/database/index");


// Models Import.
const User = require("./src/database/model/user.model");

// Default Port.
const PORT = process.env.PORT || 3001;

// Main Function of the Server.
function main() {
    // Put the Server to Listen.
    app.listen(PORT, async () => {
        // Data Syncronization.
        await sequelize.sync({ force: false });
        // Listening Verify.
        console.log(`server listening on http://localhost:${PORT}`);

    });
}

// Execution Server.
main();
