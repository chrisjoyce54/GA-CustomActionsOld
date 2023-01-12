const core = require('@actions/core');
const gihub = require('@actions/github');
const exec =  require('@actions/exec');

function run() {
    core.notice('Hello from js action!');
}

run();
