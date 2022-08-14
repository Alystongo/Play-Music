$(document).ready(function() {
    /* Home */
    $('.logo').click(function(){
        pausesong();
        index_no = 0;
        
        $('.folders').show();
        $('.dropbtn').hide();
        $('.body-play').hide();
        $('.dropdown-content').css('display', 'none');
    });
    
    /* Buttons Main */
    $('.folders-btn').click(function() {
        $('.folders').hide();
        $('.dropbtn').show().css('display', 'flex');
        $('.body-play').show();
    });
    
    $('.inter-btn').click(function() {
        load_track_inter(index_no);
    });
    
    $('.rock-btn').click(function() {
        load_track_rock(index_no);
    });
    
    $('.geek-btn').click(function() {
        load_track_geek(index_no);
    });
    
    /* Buttons Nav */
    $('.dropbtn').click(function(){
        $('.dropdown-content').css('display', 'block');
        
        index_no = 0;
    })
    
    $('.body-play').click(function(){
        $('.dropdown-content').css('display', 'none');
    })
    
    $('.nav-inter-btn').click(function(){
        pausesong();
        load_track_inter(index_no);
        $('.dropdown-content').css('display', 'none');
    });
    
    $('.nav-rock-btn').click(function(){
        pausesong();
        load_track_rock(index_no);
        $('.dropdown-content').css('display', 'none');
    });
    
    $('.nav-geek-btn').click(function(){
        pausesong();
        load_track_geek(index_no);
        $('.dropdown-content').css('display', 'none');
    });
    
});
