<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# slaswp

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Perform a series of row interchanges on an input matrix.



<section class="usage">

## Usage

```javascript
import slaswp from 'https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base-slaswp@esm/index.mjs';
```

#### slaswp( N, A, LDA, k1, k2, IPIV, incx )

Performs a series of row interchanges on an input matrix `A` using pivot indices stored in `IPIV`.

```javascript
import Int32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@esm/index.mjs';
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ); // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
var IPIV = new Int32Array( [ 2, 0, 1 ] );

slaswp( 'row-major', 2, A, 2, 0, 2, IPIV, 1 );
// A => <Float32Array>[ 3.0, 4.0, 1.0, 2.0, 5.0, 6.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **N**: number of columns in `A`.
-   **A**: input matrix stored in linear memory as a [`Float32Array`][mdn-Float32Array].
-   **LDA**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).
-   **k1**: index of first row to interchange when `incx` is positive and the index of the last row to interchange when `incx` is negative.
-   **k2**: index of last row to interchange when `incx` is positive and the index of the first row to interchange when `incx` is negative.
-   **IPIV**: vector of pivot indices as an [`Int32Array`][mdn-int32array]. Must contain at least `k1+(k2-k1)*abs(incx)` elements. Only the elements in positions `k1` through `k1+(k2-k1)*abs(incx)` are accessed.
-   **incx**: increment between successive values of `IPIV`. Elements from `IPIV` are accessed according to `IPIV[k1+(k-k1)*abs(incx)] = j`, thus implying that rows `k` and `j` should be interchanged. If `incx` is negative, the pivots are applied in reverse order.

The sign of the increment parameter `incx` determines the order in which pivots are applied. For example, to apply pivots in reverse order,

```javascript
import Int32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@esm/index.mjs';
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ); // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
var IPIV = new Int32Array( [ 2, 0, 1 ] );

slaswp( 'row-major', 2, A, 2, 0, 2, IPIV, -1 );
// A => <Float32Array>[ 3.0, 4.0, 1.0, 2.0, 5.0, 6.0 ]
```

To perform strided access over `IPIV`, provide an `abs(incx)` value greater than one. For example, to access every other element in `IPIV`,

```javascript
import Int32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@esm/index.mjs';
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ); // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
var IPIV = new Int32Array( [ 2, 999, 0, 999, 1 ] );

slaswp( 'row-major', 2, A, 2, 0, 2, IPIV, 2 );
// A => <Float32Array>[ 3.0, 4.0, 1.0, 2.0, 5.0, 6.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Int32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@esm/index.mjs';
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

// Initial arrays...
var A0 = new Float32Array( [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var IPIV0 = new Int32Array( [ 0, 2, 0, 1] );

// Create offset views...
var A1 = new Float32Array( A0.buffer, A0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var IPIV1 = new Int32Array( IPIV0.buffer, IPIV0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

slaswp( 'row-major', 2, A1, 2, 0, 2, IPIV1, 1 );
// A0 => <Float32Array>[ 0.0, 3.0, 4.0, 1.0, 2.0, 5.0, 6.0 ]
```

#### slaswp.ndarray( N, A, sa1, sa2, oa, k1, k2, inck, IPIV, si, oi )

Performs a series of row interchanges on the matrix `A` using pivot indices stored in `IPIV` and alternative indexing semantics.

```javascript
import Int32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@esm/index.mjs';
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ); // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
var IPIV = new Int32Array( [ 2, 0, 1 ] );

slaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 );
// A => <Float32Array>[ 3.0, 4.0, 1.0, 2.0, 5.0, 6.0 ]
```

The function has the following additional parameters:

-   **N**: number of columns in `A`.
-   **A**: input matrix stored in linear memory as a [`Float32Array`][mdn-float32array].
-   **sa1**: stride of the first dimension of `A`.
-   **sa2**: stride of the second dimension of `A`.
-   **oa**: starting index for `A`.
-   **k1**: index of first row to interchange when `inck` is positive and the index of the last row to interchange when `inck` is negative.
-   **k2**: index of last row to interchange when `inck` is positive and the index of the first row to interchange when `inck` is negative.
-   **inck**: direction in which to apply pivots (-1 to apply pivots in reverse order; otherwise, apply in provided order).
-   **IPIV**: vector of pivot indices as an [`Int32Array`][mdn-int32array].
-   **si**: index increment for `IPIV`.
-   **oi**: starting index for `IPIV`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

<!-- eslint-disable max-len -->

```javascript
import Int32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@esm/index.mjs';
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var A = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var IPIV = new Int32Array( [ 0, 0, 2, 0, 1 ] );

slaswp.ndarray( 2, A, 2, 1, 4, 0, 2, 1, IPIV, 1, 2 );
// A => <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 3.0, 4.0, 1.0, 2.0, 5.0, 6.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Both functions access `k2-k1+1` elements from `IPIV`.
-   While `slaswp` conflates the order in which pivots are applied with the order in which elements in `IPIV` are accessed, the `ndarray` method delineates control of those behaviors with separate parameters `inck` and `si`.
-   `slaswp()` corresponds to the [LAPACK][LAPACK] function [`slaswp`][lapack-slaswp].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import Int32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@esm/index.mjs';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-to-array@esm/index.mjs';
import slaswp from 'https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base-slaswp@esm/index.mjs';

// Specify matrix meta data:
var shape = [ 4, 2 ];
var strides = [ 1, 4 ];
var offset = 0;
var order = 'column-major';

// Create a matrix stored in linear memory:
var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
console.log( ndarray2array( A, shape, strides, offset, order ) );

// Define a vector of pivot indices:
var IPIV = new Int32Array( [ 2, 0, 3, 1 ] );

// Interchange rows:
slaswp( order, shape[ 1 ], A, strides[ 1 ], 0, shape[ 0 ]-1, IPIV, 1 );
console.log( ndarray2array( A, shape, strides, offset, order ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/lapack-base-slaswp.svg
[npm-url]: https://npmjs.org/package/@stdlib/lapack-base-slaswp

[test-image]: https://github.com/stdlib-js/lapack-base-slaswp/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/lapack-base-slaswp/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/lapack-base-slaswp/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/lapack-base-slaswp?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/lapack-base-slaswp.svg
[dependencies-url]: https://david-dm.org/stdlib-js/lapack-base-slaswp/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/lapack-base-slaswp/tree/deno
[deno-readme]: https://github.com/stdlib-js/lapack-base-slaswp/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/lapack-base-slaswp/tree/umd
[umd-readme]: https://github.com/stdlib-js/lapack-base-slaswp/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/lapack-base-slaswp/tree/esm
[esm-readme]: https://github.com/stdlib-js/lapack-base-slaswp/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/lapack-base-slaswp/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/lapack-base-slaswp/main/LICENSE

[lapack]: https://www.netlib.org/lapack/explore-html/

[lapack-slaswp]: https://www.netlib.org/lapack/explore-html/d1/d7e/group__laswp_ga0c231ab9280d3cf32c10855ae741fc00.html#ga0c231ab9280d3cf32c10855ae741fc00

[mdn-float32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array

[mdn-int32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
