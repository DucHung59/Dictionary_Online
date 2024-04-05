const btnSearch = document.getElementById('btnSearch');
const inputSearch = document.getElementById('Content_search');
const displaySearch = document.querySelector('.displaySearch');
const searchForm_group = document.querySelector('.group');

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

    let displaySearchPhonetics_audio = document.createElement('audio'); //the audio
    /*displaySearchPhonetics_audio.controls = true;*/
    let displaySearchPhonetics_source = document.createElement('source'); //the source
    displaySearchPhonetics_source.setAttribute('src', data[0].phonetics[0].audio);

    let displaySearchPhonetics_i = document.createElement('i');
    displaySearchPhonetics_i.classList.add('fa-solid');
    displaySearchPhonetics_i.classList.add('fa-volume-high');

    displaySearchPhonetics_audio.appendChild(displaySearchPhonetics_source);

    displaySearchPhonetics.appendChild(displaySearchPhonetics_label);
    displaySearchPhonetics.appendChild(displaySearchPhonetics_audio);
    displaySearchPhonetics.appendChild(displaySearchPhonetics_i);

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
    displaySearchExampleHeader_label.innerText = 'Example';

    displaySearchExampleHeader.appendChild(displaySearchExampleHeader_i);
    displaySearchExampleHeader.appendChild(displaySearchExampleHeader_label);

    let displaySearchWord_content = document.createElement('div');
    displaySearchWord_content.classList.add('displaySearch_example--content');
    let htmls = "";

    data[0].meanings.forEach((item, index) => {
        item.definitions.forEach((item1, index1) => {          
            if (item1.example != undefined) {
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

}


function displaySearchWord() {
    return new Promise((resolve) => {
        const api = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputSearch.value}`;
        console.log(api);
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
                }
                else {
                    displaySearch.innerHTML = `
                        <div class="displaySearch_error">
                            <label>"Sorry pal, we couldn't find definitions for '<span style="color: blue">${inputSearch.value}</span>' you were looking for."</label>
                            <div>
                                <img src="https://images.dolenglish.vn/rs:auto:::0/w:1440/q:70/aHR0cHM6Ly9ncWVmY3B5bG9ub2JqLnZjZG4uY2xvdWQvUFVCTElDL01FRElBL25vdF9mb3VuZF9iMTJiYjlhMDI3LnBuZw==" alt="Alternate Text" />
                            </div>
                        </div>`
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        resolve();
    })
}

// nút Search
btnSearch.onclick = () => {
    displaySearchWord()
        .then(function() {
            return new Promise((resolve) => {
                setTimeout(resolve, 1000);
            })          
        })
        .then(function() {
            const mic = document.querySelector('.displaySearch_phonetics i');
            // event icon Microphone
            mic.addEventListener('click', () => {
                const audio = document.querySelector('.displaySearch_phonetics audio');
                audio.play();
            })
        })
}

//Enter trong ô input
inputSearch.addEventListener('keydown', (event) => {
    if (event.keyCode == 13) {
        displaySearchWord()
            .then(function () {
                return new Promise((resolve) => {
                    setTimeout(resolve, 1000);
                })
            })
            .then(function () {
                const mic = document.querySelector('.displaySearch_phonetics i');
                // event icon Microphone
                mic.addEventListener('click', () => {
                    const audio = document.querySelector('.displaySearch_phonetics audio');
                    audio.play();
                })
            })
    }
})

// focus input Search

//inputSearch.addEventListener('focus', () => {
//    const searchHistory = document.querySelector('.searchForm_history');
//    searchHistory.style.display = 'flex';
//})

searchForm_group.addEventListener('focusin', () => {
    const searchHistory = document.querySelector('.searchForm_history');
    searchHistory.style.display = 'flex';
})
searchForm_group.addEventListener('focusout', () => {
    const searchHistory = document.querySelector('.searchForm_history');
    searchHistory.style.display = 'none';
})

