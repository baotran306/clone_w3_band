const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
var header = document.getElementById('header')
var headerHeight = header.clientHeight

// mobileMenuBtn.addEventListener('click', function(){
    
// })

mobileMenuBtn.onclick = function() {
    var isClose = header.clientHeight === headerHeight
    if (isClose) {
        header.style.height = 'auto'
    }
    else {
        header.style.height = null
    }

}

// auto close after event click menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
for(var i=0; i<menuItems.length; i++){
    var menuItem = menuItems[i]
    menuItem.onclick = function() {
        header.style.height = null
        header.style.backgroundColor = null
    }
}