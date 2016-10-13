// Fancy functions contains any function that is made just for fun, a playground.
// Cancel the functions from the project, and it will work anyway, but without swag :(


var
fancy_functions = function(){
	// Same Data as manifest.js on project root
    sayHello('Aitor - Interactive resume', "#163b63");
    animateTitle_pet();
},

// http://codepen.io/SamEureka/pen/GZVJvE?editors=0010
// Check the console
sayHello = function(console_text, color){
	var
    css_shadow = '',
    lum = 0,
	hex = String(color).replace(/[^0-9a-f]/gi, ''),
	rgb = '',
    c   = null,
    i   = 0;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}


	for(i=-1; i<5; i++){
		css_shadow += i +'px '+ i +'px hsl('+ (200 + (5 * i)) +', 100%, 50%),';
	}
	css_shadow = css_shadow.slice(0, -1); //remove last coma

	var css = 'text-shadow: '+ css_shadow +';font-size: 50px; color: '+ color +';';
	console.log('%c %s', css, '\ud83c\udf10 '+ console_text);
},
// Add animaitions to the website title (browser tab)
animateTitle_pet = function(){
	var
    title = _doc.title,
    index = 0,
	pet   = [
		"┏(^-^)┓",
		"┗(^-^)┓",
		"┏(^-^)┓",
		"┏(^o^)┛",
		"┗(^-^)┛",
		"┗(^-^)┛",
		"┗(^o^)┛",
		"┏(^o^)┓",
		"┗(^o^)┛",
		"┏(^o^)┓"
	],
    pet_length = pet.length;

    setInterval(function(){
        index      = (index < pet_length-1) ? (index + 1) : 0;
		_doc.title = title + pet[index];
    }, 400);
};
