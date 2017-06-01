import * as cli from "build-utils/cli";
import * as process from "build-utils/process";
import {getFreePort} from "build-utils/http";

cli.command("dev", dev);
cli.run();

async function dev() {
    const port = await getFreePort();

    console.log("Detected free port: " + port);

    await runServer(port);
    await runBrowser(port);
}

async function runServer(port) {
    process.exec(`node server/main.js ${port}`);
}

async function runBrowser(port) {
    process.open(`http://localhost:${port}/index.html`);
}
