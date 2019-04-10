# react-tiny-touch

[![forthebadge](http://forthebadge.com/images/badges/uses-git.svg)](http://forthebadge.com)


Touch detection in React for adaptive design.


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

hasTouch: Render children conditionally.

```javascript
 <TinyTouch>{hasTouch => (hasTouch ? <div /> : <span />)}</TinyTouch>
```

### License

MIT
