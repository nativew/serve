#!/usr/bin/env node
import { start } from './index.js';

const root = process.argv[2];
const args = { live: false, root };

const port = process.argv[3];
if (port) {
	args.port = port;
}

const host = process.argv[4];
if (host) {
	args.host = host;
}

start(args);
