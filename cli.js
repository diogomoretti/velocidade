#!/usr/bin/env node

'use strict'

const meow = require('meow')
const velocidade = require('./')

const cli = meow(`
  Usage
    $ velocidade
`)

velocidade()
