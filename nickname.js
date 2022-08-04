fetch("https://apis.kahoot.it/namerator")
    .then(a=>a.json())
    .then(b=>document.getElementById("nickname").value =b.name)
