$(document).ready(function() {
    $('.tab1').click(function(){
        var attr = $(this).attr('data-li');

        $('.tab1').removeClass('active1');
        $(this).addClass('active1');

        $('.row').hide();
        if(attr == 'artificer'){
            $('.' + attr).show();
        }
        else if(attr == 'bard'){
            $('.' + attr).show();
        }
        else if(attr == 'cleric'){
            $('.' + attr).show();
        }
        else if(attr == 'druid'){
            $('.' + attr).show();
        }
        else if(attr == 'paladin'){
            $('.' + attr).show();
        }
        else if(attr == 'ranger'){
            $('.' + attr).show();
        }
        else if(attr == 'sorcerer'){
            $('.' + attr).show();
        }
        else if(attr == 'warlock'){
            $('.' + attr).show();
        }
        else if(attr == 'wizard'){
            $('.' + attr).show();
        }
        else{
            $('.row').show();
        }
    })
});


// $(document).ready(function() {
//     $('.tab2').click(function(){
//         var attr = $(this).attr('data-li');

//         $('.tab2').removeClass('active2');
//         $(this).addClass('active2');

//         $('.row').hide();
//         if(attr == 'cantrip'){
//             $('.' + attr).show();
//         }
//         else if(attr == '1st'){
//             $('.' + attr).show();
//         }
//         else if(attr == '2nd'){
//             $('.' + attr).show();
//         }
//         else if(attr == '3rd'){
//             $('.' + attr).show();
//         }
//         else if(attr == '4th'){
//             $('.' + attr).show();
//         }
//         else if(attr == '5th'){
//             $('.' + attr).show();
//         }
//         else if(attr == '6th'){
//             $('.' + attr).show();
//         }
//         else if(attr == '7th'){
//             $('.' + attr).show();
//         }
//         else if(attr == '8th'){
//             $('.' + attr).show();
//         }
//         else if(attr == '9th'){
//             $('.' + attr).show();
//         }
//         else{
//             $('.row').show();
//         }
//     })
// });
