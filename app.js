document.getElementById('button').addEventListener('click',jokesgen);
var output = document.getElementById('output');

async function jokesgen(){
    var url = await fetch(`https://official-joke-api.appspot.com/random_ten`);
    var resp = await url.json();
    var result = await {...resp};
    console.log(result)
    output.innerHTML = `<h5>1 . ${result[0].setup}
    <p>
    <li>
    ${result[0].punchline}
    </li>
    </p>
    </h5>
    <h5>2 . ${result[1].setup}
    <p>
    <li>
    ${result[1].punchline}
    </li>
    </p>
    </h5>
    <h5>3 . ${result[2].setup}
    <p>
    <li>
    ${result[2].punchline}
    </li>
    </p>
    </h5>
    <h5>4 . ${result[3].setup}
    <p>
    <li>
    ${result[3].punchline}
    </li>
    </p>
    </h5>
    <h5>5 . ${result[4].setup}
    <p>
    <li>
    ${result[4].punchline}
    </li>
    </p>
    </h5>
    <h5>6 . ${result[5].setup}
    <p>
    <li>
    ${result[5].punchline}
    </li>
    </p>
    </h5>
    <h5>7 . ${result[6].setup}
    <p>
    <li>
    ${result[6].punchline}
    </li>
    </p>
    </h5>
    <h5>8 . ${result[7].setup}
    <p>
    <li>
    ${result[7].punchline}
    </li>
    </p>
    </h5>
    <h5>9 . ${result[8].setup}
    <p>
    <li>
    ${result[8].punchline}
    </li>
    </p>
    </h5>
    <h5>10 . ${result[9].setup}
    <p>
    <li>
    ${result[9].punchline}
    </li>
    </p>
    </h5>
    `
    }
