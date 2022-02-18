var tabsWrap = document.querySelector('.calculate__type-tabs-wrap');

tabsWrap.addEventListener('click', function(event) {
    if(event.target.classList.contains('calculate__tab')) {
        for(i = 0; i < tabsWrap.children.length; i++) {
            tabsWrap.children[i].classList.remove('calculate__tab_active')
        }
        event.target.classList.add('calculate__tab_active');
    }
});


$('input[type=range]').on('input', function(e){
    var min = e.target.min,
        max = e.target.max,
        val = e.target.value;

    $(e.target).css({
      'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
    });
}).trigger('input');