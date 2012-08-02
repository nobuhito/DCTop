function myGoTop() {
    var goTopMove = 10;
    var yPos = document.body.scrollTop || document.documentElement.scrollTop;
    myMove(yPos, goTopMove);
    return false;
}

function myMove(yPos, goTopMove) {
    var goTopPos;
    goTopPos = parseInt(yPos - yPos * 2 / goTopMove);
    scrollTo(0, goTopPos);
    if (goTopPos > 0) setTimeout(function () {
        myMove(goTopPos, goTopMove);
    }, 1);
}

document.addEventListener('dblclick', function(e) {
    myGoTop();
}, false)
