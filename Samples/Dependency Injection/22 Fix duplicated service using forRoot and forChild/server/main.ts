import * as path from "path";
import * as express from "express";

const app = express();

app.use(express.static(path.join(__dirname, "..")));

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
});

const port = parseInt(process.argv[2]) || 8080;

app.listen(port, function() {
    console.log("Server is running on port " + port);
});
