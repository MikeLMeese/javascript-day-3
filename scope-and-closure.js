function outer(){
    a = 'WhatIsThis';
    b = {text:'IDontKnow'}
    console.log(a, b);
    function inner() {
        a = 'HereWeGoPart2';
        b = {text: 'ElectricBoogaloo'}
        console.log(a, b);
        b = {text:'WhatEven'};
        console.log(a, b);
    }

    inner(a, b);
}

outer();