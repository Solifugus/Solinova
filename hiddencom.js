
class HiddenCom {
	constructor( minLength = 10, maxLength = 15, minChar = 32, maxChar = 126 ) {
		this.minLength = minLength;
		this.maxLength = maxLength;
		this.minChar   = minChar;
		this.maxChar   = maxChar;
		this.peers     = [];        // each: {id:'..', key:'..', method:'..'}
	}

	// Returns a clear-key request and a member half: {P:n,G:n,codes:[a,..]}
	keyRequest() {
		var p       = this.randomPrime();   // any random prime
		var g       = this.randomPrime(p);  // any other random prime 
		var codes   = [];  // array of request's actual key codes
		var modulus = [];  // array of each (code * p) % g 
		var length = this.randomInteger(this.minLength,this.maxLength);
		for( var k = 0; k < length; k += 1 ) {
			let code = this.randomInteger(this.minChar,this.maxChar);
			codes.push(code);
			modulus.push( (p*code) % g );
		}
		return { p:p, g:g, codes:codes, modulus:modulus }
		
	}	

	// Returns clear-key reply and a new member secret key
	keyReply(request) {
		XX
	}

	cipher( id, message = '' ) {
	}

	decipher( id, message = '' ) {
	}

	randomPrime( not = 0 ) {
		var prime = 1;
		while( prime !== not && !this.isPrime(prime) ) prime = this.randomInteger(3,9679);
		return prime;
	}

	isPrime(number) {
		var start = 2;
		while (start <= Math.sqrt(number)) {
			if (number % start++ < 1) return false;
		}
		return number > 1;
	}

	randomInteger(min,max) {
		return Math.floor(Math.random()*(max-min+1)+min);
	}

}

var com = new HiddenCom();
var keyRequest = com.keyRequest();
console.log(keyRequest);

