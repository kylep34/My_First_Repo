//Activity 1
$('.toggle').click(function()
{
    $(this).find('.toggleContainer').toggleClass('active');
    $(this).siblings('.toggle').find('.toggleContainer').removeClass('active');
});


//Activity 2
$('.searchButton').on('click', function()
{
    $('.searchButton').toggleClass('active');
    if ($('.searchButton').hasClass('active')) 
    {
        $('.searchBar').css('height', '100vh');
        $('#searchForm').css('opacity', '1');
        $('.searchIcon').removeClass('fa-search') .addClass ('fa-times'); 
    } 
    else 
    {
     $('.searchBar').css('height','0vh');
     $('#searchForm').css('opacity','0');
     $('.searchIcon').removeClass('fa-times').addClass('fa-search');
    }
});


//Activity 3
function fade()
{
    $('.preloader').fadeOut('slow');
}
    setTimeout(fade,3000);

