A simple backbone inspired, coffee compatible class object for node.js and the browser.

```javascript
Class = require( 'class-con-leche' );

Walrus = Class.extend( {
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