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

function createSingleIndex(contactList) {
	const mainclass = document.querySelector('.main') 
	let i = 0
	mainclass.innerHTML = `<a href="page3.html"><div class="contact"><p>${contactList[i].name}</p></div></a>`
}

function renderIndex(contactList){
	const mainelem = document.querySelector('.main')
	for (let i = 0; i <= contactList.length; i++) {
		mainelem.insertAdjacentHTML('beforeend', createSingleIndex(contactList[i]))
	}
}


function cleanUpCreate(){
	var contact = document.getElementsByClassName("main");
	  for(var i = contact.length - 1; 0 <= i; i--)
	  if(contact[i] && contact[i].parentElement)
	  contact[i].parentElement.removeChild(contact[i]);
}

function renderCreate(){
	var newform = document.createElement('form');
	 newform.innerHTML = `
	  <div class="contactedit">
	  <div class="contactimg">
		<img src="./img/profile.jpg" class ="profilepic" alt="Profile picture">
	  </div>
	  <div class="inputcontainer">
		<input type="text" id="contactname" name="contactname" placeholder="Contact Name">
		<button class="extrafield" id="extranamefield" name="extranamefield">+</button>
	  </div>
	  <div class="inputcontainer">
		<input type="tel" id="contactphone" name="contactphone" placeholder="Contact Phone">
		<button class="extrafield" id="extraphonefield" name="extraphonefield">+</button>
	  </div>
	  <div class="inputcontainer">
		<input type="text" id="contactaddress" name="contactaddress" placeholder="Contact Address">
		<button class="extrafield" id="extraaddressfield" name="extraaddressfield">+</button>
	  </div>
	  <div class="inputcontainer">
		<input type="email" id="contactemail" name="contactemail" placeholder="Contact Email">
		<button class="extrafield" id="extraemailfield" name="extraemailfield">+</button>
	  </div>
	  <div class="buttons">
		<button type="submit" class="button save" id="savecontact" name="savecontact">Save Contact</button>
		<button type="reset" class="button cancel" id="cancel" name="cancel">Cancel</button>
	  </div>
	 `
	 document.body.appendChild(newform)
}
  
  
  
  