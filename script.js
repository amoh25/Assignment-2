/* This file is where all your work should go for Assignment 2.  Please remove this comment. */

const contactList = [  
	{ 
		name: "LeBron James", 
		phone: "778-778-6047", 
		address: "232 3rd St, Akron, Ohio",    
		email: "lebRon@lakers.com",  
	},   
	{    
		name: "DeMar DeRozan",    
		phone: "604-604-7778",    
		address: "111 11 St, Los Angeles",    
		email: "DeMarDeRozan@bulls.com",  
	},
]

function cleanUpIndex(){
    const mainb = document.querySelector('.main')
    mainb.innerHTML = '';
}

function createSingleIndex(){
    const singlecontact = document.querySelector('div');
    singlecontact.innerHTML =
        '<a href="page3.html"><div class="contact"><p>Barry Allen</p></div></a>'
		document.body.appendChild(singlecontact);
	}
// function renderIndex(contactList) {
// 	const area = document.querySelector('.main')
// 	for (const contact of contactList) {
// 		area.insertAdjacentHTML('afterbegin', (contact.name))
// 	}
// }

function renderIndex(contactList){
	const area = document.querySelector('.main')
	for (const contact of contactList) {
		area.insertAdjacentHTML('afterbegin', (contact))
	}
}

