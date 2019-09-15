// Add animaitions to the website title (browser tab)

module.exports = () => {
    var
    _doc  = document,
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
