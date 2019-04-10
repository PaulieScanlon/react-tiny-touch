# react-tiny-touch

[![forthebadge](http://forthebadge.com/images/badges/uses-git.svg)](http://forthebadge.com)


Touch detection in React for adaptive design.

TinyTouch checks if `'ontouchstart' in window`, it's not 100% reliable though, more info from Modernizr [You Can't Detect A Touchscreen](http://www.stucox.com/blog/you-cant-detect-a-touchscreen/)


### Install

```sh
npm install react-tiny-touch --save
```


### Useage

Simple: Render children.

```javascript
  <TinyTouch>
    <div/>
  </TinyTouch>
```

hasTouch: Renders children conditionally.

```javascript
 <TinyTouch>{hasTouch => (hasTouch ? <div /> : <span />)}</TinyTouch>
```

### Change Log
For changes between 1.x.x and 2.x.x see the change log [here](./CHANGELOG.MD)

### License

Copyright 2019 Paul Scanlon

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
