var searchValue=document.querySelector(".search-value");
var result;
var element = document.querySelector(".output-list");
searchValue.addEventListener('keypress', (event) => {
    result = `${event.target.value}`;
    fetch(`https://en.wikipedia.org/w/api.php?&origin=*&format=json&action=opensearch&search=${event.target.value}`)
    .then(ans => {
        return ans.json();
      }).then(displayResults);
      
   console.log(result);
 });
 function displayResults(ans){
     element.innerHTML=""
     for(let i=0;i<ans[1].length;i++){
         console.log(ans[1][i]);
         var link=document.createElement("a");
         link.setAttribute("href",`https://en.wikipedia.org/wiki/${ans[1][i]}`);
         link.setAttribute("style","text-decoration:none;color:white;")
        
         var text = document.createTextNode(`${ans[1][i]}`);
         link.appendChild(text);
         var tag = document.createElement("p");
         tag.appendChild(link);
         element.appendChild(tag);
     }
     
 }
