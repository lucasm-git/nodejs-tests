       // npm install chalk
var chalk = require( "chalk" );
            // npm install kirby-dance
var kirbyDance = require( "kirby-dance" );

function hello( recipient ) {
    console.log( "Hello " + recipient + "!" );
    console.log( chalk.blue( "Hello " + recipient + "!" ) );
    console.log( chalk.black.bgGreen( "Yelloooo" ) );
    console.log(  chalk.white.bgBlue( "threbr" ));
}

hello("Sami");
hello("Lucas");
hello("Nizar");

console.log( kirbyDance( 7 ) );
console.log( chalk.red( kirbyDance( -3 ) ) );