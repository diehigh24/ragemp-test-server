
let locations       = require('./locations.json').Locations;

mp.events.addCommand('test', (player, _, location) => {
    const position = player.position;
    locations.forEach(loc => {
        console.log(loc);
        if(loc.name == location.toLowerCase()){
            console.log("found "+ loc.name)
            console.log(loc.vector3)
            let blip = mp.blips.new(loc.sprite, new mp.Vector3(loc.vector3.x, loc.vector3.y, loc.vector3.z),{
                "name":loc.name,
                "color": loc.color,
                "shortRange":loc.shortRange
            });
            //create route to blip
            blip.routeFor(player, 2, 1);
        }
        
    });

});

mp.events.addCommand('veh', (player) =>{
    const position = player.position;
 //create vehicle
    mp.vehicles.new(mp.joaat("turismor"), position,
        {
            color: [[255, 0, 0],[255,0,0]]
        });

});


mp.events.addCommand('test1', (player) => {
    player.health = 100;
});

mp.events.addCommand('test2', (player) => {
    player.armour = 50;
});

mp.events.addCommand('kill', (player) => {
    player.health = 0;
});