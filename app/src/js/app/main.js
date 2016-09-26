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
    opener       = _doc.querySelector('.menu-opener'),
    menu         = _doc.querySelector('.menu-wrap'),
    firstSection = _doc.getElementById('profile');

    if (opener && menu){
        opener.addEventListener('click', function(){
            opener.classList.toggle('active');
            menu.classList.toggle('active');
        });
    }

    _win.onscroll = function(){
        if (_win.scrollY > profile.offsetTop){
            opener.classList.remove('hidden');
            menu.classList.remove('hidden');
        }else{
            opener.classList.add('hidden');
            menu.classList.add('hidden');
        }
    }
};


_doc.addEventListener('DOMContentLoaded', init);
_win.addEventListener('resize', resize);
