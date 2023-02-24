
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '61164462cfmsh90eecee3c12ef03p1b9195jsnb432400238ff',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};

fetch('https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=eiffel%20tower&lang=en_US&units=km', options)
	.then(response => response.json())
	.then((data)=>{
        let arr =data.data.Typeahead_autocomplete.results;
        console.log(arr)
        for(let i = 0;i<arr.length;i++){
        let posts = document.querySelector('.posts')

            posts.innerHTML+=`
            <div class="poster">
            <img src="${arr[i].image.photo.photoSizes[0].url}" alt="">
            <div class="location"></div>
        </div>
            `
        }
    })
	.catch(err => console.error(err));