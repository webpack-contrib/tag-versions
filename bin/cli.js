#!/usr/bin/env node
// This file has to exist as npm will try to chmod it when installing.
const argv = require('yargs').argv;

const compVer = require('../lib');

compVer.compare(argv.name, argv.gte, argv.lt);
