const fileInput = document.querySelector('#foto-input');
const removeAllButton = document.querySelector("button");
const tableBody = document.querySelector("table tbody");

fileInput.addEventListener("change", function() {
    const files = fileInput.files;

    if (files.length > 0) {
        for (const file of files) {
            const trElem = document.createElement("tr");

            const tdImage = document.createElement("td");
            const tdFileName = document.createElement("td");
            const tdRemove = document.createElement("td");  
            const removeBtn = document.createElement("button");


            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                tdImage.innerHTML = `<img src="${reader.result}" style="width: 100px"/>`;
            };
            reader.onerror = function () {
                console.log(reader.error);
            };

            tdFileName.textContent = file.name;

           
            removeBtn.textContent = "Remove";
            removeBtn.classList.add("btn", "btn-danger");
            removeBtn.addEventListener("click", function () {
                trElem.remove();  
            });

            
            tdRemove.appendChild(removeBtn);

            trElem.appendChild(tdImage);
            trElem.appendChild(tdFileName);
            trElem.appendChild(tdRemove);
           
            tableBody.appendChild(trElem);
        }
    } else {
        alert("No files selected!");
    }

    fileInput.value = "";
});

removeAllButton.addEventListener("click", function() {
    tableBody.innerHTML = "";  
});
