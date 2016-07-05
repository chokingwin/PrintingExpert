/**
 * Created by chokingwin on 2016-07-04.
 */
var onePContent = {
    top:0,
    bottom:1
};

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

    $('.qrCode').hide();
    $('.qrCode').eq(val).show();
}
function SItemClickDouble(obj) {
    var parobj = obj.parentNode.parentNode; //ul
    var pars = parobj.children;            //li
    for (var i = 0; i < pars.length; i++) {
        pars[i].firstChild.className = "";
    }
    obj.className = "selected";
    obj.blur();
    var name = obj.attributes['name'].value;
    var val = obj.attributes['val'].value;
    onePContent[name] = val;

    $('.calc .content').hide();
    if(onePContent.top == 0 && onePContent.bottom == 0){
        $('.calc .content').eq(0).show();
    }else if(onePContent.top == 0 && onePContent.bottom == 1){
        $('.calc .content').eq(1).show();
    }else if(onePContent.top == 1 && onePContent.bottom == 0){
        $('.calc .content').eq(2).show();
    }else{
        $('.calc .content').eq(3).show();
    }
}

function calc(obj){
    var price = obj.attributes['val'].value;
    var inputTag = obj.parentNode.children[0].children[1];
    var allPriceTag = obj.parentNode.children[1];
    var allPrice = inputTag.value * parseFloat(price);
    allPriceTag.innerHTML = allPrice;
    console.log(input.tagName);
}

$('.contactBar').mouseenter(function(){
    $(this).animate({
        'top': '-198px'
    },'700');
});
$('.contactBar').mouseleave(function(){
    $(this).animate({
        'top': '-255px'
    },'700');
});