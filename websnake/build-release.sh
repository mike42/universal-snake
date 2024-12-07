#!/bin/bash
set -exu -o pipefail

if [ ! -d venv/ ]; then
  # set up venv
  python3 -m venv venv/
  ./venv/bin/pip install htmlark[http,parsers]
fi

./venv/bin/htmlark src/index.html -o dist/websnake.html
