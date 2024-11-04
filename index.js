const goodbye = function(name){ 
    const pozdrav = document.querySelector(".email__closing")
    pozdrav.textContent = `
    Na shledanou ${name} 
    `
} 
goodbye("Zuzana")
