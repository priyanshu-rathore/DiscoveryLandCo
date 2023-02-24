const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '61164462cfmsh90eecee3c12ef03p1b9195jsnb432400238ff',
		'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
	}
};

fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null', options)
	.then(response => response.json())
	.then((data)=>{
        console.log(data)
        let newBoxOne = document.querySelector('.newsone');
        let newBoxTwo = document.querySelector('.newstwo')
        let newBoxThree = document.querySelector('.newsthree')
        let newBoxFour = document.querySelector('.newsfour');



        let left = document.querySelector('.left');
        let right = document.querySelector('.right')

        console.log(data.value[0].title)

        newBoxOne.innerHTML = `<p>${data.value[0].title}</p>
        <h6">${data.value[0].description.slice(0,80)}</h6>
        <a href="${data.value[0].url}">Read More</a>`;

        newBoxTwo.innerHTML = `<p>${data.value[1].title}</p>
        <h6">${data.value[1].description.slice(0,80)}</h6>
        <a href="${data.value[1].url}">Read More</a>`;

        newBoxThree.innerHTML = `<p>${data.value[2].title}</p>
        <h6">${data.value[2].description.slice(0,80)}</h6>
        <a href="${data.value[2].url}">Read More</a>`;

        newBoxFour.innerHTML = `<p>${data.value[3].title}</p>
        <h6">${data.value[3].description.slice(0,80)}</h6>
        <a href="${data.value[3].url}">Read More</a>`;

        let counter = 4;

        left.addEventListener('click',()=>{
            
            counter--;
                
        newBoxOne.innerHTML = `<p>${data.value[counter].title}</p>
        <h6">${data.value[counter].description.slice(0,80)}</h6>
        <a href="${data.value[counter].url}">Read More</a>`;

        newBoxTwo.innerHTML = `<p>${data.value[counter+1].title}</p>
        <h6">${data.value[counter+1].description.slice(0,80)}</h6>
        <a href="${data.value[counter+1].url}">Read More</a>`;

        newBoxThree.innerHTML = `<p>${data.value[counter+2].title}</p>
        <h6">${data.value[counter+2].description.slice(0,80)}</h6>
        <a href="${data.value[counter+2].url}">Read More</a>`;

        newBoxFour.innerHTML = `<p>${data.value[counter+3].title}</p>
        <h6">${data.value[counter+3].description.slice(0,80)}</h6>
        <a href="${data.value[counter+3].url}">Read More</a>`;
            
        })

        right.addEventListener('click',()=>{
            
            counter++;
                
        newBoxOne.innerHTML = `<p>${data.value[counter].title}</p>
        <h6">${data.value[counter].description.slice(0,80)}</h6>
        <a href="${data.value[counter].url}">Read More</a>`;

        newBoxTwo.innerHTML = `<p>${data.value[counter+1].title}</p>
        <h6">${data.value[counter+1].description.slice(0,80)}</h6>
        <a href="${data.value[counter+1].url}">Read More</a>`;

        newBoxThree.innerHTML = `<p>${data.value[counter+2].title}</p>
        <h6">${data.value[counter+2].description.slice(0,80)}</h6>
        <a href="${data.value[counter+2].url}">Read More</a>`;

        newBoxFour.innerHTML = `<p>${data.value[counter+3].title}</p>
        <h6">${data.value[counter+3].description.slice(0,80)}</h6>
        <a href="${data.value[counter+3].url}">Read More</a>`;
            
        })

    })
	.catch(err => console.error(err));