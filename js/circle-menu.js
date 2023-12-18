var items = document.querySelectorAll('.circle-menu-box a.menu-item');
var container = document.querySelector('.container');

var radius = container.offsetWidth / 2 * 0.7;
var angleIncrement = 2 * Math.PI / items.length;
window.onresize = function() {
    radius = container.offsetWidth / 2 * 0.7;
    positionItems();
};
positionItems();

function positionItems() {
    var items = document.querySelectorAll('.circle-menu-box a.menu-item'); // Re-query the items
    var angleIncrement = 2 * Math.PI / items.length;

    for (var i = 0; i < items.length; i++) {
        var angle = angleIncrement * i - Math.PI / 2;
        items[i].style.left = `calc(50% + ${radius * Math.cos(angle)}px - ${items[i].offsetWidth / 2}px)`;
        items[i].style.top = `calc(50% + ${radius * Math.sin(angle)}px - ${items[i].offsetHeight / 2}px)`;
    }
}
