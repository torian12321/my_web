var
_doc = document,
_win = window,
init = function(){
    menu_func();
    smoothScrolling();
    //fitContentOnScreen();
    fancy_functions();
},
resize = function(){
    //fitContentOnScreen();
},
menu_func = function(){
    var
    opener = _doc.querySelector('.menu-opener'),
    menu   = _doc.querySelector('.menu-wrap');

    opener.addEventListener('click', function(){
        opener.classList.toggle('active');
        menu.classList.toggle('active');
    });
};


_doc.addEventListener('DOMContentLoaded', init);
_win.addEventListener('resize', resize);
