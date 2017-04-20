#!/usr/bin/env node

'use strict';

const meow = require('meow');
const panini = require('..');

const cli = meow(`
  Usage
    $ panini <input> <output>

  Options
    -w, --watch  Watch for file changes

  Examples
    panini ./src ./dest
`, {
  alias: {
    w: 'watch'
  }
});

if (cli.input.length < 2) {
  cli.showHelp(1);
}

panini(cli.input[0], cli.input[1], cli.flags.watch);
