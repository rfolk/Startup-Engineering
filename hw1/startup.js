#!/usr/bin/env node
var fs      = require( 'fs' ) ;
var outfile = "startup.txt" ;
var out     = "A startup is a business built to grow rapidly.\n" ;
fs.writeFileSync( outfile , out ) ;
console.log( "Script: " + __filename + "\n" ) ;
console.log( "Wrote: " + out + "To: " + outfile ) ;