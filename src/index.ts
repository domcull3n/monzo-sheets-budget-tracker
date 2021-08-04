#!/usr/bin/env node

import index from './callback/index';
import { Command } from 'commander';

const program = new Command();

program.description('monzo-sheets-budget-tracker').action(() => {
    try {
        index();
    } catch (error) {
        console.log('an error has occured, please try again later.');
    }
});

program.parse(process.argv);
