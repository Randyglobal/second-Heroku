var randy = document.getElementById('seca');
var better = document.getElementById('second');
var Abasty = document.getElementById('third');
var content = document.getElementById('instant');
var context = document.getElementById('Privacy');
var imbia = document.getElementById('safe');
var cori = document.getElementById('build');
var secure = document.getElementById('security');
var manage = document.getElementById('password');
var work = document.getElementById('project');
var itoe = document.getElementById('client');
var kiddy = document.getElementById('sever');
var private = document.getElementById('access');
var set = document.getElementById('tool');
var logo = document.getElementById('place');
var bill = document.getElementById('in');
var hunder = document.getElementById('check');
var password = document.getElementById('manager');
work.style.display = 'flex';
itoe.style.display = 'none';
kiddy.style.display = 'none'
private.style.display = 'flex';
set.style.display = 'none';
logo.style.display = 'none';
bill.style.display = 'flex';
hunder.style.display = 'none';
password.style.display = 'none'



randy.addEventListener('click', function(){
    if (work.style.display == 'none'){
        work.style.display = 'flex';
        itoe.style.display = 'none' ;
        kiddy.style.display = 'none' ;
    }else{
        work.style.display = 'none';
    }

})


better.addEventListener('click', function(){
    if (itoe.style.display == 'none'){
        itoe.style.display = 'flex';
        work.style.display = 'none';
        kiddy.style.display = 'none' ;
    }else{
        itoe.style.display = 'none';
        itoe.style.position = 'absolute';
    }

})

Abasty.addEventListener('click', function(){
    if (kiddy.style.display == 'none'){
        kiddy.style.display = 'flex';
        work.style.display = 'none';
        itoe.style.display = 'none' ;
    }else{
        kiddy.style.display = 'none';
        kiddy.style.position = 'absolute';
    }

})


content.addEventListener('click', function(){
    if (private.style.display == 'none'){
        private.style.display = 'flex';
    }else{
        private.style.display = 'none';
    }

})


context.addEventListener('click', function(){
    if (set.style.display == 'none'){
        set.style.display = 'flex';
    }else{
        set.style.display = 'none';
        set.style.position = 'absolute';
    }

})

imbia.addEventListener('click', function(){
    if (logo.style.display == 'none'){
        logo.style.display = 'flex';
    }else{
        logo.style.display = 'none';
        logo.style.position = 'absolute';
    }

})

cori.addEventListener('click', function(){
    if (bill.style.display == 'none'){
        bill.style.display = 'flex';
    }else{
        bill.style.display = 'none';
    }

})


secure.addEventListener('click', function(){
    if (hunder.style.display == 'none'){
        hunder.style.display = 'flex';
    }else{
        hunder.style.display = 'none';
        hunder.style.position = 'absolute';
    }

})

manage.addEventListener('click', function(){
    if (password.style.display == 'none'){
        password.style.display = 'flex';
    }else{
        password.style.display = 'none';
        password.style.position = 'absolute';
    }

})

