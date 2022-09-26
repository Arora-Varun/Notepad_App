const addbtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");


addbtn.addEventListener("click" , function()
{addNote();
})

function addNote() {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = 
    `<div class="tool">
    <i class=" trash fa-solid fa-trash"></i>
    <i class=" copy fa-solid fa-copy"></i>
    </div>
    <textarea id = text-area></textarea>`;
    
    note.querySelector(".trash").addEventListener("click", function(){
        note.remove();
    });

    main.appendChild(note)
    
}


addNote();






