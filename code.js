const goToMainPage=document.getElementById("MainPage");
goToMainPage.addEventListener('click', function(){
    window.location.href = "mainPage.html";
})

const goToSuggestPage=document.getElementById("SuggestPage");
goToSuggestPage.addEventListener('click', function(){
    window.location.href = "suggestPage.html";
})

const goToAddPoems=document.getElementById("AddPoems");
goToAddPoems.addEventListener("click", function(){
    window.location.href = "addPoems.html";
})

const goToPoetsList=document.getElementById("PoetsList");
goToPoetsList.addEventListener("click", function(){
    window.location.href = "poetsList.html";
})

const goToPoemsList=document.getElementById("PoemsList");
goToPoemsList.addEventListener("click", function(){
    window.location.href = "poemsList.html";
})

const goToMyCollections=document.getElementById("MyCollections");
goToMyCollections.addEventListener("click", function(){
    window.location.href = "myCollections.html";
})

const goToAllPoems=document.getElementById("AllPoems");
goToAllPoems.addEventListener("click", function(){
    window.location.href = "allPoems.html";
})
