#!/usr/bin/env node
/**
  * Will calculate the first "n" prime numbers
  * Uses the Sieve of Eratosthenes to find them
  * To find the "top value possible" I researched and it seems that the ceiling
  * of n * ln( n ) * ln( n ) will give you a reasonable stopping point. It is
  * not the tightest ceiling but it is far better than n^2.
  */

var fs    = require( 'fs' ) ;
var file  = "primes.txt" ;
var n     = 100 ;
var top   = Math.ceil( n * Math.log( n ) * Math.log( n ) ) ;
//  Research shows that this top should provide a maximum for all primes

var i , primes = [] , found = 0 , num = 2 ;

var i , j , num = [] ;
for ( i = 0 ; i < top ; i ++ )
  num[ i ] = true ;
for ( i = 2 ; found < n ; i ++ )
{
  if ( num[ i ] == true )
  {
    fs.writeFileSync( file , i , { 'flag' : 'a' } ) ;
    found ++ ;
    if ( found < n )
      fs.writeFileSync( file , "," , { 'flag' : 'a' } ) ;
    for ( j = i * i ; j < top ; j += i )
      num[ j ] = false ;
  }
}
fs.writeFileSync( file , "\n" , { 'flag' : 'a' } ) ;

console.log( "Script: " + __filename + "\n" ) , i = 2 ;
console.log( "Recorded all primes to '" + n + "' in '" + file + "'." ) ;
