$( document ).ready( function () {
    $( '.nav_ul li' ).click( function () {
        $( this ).addClass( 'active' );
        $( this ).siblings().removeClass( 'active' )
    } );

    // 返回顶部
    $( window ).scroll( function () {
        if ( $( window ).scrollTop() > 600 ) {
            $( '.top' ).css( 'display','block' );
        } else {
            $( '.top' ).css( 'display','none' );
        }
    } );
    $( '.top' ).click( function () {
        $( 'html,body' ).animate( {scrollTop: 0},1000 );
    } );

    // 侧栏菜单
    $( '.slider_btn' ).click( function () {
        $( '.slider' ).css( 'right','0' );
        $( '.mask' ).fadeIn();
    } );
    $( '.mask' ).click( function () {
        $( '.slider' ).css( 'right','-200px' );
        $( '.mask' ).fadeOut();
        $( '.nav_ul li:last-child' ).addClass( 'active' );  // 侧栏菜单滑出的同时，为首页增加下标
    } );
});