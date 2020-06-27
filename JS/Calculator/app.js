function getInput(num) {
    var input;
    input = document.getElementById('userInput');
    input.value += num;
    // console.log(input.value); 

}

function reasult() {
    var input, res;
    input = document.getElementById('userInput');
    res = eval(input.value);
    document.getElementById('reasult').innerHTML = res;
    document.getElementById('userInput').value = null;
 
}

function remove() {
    document.getElementById('reasult').innerHTML = "0";
    document.getElementById('userInput').value = null;
}