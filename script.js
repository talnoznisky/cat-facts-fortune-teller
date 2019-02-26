//get the facts
var data, fact;
var facts = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomFact(){
    var fact = facts[getRandomInt(0,data.length)]
    document.querySelector("p").textContent =  `"${fact}"`;
  }

function sendRequest(){
  var request = new XMLHttpRequest();
  request.open('GET', 'https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts',true);
  request.setRequestHeader("Access-Control-Allow-Origin", "*");
  request.setRequestHeader("Access-Control-Allow-Headers", "X-Requested-With");
  request.onload = function(){
    data = JSON.parse(this.response).all
    for (var i = 0; i < data.length; i++) {
      facts.push(data[i].text)
    }
    getRandomFact();
  };
  request.send()
}


//build the page
function buildPage(){
  const app = document.getElementById('root');
  const container = document.createElement('div')
  container.setAttribute("class", "container col-md-6")

  const refresh = document.createElement('div')
  refresh.setAttribute('class', 'refresh text-center col align-self-center')
  refresh.setAttribute('onclick', 'sendRequest()')
  refresh.setAttribute('keydown', 'sendRequest()')

  const refreshText = document.createElement("p")
  refreshText.innerText = "Click here for a new fortune"

  //
  //
  // refresh.innerText = "Click here for a new fortune"

  const header = document.createElement('p')
  header.textContent = "cat facts NYT fortune teller"

  const picture = document.createElement('img')
  picture.src = "fortune-teller.png"
  picture.setAttribute("class","img-fluid mx-auto d-block")


  const fortune = document.createElement("p")
  fortune.setAttribute("class","text-center")

  const footer = document.createElement("footer")
  footer.setAttribute("class", "page-footer")

  const footerText = document.createElement("p")
  footerText.setAttribute("class", "text-center")
  footerText.innerHTML = 'shoutout: <a href="https://alexwohlbruck.github.io/cat-facts/docs/">cat-facts api</a> & NYT cartoonist <a href="https://www.mickstevens.com/">Mick Stevens</a>'

  app.appendChild(container)
  container.appendChild(picture)
  container.appendChild(fortune)
  container.appendChild(refresh)
  refresh.appendChild(refreshText)
  container.appendChild(footer)
  footer.appendChild(footerText)
}
buildPage()
sendRequest();
