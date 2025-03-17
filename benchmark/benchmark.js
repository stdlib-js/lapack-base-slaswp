/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var uniform = require( '@stdlib/random-array-uniform' );
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var isnanf = require( '@stdlib/math-base-assert-is-nanf' );
var pow = require( '@stdlib/math-base-special-pow' );
var floor = require( '@stdlib/math-base-special-floor' );
var pkg = require( './../package.json' ).name;
var slaswp = require( './../lib/slaswp.js' );


// VARIABLES //

var LAYOUTS = [
	'row-major',
	'column-major'
];


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {string} order - storage layout
* @param {PositiveInteger} N - number of elements along each dimension
* @param {PositiveInteger} nrows - number of rows to interchange
* @returns {Function} benchmark function
*/
function createBenchmark( order, N, nrows ) {
	var IPIV;
	var A;

	IPIV = discreteUniform( nrows, 0, N-1, {
		'dtype': 'int32'
	});
	A = uniform( N*N, -10.0, 10.0, {
		'dtype': 'float32'
	});
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var z;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			z = slaswp( order, N, A, N, 0, nrows-1, IPIV, 1 );
			if ( isnanf( z[ i%z.length ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnanf( z[ i%z.length ] ) ) {
			b.fail( 'should not return NaN' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var min;
	var max;
	var ord;
	var N;
	var f;
	var i;
	var j;
	var k;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( k = 0; k < LAYOUTS.length; k++ ) {
		ord = LAYOUTS[ k ];
		for ( i = min; i <= max; i++ ) {
			N = floor( pow( pow( 10, i ), 1.0/2.0 ) );
			j = 1;
			while ( j <= N ) {
				f = createBenchmark( ord, N, j );
				bench( pkg+'::square_matrix:order='+ord+',nrows='+j+',size='+(N*N), f );
				j *= 2;
			}
		}
	}
}

main();
