A simple backbone inspired, coffee compatible class object for node.js and the browser.

* No bs, and no dependencies. Just the basics.
* Compatible with CommonJS, AMD, and browser global style modules.

```javascript
Class = require( 'class-con-leche' );

Walrus = Class.extend( {
	initialize : function() {
		// initialize is called when class instance is created
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

## License

MIT