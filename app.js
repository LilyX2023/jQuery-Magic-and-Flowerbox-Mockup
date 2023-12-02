if (typeof jQuery == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
  } else {console.log('I did it! I linked jQuery and this js file!')};

  $(() => {
	// Select the div with the id of container and set it to a variable named $container
    const $container = $('#container');
    console.log($container);
    // put jQuery in here
    //Create an <h1> element and set it to a variable called $h1 and console log it
    const $h1 = $('<h1></h1>');
    console.log($h1);
    //Add some text inside the h1 element. Example text: 'Hogwarts'
    $h1.text('Hogwarts');
    //Why isn't your $h1 it appearing on your page?
    $container.append($h1)
});