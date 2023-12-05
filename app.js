if (typeof jQuery == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
  } else {console.log('I did it! I linked jQuery and this js file!')};

  $(() => {
	// Select the div with the id of container and set it to a variable named $container
    const $container = $('#container')
    console.log($container)
    // put jQuery in here
    //Create an <h1> element and set it to a variable called $h1 and console log it
    const $h1 = $('<h1></h1>')
    console.log($h1)
    //Add some text inside the h1 element. Example text: 'Hogwarts'
    $h1.text('Hogwarts')
    //Why isn't your $h1 it appearing on your page?
    $container.append($h1)
    //h2 element with your name
    const $h2 = $('<h2></h2>')
    $h2.text('Rowena Wood')
    //h3 element with your house (Hufflepuff, Gryffindor, Ravenclaw or Slytherin )
    const $h3 = $('<h3></h3>')
    $h3.text('Gryffindor')
    //h4 element with your pet's name
    //this h4 element should have a class with a value of your pet type (owl, cat, toad, etc)
    const $h4Pet = $('<h4></h4>')
    $h4Pet.text('Biscuit').addClass("pet")
    //h4 element with your wand (You can make it whatever you want. Need help coming up with one? Here is one of many websites to help you find your wand playbuzz.com )
    const $h4Wand = $("<h4></h4>")
    $h4Wand.text("Holly Wand with Unicorn Hair Core")
    
    $container.append($h2, $h3, $h4Pet, $h4Wand)

    //Create an unordered list
    const $ul = $('<ul></ul>').attr('storage','trunk')
    //list items
    const listItems = [
        "butter beer",
        "invisibility cloak",
        "magic map",
        "time turner",
        "leash",
        "Bertie Bott's Every Flavor [Jelly] Beans"
    ]
    const $item1 = $('<li>').text (listItems[0])
    const $item2 = $('<li>').text (listItems[1]).addClass('secret')
    const $item3 = $('<li>').text (listItems[2]).addClass('secret')
    const $item4 = $('<li>').text (listItems[3]).addClass('secret')
    const $item5 = $('<li>').text (listItems[4]).addClass('pet')
    const $item6 = $('<li>').text (listItems[5])

    $ul.append($item1, $item2, $item3, $item4, $item5, $item6)
    $container.append($ul)

    //Create h5
    $('<h5></h5>').text('Spring 2017').appendTo($container)

    
    // Create a table
    const $table = $('<table>')
    $container.append($table)

    // Create thead
    const $thead = $('<thead>').appendTo($table)

    //Add two th elements
    $('<th>').text('Day').appendTo($thead)
    $('<th>').text('Classes').appendTo($thead)
    
    // Add classes
    const classList = [
        { day: 'Monday', 
            classes: ['Potions', 'Transfiguration']
        },
          {
            day: 'Tuesday',
            classes: ['Defense Against the Dark Arts', 'Charms']
          },
          {
            day: 'Wednesday',
            classes: ['Herbology', 'Divination']
          },
          {
            day: 'Thursday',
            classes: ['Ancient Runes', 'Care of Magical Creatures']
          },
          {
            day: 'Friday',
            classes: ['Astronomy', 'History of Magic']
          }
        ];
    

    //Create tbody
    const $tableB = $('<tbody>').appendTo($table)

    // Create tr and td
    $(classList).each(function (index, el) {
        const $tr = $('<tr>').appendTo($tableB)
        $('<td>').text(el.day).appendTo($tr)
        $('<td>').text(el.classes).appendTo($tr)
    
    });

    // Remove wand
    $h4Wand.remove()
    // Remove butter beer
    $item1.remove()
    // Add new wand
    const $newWand = $("<h4></h4>").text("Cypress Wand with Core Rougarou Hair core").addClass("wand").css("color", "indigo")
    // Insert the new wand after your pet in the DOM
    $h4Pet.after($newWand)
    // Send your pet on a spy mission (remove your pet from the DOM, put it somewhere else in your HTML). Make sure your pet's leash stays in your trunk (list item with the same class as your pet inside unordered list)
    const $spy = $h4Pet.detach()
    const $secretPlace = $('#secretPlace')
    $spy.appendTo($secretPlace)
    //Have your pet come back (remove your pet from the DOM, put it back in its original location)
    $spy.detach().appendTo($container).insertBefore($h3)
});

