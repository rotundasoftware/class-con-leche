A simple backbone inspired, coffee compatible class object for node.js and the browser.

Commonjs only - use [browserify](https://github.com/substack/node-browserify) or [cartero](https://github.com/rotundasoftware/cartero)) for the browse

```javascript
Class = require( 'class-con-leche' );

Walrus = Class.extend( {
	initialize : function() {
		// called when class instance is created
		console.log( 'I am a baby walrus' );
	},

	helloWorld : function() {
		console.log( 'I am a walrus' );
	}
} );

AngryWalrus = Class.extend( {
	helloWorld : function() {
		Walrus.prototype.myFunction(); // call super.. no syntactical sugar here.

		console.log( 'Get lost!' );
	}
} );
```