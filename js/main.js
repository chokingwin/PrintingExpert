/**
 * Created by chokingwin on 2016-07-04.
 */

function SItemClick(obj) {
    var parobj = obj.parentNode.parentNode; //ul
    var pars = parobj.children;            //li
    for (var i = 0; i < pars.length; i++) {
        pars[i].firstChild.className = "";
    }
    obj.className = "selected";
    obj.blur();

    var name = obj.attributes['name'].value;
    var val = obj.attributes['val'].value;
    switch (name){
        case 'qrCode':
            $('.qrCode').hide();
            $('.qrCode').eq(val).show();
            break;
    }
}

$('.contactBar').mouseenter(function(){
    $(this).animate({
        'top': '-198px'
    },'700');
});
$('.contactBar').mouseleave(function(){
    /*$(this).css({
     'top': '20px'
     });*/
    $(this).animate({
        'top': '-255px'
    },'700');
});