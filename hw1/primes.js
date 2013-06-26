#!/usr/bin/env node
/**
	*	Will calculate the prime numebers from 1 to n
	*/

var fs    = require( 'fs' ) ;
var file  = "primes.txt" ;
var n     = 100 ;
var top   = n * n ;

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
