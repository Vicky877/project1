document.body.addEventListener('keydown', function(e) {
    var keycode = e.keyCode;
    switch (keycode) {
        case 65:
            var btn = document.getElementById('a');
            btn.classList.add('button1');
            var audio = document.getElementById('my');
            audio.play();
            if (document.body.addEventListener('keyup', function() {
                    var btn = document.getElementById('a');
                    btn.classList.remove('button1');
                    var audio = document.getElementById('my');
                    audio.pasue();
                    audio.currentTime = 0;
                }));
            break;
        case 83:
            var secbtn = document.getElementById('s');
            secbtn.classList.add('button1');
            var sec = document.getElementById('second');
            sec.play();
            if (document.body.addEventListener('keyup', function() {
                    var secbtn = document.getElementById('s');
                    secbtn.classList.remove('button1');
                    var sec = document.getElementById('my');
                    sec.pasue();
                }));
            break;
        case 68:
            var thbtn = document.getElementById('d');
            thbtn.classList.add('button1');
            var thrid = document.getElementById('third');
            thrid.play();
            if (document.body.addEventListener('keyup', function() {
                    var thbtn = document.getElementById('d');
                    thbtn.classList.remove('button1');
                    var thrid = document.getElementById('my');
                    thrid.pasue();
                }));
            break;

        case 70:
            var thbtn = document.getElementById('f');
            thbtn.classList.add('button1');
            var fouth = document.getElementById('fouth');
            fouth.play();
            if (document.body.addEventListener('keyup', function() {
                    var thbtn = document.getElementById('f');
                    thbtn.classList.remove('button1');
                    var fouth = document.getElementById('my');
                    fouth.pasue();
                }));
            break;
        case 71:
            var ftbtn = document.getElementById('g');
            ftbtn.classList.add('button1');
            var fiveth = document.getElementById('fiveth');
            fiveth.play();
            if (document.body.addEventListener('keyup', function() {
                    var btn = document.getElementById('g');
                    btn.classList.remove('button1');
                    var fiveth = document.getElementById('my');
                    fiveth.pasue();
                }));
            break;
        case 72:
            var ftbtn = document.getElementById('h');
            ftbtn.classList.add('button1');
            var sixth = document.getElementById('sixth');
            sixth.play();
            if (document.body.addEventListener('keyup', function() {
                    var btn = document.getElementById('h');
                    btn.classList.remove('button1');
                    var sixth = document.getElementById('my');
                    sixth.pasue();
                    sixth.currentTime = 0;
                }));
            break;
        case 74:
            var seth = document.getElementById('j');
            seth.classList.add('button1');
            var seveth = document.getElementById('seveth');
            seveth.play();
            if (document.body.addEventListener('keyup', function() {
                    var btn = document.getElementById('j');
                    btn.classList.remove('button1');
                    var seveth = document.getElementById('my');
                    seveth.pasue();
                }));
            break;
        case 75:
            var seth = document.getElementById('k');
            seth.classList.add('button1');
            var seveth = document.getElementById('egith');
            seveth.play();
            if (document.body.addEventListener('keyup', function() {
                    var btn = document.getElementById('k');
                    btn.classList.remove('button1');
                    var seveth = document.getElementById('my');
                    seveth.pasue();
                }));
            break;
        case 76:
            var seth = document.getElementById('l');
            seth.classList.add('button1');
            var seveth = document.getElementById('nine');
            seveth.play();
            if (document.body.addEventListener('keyup', function() {
                    var btn = document.getElementById('l');
                    btn.classList.remove('button1');
                    var seveth = document.getElementById('my');
                    seveth.pasue();
                }));
            break;
        default:
            alert("Press the listed key A S D F G H J K L only");
            break;

    }
});