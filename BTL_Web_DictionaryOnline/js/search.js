const btnSearch = document.getElementById('btnSearch');
const inputSearch = document.getElementById('Content_search');
const displaySearch = document.querySelector('.displaySearch');

function search(data) {
    while (displaySearch.hasChildNodes()) {
        displaySearch.removeChild(displaySearch.firstChild);
    }

    //displaySearch_word (từ)
    let displaySearchWord = document.createElement('div');
    displaySearchWord.classList.add('displaySearch_word');
    let displaySearchWord_label = document.createElement('label');
    displaySearchWord_label.innerText = data[0].word;

    displaySearchWord.appendChild(displaySearchWord_label);
    data[0].meanings.forEach((item) => {
        let displaySearchWord_label = document.createElement('label');
        displaySearchWord_label.classList.add('displaySearch_word--category');
        displaySearchWord_label.innerText = item.partOfSpeech;

        displaySearchWord.appendChild(displaySearchWord_label);
    });



    //----------------- displaySearch_phonetics (phát âm)
    let displaySearchPhonetics = document.createElement('div');
    displaySearchPhonetics.classList.add('displaySearch_phonetics');

    let displaySearchPhonetics_label = document.createElement('label');
    displaySearchPhonetics_label.innerText = data[0].phonetic;

    let displaySearchPhonetics_i = document.createElement('i');
    displaySearchPhonetics_i.classList.add('fa-solid');
    displaySearchPhonetics_i.classList.add('fa-volume-high');

    displaySearchPhonetics.appendChild(displaySearchPhonetics_i);
    displaySearchPhonetics.appendChild(displaySearchPhonetics_label);

    //----------------- displaySearch_definition (label định nghĩa)
    let displaySearchDefinition = document.createElement('div');
    displaySearchDefinition.classList.add('displaySearch_definition');

    let displaySearchDefinition_label = document.createElement('label');
    displaySearchDefinition_label.innerText = data[0].meanings[0].definitions[0].definition;

    displaySearchDefinition.appendChild(displaySearchDefinition_label);


    //displaySearch_example
    let displaySearchExample = document.createElement('div');
    displaySearchExample.classList.add('displaySearch_example');

    let displaySearchExampleHeader = document.createElement('div');
    displaySearchExampleHeader.classList.add('displaySearch_example--header');

    let displaySearchExampleHeader_i = document.createElement('i');
    displaySearchExampleHeader_i.classList.add('fa-solid');
    displaySearchExampleHeader_i.classList.add('fa-comments');

    let displaySearchExampleHeader_label = document.createElement('label');
    displaySearchExampleHeader_label.innerText = 'Ví dụ';

    displaySearchExampleHeader.appendChild(displaySearchExampleHeader_i);
    displaySearchExampleHeader.appendChild(displaySearchExampleHeader_label);

    let displaySearchWord_content = document.createElement('div');
    displaySearchWord_content.classList.add('displaySearch_example--content');
    let htmls = "";

    data[0].meanings.forEach((item, index) => {
        /*console.log(item)*/
        item.definitions.forEach((item1, index1) => {
            /*console.log(item1);*/
            if (item1.example != undefined) {
                console.log(item1.example);
                htmls += `<label> - ${item1.example}</label>`;
            }
        })
        /*if (item.example != "undefined") {
            let displaySearchExampleContent = document.createElement('div')
            displaySearchExampleContent.classList.add('displaySearch_example--content');

            let displaySearchWord_label = document.createElement('label');
            displaySearchWord_label.innerText = `${index + 1}. ${item.example}`;
            console.log(item.example);
        }*/
    });

    displaySearchWord_content.innerHTML = htmls;

    displaySearchExample.appendChild(displaySearchExampleHeader);
    displaySearchExample.appendChild(displaySearchWord_content);

    displaySearch.appendChild(displaySearchWord);
    displaySearch.appendChild(displaySearchPhonetics);
    displaySearch.appendChild(displaySearchDefinition);
    displaySearch.appendChild(displaySearchExample);


    //displaySearch.innerHTML = `
    //    <div class="displaySearch_word">
    //        <label>${data[0].word}</label>
    //        <label class="displaySearch_word--category">VERB</label>
    //        <label class="displaySearch_word--category">NOUN</label>
    //    </div>

    //    <div class="displaySearch_phonetics">
    //        <label>/həˈloʊ/</label>
    //        <i class="fa-solid fa-volume-high"></i>
    //    </div>

    //    <div class="displaySearch_definition">
    //        <label>A greeting (salutation) said when meeting someone or acknowledging someone’s arrival or presence.</label>
    //    </div>

    //    <div class="displaySearch_example">
    //        <div class="displaySearch_example--header">
    //            <i class="fa-solid fa-comments"></i>
    //            <label>Ví dụ</label>
    //        </div>
    //        <div class="displaySearch_example--content">
    //            <label>1. Hello, everyone.</label>
    //            <label>2. Hello? Is anyone there?</label>
    //            <label>2. Hello? Is anyone there?</label>
    //            <label>2. Hello? Is anyone there?</label>
    //        </div>
    //    </div>

    //    ` 
}

/*const api1 = `https://api.dictionaryapi.dev/api/v2/entries/en/sun`
const api2 =  `https://wordsapiv1.p.mashape.com/words/moon`

fetch(api1)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    }) 

console.log(api1);*/

// nút Search
btnSearch.onclick = () => {
    const api = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputSearch.value}`;
    fetch(api)
        .then(res => {
            if (!res.ok) {
                console.log('Đường dẫn API hợp lệ!')
            }
            else {
                return res.json();
            }
        })
        .then(function (data) {
            if (data) {
                search(data);
                console.log(data[0].meanings[0].definitions[0].example);
            }
            else {
                displaySearch.innerHTML = `
                    <div class="displaySearch_error">
                        <label>"Sorry pal, we couldn't find definitions for the word you were looking for."</label>
                        <div>
                            <img src="https://images.dolenglish.vn/rs:auto:::0/w:1440/q:70/aHR0cHM6Ly9ncWVmY3B5bG9ub2JqLnZjZG4uY2xvdWQvUFVCTElDL01FRElBL25vdF9mb3VuZF9iMTJiYjlhMDI3LnBuZw==" alt="Alternate Text" />
                        </div>
                    </div>`
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    console.log(api);
}

//Enter 
inputSearch.addEventListener('focus', () => {

})

