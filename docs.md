# Swoader
## What is Swoader.js
<pre>Simple Preloader JS library</pre>

<br>

# Usage
## for importing
***Javascript***
```html
<script src="https://chigozie-coder.github.io/Swoader/Swoader.js"></script>
```
## for initializing
```javascript
var swoader = new Swoader();
swoader.start();
```
## For Styling
```javascript
var swoader = new Swoader(color,size,bg)
swoader.start();
```
## to set time to remove add this
```javascript
swoader.removeWhenLoaded(time in ms);
```
## To remove it when the window has loaded
```javascript
swoader.removeWhenWindowLoaded();
```
## To add a loading text
```javascript
swoader.addText(text, size,color);
```
## To animate text
```javascript
swoader.animateText();
```
## To display text instead of loader
```javascript
swoader.displayOnlyText();
```
