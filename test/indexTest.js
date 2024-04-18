require ( './helpers.js' );

const sinon = require( 'sinon' )

describe( 'index.js', () => {
  let spy;

  beforeEach( () => {
    spy = sinon.spy( console, 'log' );
  } );

  afterEach( () => {
    spy.restore();
  } );

  describe( 'writeCards()', () => {

    it( 'returns an array of thank you messages for each name provided to the function', () => {
      expect(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")).to.deep.eq([
        "Thank you, Guadalupe, for the wonderful surprise gift!",
        "Thank you, Ollie, for the wonderful surprise gift!",
        "Thank you, Aki, for the wonderful surprise gift!",
      ]);
    } );
  } );

  describe( 'countDown()', () => {
    afterEach( () => {
      spy.restore();
    } );

    it( 'invokes console.log once for each number, counting down from the number provided to zero', () => {
      countDown( 10 );
      expect( spy.callCount, "Expected countDown(10) to invoke 11 console.logs" )
        .to.eq( 11 );
    } );

    it( 'logs each number when counting down, starting from the number provided', () => {
      countDown( 4 );
      expect( spy.calledWithExactly( 4 ), "Expected countDown(4) to log 4 first" )
        .to.be.true;
      expect( spy.calledWithExactly( 3 ), "Expected countDown(4) to log 3 after 4" )
        .to.be.true;
      expect( spy.calledWithExactly( 2 ), "Expected countDown(4) to log 2 after 3" )
        .to.be.true;
      expect( spy.calledWithExactly( 1 ), "Expected countDown(4) to log 1 after 2" )
        .to.be.true;
      expect( spy.calledWithExactly( 0 ), "Expected countDown(4) to log 0 after 1" )
        .to.be.true;
    } );
  } );
} );


// for ([initialization]; [condition]; [iteration]) {
//   [loop body]
// }
// // [initialization] used to initaialize a counter variable
// let age = 30 (we're creating a variable, age)
// // [condition] an expresseion evaluated through each pass of the loop- if true the statement in the loop body are executed. if false, the loop exits 
// age < 40 (run code in the loop until the age is not less than 40)
// // [iteration] expression executed at the end of each iteration.involves incrementing or decrementing a counter, bringing the loop closer to completion
// age++ (increases year by 1 aafter every pass through the loop)
// // [loop body] code thta runs on each pass through the loop 
// set of statement s that we want to run when the condition evaluates to  true


// for(let age = 30; age < 40; age++) {
//   console.log (`I'm ${age} years old. Happy birthday to me!`);
// }
// // use let instead of const because we need to increment the value of age.

// Using for with Arrays

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards()




