var nameInput = document.getElementById('name');

document.querySelector('form.pure-form').addEventListener('submit', (e) => {

    e.preventDefault();
    name_of_pokemon = nameInput.value;

    console.log(name_of_pokemon)
    async function fetchData() {


        const url = 'https://pokeapi.co/api/v2/pokemon/' + name_of_pokemon;
        console.log(url)
        const res = await fetch(url);

        const data = await res.json();
        console.log(data.name)
        document.getElementById("image_src").src = data.sprites.front_default;
        document.getElementById("names").innerHTML = data.name;
        document.getElementById("height").innerHTML = data.height;
        document.getElementById("weight").innerHTML = data.weight;
        document.getElementById("abilities").innerHTML = data.abilities[0].ability.name;
        for (let i = 0; i <= data.types.length; i++) {
            if (i == 0) {
                document.getElementById("type").innerHTML = " " + data.types[i].type.name;
                console.log(data.types[i].type.name);
                const a = data.types[i].type.name;
                const b = document.getElementById("imgcontainer").classList;
                console.log(b)
                if (a == "fire") {
                    //b.pop();
                    document.getElementById('imgcontainer').setAttribute("style", "background-image: linear-gradient(to right, #f12711, #f5af19)");
                } else if (a == "water") {
                    //b.pop();
                    document.getElementById('imgcontainer').setAttribute("style", "background-image:linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)");
                } else if (a == "grass") {
                    //b.pop();
                    document.getElementById('imgcontainer').setAttribute("style", "background-image:linear-gradient(to right, #a8ff78, #78ffd6)");
                } else if (a == "normal") {
                    //b.pop();
                    document.getElementById('imgcontainer').setAttribute("style", "background-image:linear-gradient(to right, #d3cce3, #e9e4f0)");
                } else if (a == "electric") {
                    //b.pop();
                    document.getElementById('imgcontainer').setAttribute("style", "background-image:linear-gradient(to bottom, #fffc00, #ffffff)");
                } else {
                    document.getElementById('imgcontainer').setAttribute("style", "background-image:linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)");
                }

            } else {

                if (i != data.types.length) {
                    document.getElementById("type").innerHTML += ", "
                    document.getElementById("type").innerHTML += data.types[i].type.name;
                    console.log(data.types[i].type.name);
                }
            }

        }
    }
    fetchData();
});

document.getElementById('random').addEventListener("click", () => {
    var random_number = Math.random() * 898 + 1;
    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.round(random_number);
    console.log("I am clicked")
    async function fetchData() {
        console.log(url)
        const res = await fetch(url);

        const data = await res.json();
        console.log(data.name)
        document.getElementById("image_src").src = data.sprites.front_default;
        document.getElementById("names").innerHTML = data.name;
        document.getElementById("height").innerHTML = data.height;
        document.getElementById("weight").innerHTML = data.weight;
        document.getElementById("abilities").innerHTML = data.abilities[0].ability.name;
        for (let i = 0; i <= data.types.length; i++) {
            if (i == 0) {
                document.getElementById("type").innerHTML = " " + data.types[i].type.name;
                console.log(data.types[i].type.name);
                const a = data.types[i].type.name;
                const b = document.getElementById("imgcontainer").classList;
                console.log(b)
                if (a == "fire") {
                    //b.pop();
                    document.getElementById('imgcontainer').setAttribute("style", "background-image: linear-gradient(to right, #f12711, #f5af19)");
                } else if (a == "water") {
                    //b.pop();
                    document.getElementById('imgcontainer').setAttribute("style", "background-image:linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)");
                } else if (a == "grass") {
                    //b.pop();
                    document.getElementById('imgcontainer').setAttribute("style", "background-image:linear-gradient(to right, #a8ff78, #78ffd6)");
                } else if (a == "normal") {
                    //b.pop();
                    document.getElementById('imgcontainer').setAttribute("style", "background-image:linear-gradient(to right, #d3cce3, #e9e4f0)");
                } else if (a == "electric") {
                    //b.pop();
                    document.getElementById('imgcontainer').setAttribute("style", "background-image:linear-gradient(to bottom, #fffc00, #ffffff)");
                } else {
                    document.getElementById('imgcontainer').setAttribute("style", "background-image:linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)");
                }

            } else {

                if (i != data.types.length) {
                    document.getElementById("type").innerHTML += ", "
                    document.getElementById("type").innerHTML += data.types[i].type.name;
                    console.log(data.types[i].type.name);
                }
            }

        }
    }
    fetchData();
});