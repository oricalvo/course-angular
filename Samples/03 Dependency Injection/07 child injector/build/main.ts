import * as cli from "build-utils/cli";
import * as process from "build-utils/process";

cli.command("dev", dev);
cli.run();

async function dev() {
    await compileTS();
    await runServer();
    await runBrowser();
}

async function compileTS() {
    //
    //  TS is already compiled by bu
    //
}

async function runServer() {
    process.exec("node_modules/.bin/http-server");
}

async function runBrowser() {
    process.open("http://localhost:8080/index.html");
}

