var showerThoughts = [
    "The biggest flex is using mobile data in your own home because the WiFi is being slow.",
    "Being able to tolerate the sound of your own voice in a video is probably the highest form of self acceptance.",
    "During a nuclear explosion, there is a certain distance of the radius where all the frozen supermarket pizzas are cooked to perfection.",
    "If elevators hadn't been invented, all the CEOs and important people would have their offices on the first floor as a sign of status and the entry level employees would be up on the 80th floor.",
    "We all think of Gordon Ramsay as an extremely picky food critic/chef but if your life's work was cooking and you saw a narcissistic restaurant manager breaking health code violations and making horrible food, you'd be pretty angry too.",
    "Lamps in Videogames use real electricity.",
    "Night before a day off is more satisfying than the actual day off.",
    "At the age of 60, Snoop Dogg will be 420 in dog years",
    "USPS could make more money if they put post offices in airports so instead of throwing something out that you forgot was in your bag you could mail it home."
]


function newShowerThought() {
    var randomNumber = Math.floor(Math.random() * (showerThoughts.length));
    document.getElementById('showerThoughtDisplay').innerHTML = showerThoughts[randomNumber];
}