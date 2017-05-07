/* js/navMain.js */

jQuery( document ).ready(function( $ ) {

console.log('test');

    $('.navMain').before('<i class="js_navMain_trigger navMain_trigger fa fa-bars" aria-hidden="true"></i>');

    $('body').on('click', '.js_navMain_trigger', function(){
        $('body').toggleClass('navMain-open');
    });



});