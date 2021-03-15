

// Add Aside Content
// ------------------


// Elements
const zoom = document.querySelector('#zoom');
const weeks = document.querySelector("#weeks");
const tracks = document.querySelector("#tracks");
const certificate = document.querySelector("#certificate");
const guide = document.querySelector("#guide");
const canals = document.querySelector('#canals');
const tools = document.querySelector('#tools');
const communities = document.querySelector('#communities');
const statusPages = document.querySelector('#statusPages');

// Week file list
const list = document.getElementById('instruction');
const list_items = document.querySelectorAll('#instruction  li');
const week_files = document.querySelectorAll('#week-files li > a');




/**
 * Generates a list of the weeks' links
 * 
 * @param {array} arr a list contains objects holding the weeks' info
 *  
 */
function generateweeksList(arr){
    for (let i = 0; i < arr.length; i++){

        // Create a list item
        let week = document.createElement("li");

        // Create a list item Link
        let weekLink = document.createElement("a");
        weekLink.textContent = `Week ${i}`
        weekLink.setAttribute('href', `./weeks/week${i}.html`)

        // Create a list item Name
        let weekName = document.createElement("span");
        weekName.textContent =" " + arr[i].name;
        weekName.className = "gray-text";

        // Add link & name to the Item
        week.appendChild(weekLink);
        week.appendChild(weekName);

        if (arr[i].additional){
            // Create Additional
            let additional = document.createElement("span");
            additional.textContent =" " + arr[i].additional;
            additional.className = "icon";
            // Add Additional to the item
            week.appendChild(additional);
        }


        weeks.appendChild(week);
    }
}


/**
 * Generates the sublists of the menu
 * 
 * @param {array} arr a list contains objects holding the item's info (name, link, additional)
 * @param {object} parent the parent tag (ul / ol) for list that will be generated
 * 
 */
function generateMenuItems(arr, parent){

    for ( let i = 0; i < arr.length; i++){
        // Create a list item
        let item = document.createElement("li");

        // Create a list item Link
        let itemLink = document.createElement("a");
        itemLink.textContent = `${arr[i].name}`;
        itemLink.setAttribute('href', arr[i].link);


        // Add item to list
        item.appendChild(itemLink);

        // Additional
        if (arr[i].additional){
            // Create Additional
            let additional = document.createElement("span");
            additional.textContent =" " + arr[i].additional;
            additional.className = "gray-text";
            // Add Additional to the item
            item.appendChild(additional);
        }
        // Add item to the List
        parent.appendChild(item)
    }
    // horizontal bar
    parent.appendChild(document.createElement("hr"));
}


// Elements Data
const weeksList = [
    {name : 'Scratch ', additional : '😺'},
    {name :  'C'},
    {name : 'Arrays'},
    {name : 'Algorithms'},
    {name : 'Memory'},
    {name : 'Data Structures'},
    {name : 'Python'},
    {name : 'SQL'},
    {name : 'Information'}
];

const zoomList = [
    {name: 'Zoom Meetings', link: 'https://cs50.harvard.edu/x/2020/zoom/'}
];

const  tracksList= [
    {name :'Tracks', link : 'https://cs50.harvard.edu/x/2020/tracks/'},
    {name :'Android', link : 'https://cs50.harvard.edu/x/2020/tracks/mobile/android/'},
    {name :'Games', link : 'https://cs50.harvard.edu/x/2020/tracks/games/'},
    {name :'iOS', link : 'https://cs50.harvard.edu/x/2020/tracks/mobile/ios/'},
    {name :'Web', link : 'https://cs50.harvard.edu/x/2020/tracks/web/'},
    {name :'Final Project', link : 'https://cs50.harvard.edu/x/2020/project/'}
];

const certificateList = [
    {name : 'CS50 Certificate' , link : 'https://cs50.harvard.edu/x/2020/certificate/'}
];

const guideList = [
    { name:'Academic Honesty', link : 'https://cs50.harvard.edu/x/2020/honesty/'},
    { name:'Ed Discussion', link : 'https://cs50.harvard.edu/x/ed', additional: 'for Q&A'},
    { name:'Quick Start Guide', link : 'https://us.edstem.org/quickstart/ed-discussion.pdf'},
    { name:'FAQs', link : 'https://cs50.harvard.edu/x/2020/faqs/'},
    { name:'Staff', link : 'https://cs50.harvard.edu/x/2020/staff/'},
    { name:'Syllabus', link : 'https://cs50.harvard.edu/x/2020/syllabus/'}
];

const canalsList = [
    {name:'edX', link : 'https://cs50.edx.org/'},
    {name:'iTunes U', link : 'https://cs50.harvard.edu/x/2020/#'},
    {name:'YouTube', link : 'https://www.youtube.com/playlist?list=PLhQjrBD2T381L3iZyDTxRwOBuUt6m1FnW'}
];

const toolsList = [
    {name: 'CS50 IDE', link: 'https://ide.cs50.io/'},
    {name: 'Gradebook', link: 'https://cs50.me/cs50x'},
    {name: 'Manual Pages', link: 'https://man.cs50.io/'},
    {name: 'Python Documentation', link: 'https://docs.python.org/3.7/search.html'},
    {name: 'Style Guide', link: 'https://cs50.readthedocs.io/style/c/'}
];

const communitiesList = [
    {name:'Communities', link: 'https://cs50.harvard.edu/x/2020/communities/'},
    {name:'Discord', link: 'https://discord.gg/cs50'},
    {name:'Facebook Group', link: 'https://www.facebook.com/groups/cs50/'},
    {name:'Facebook Page', link: 'https://www.facebook.com/cs50/'},
    {name:'GitHub', link: 'https://github.com/cs50'},
    {name:'Gitter', link: 'https://gitter.im/cs50/x'},
    {name:'Instagram', link: 'https://instagram.com/cs50'},
    {name:'LinkedIn Group', link: 'https://www.linkedin.com/groups/7437240/'},
    {name:'LinkedIn Page', link: 'https://www.linkedin.com/school/CS50/'},
    {name:'Quora', link: 'https://www.quora.com/topic/CS50'},
    {name:'Slack', link: 'https://cs50.edx.org/slack'},
    {name:'Snapchat', link: 'https://www.snapchat.com/add/cs50'},
    {name:'Twitter', link: 'https://twitter.com/cs50'},
    {name:'YouTube', link: 'http://www.youtube.com/subscription_center?add_user=cs50tv'}
];

const statusList = [
    {name: 'Changelog', link: 'https://cs50.noticeable.io/'},
    {name: 'Status Page',link: 'https://cs50.statuspage.io/'}
];

// Generate Content
generateMenuItems(zoomList, zoom)
generateweeksList(weeksList);
generateMenuItems(tracksList, tracks);
generateMenuItems(certificateList, certificate);
generateMenuItems(guideList, guide);
generateMenuItems(canalsList, canals);
generateMenuItems(toolsList, tools);
generateMenuItems(statusList, statusPages);
generateMenuItems(communitiesList, communities);


// Opening & collapsing the Menu
// ----------------------
const menuBTN = document.querySelector('#menuBTN');
const menu = document.querySelector('#menu');

/**
 * Opening & collapsing the Menu
 */
function toggleMenu() {
    menu.classList.toggle('open');
    menuBTN.classList.toggle('BTNopen');
}

menuBTN.addEventListener('click', toggleMenu);

/**
 * Adds a dot to the left of a list item
 * @param {NodeList} unorderdList  list of targeted items 
 * @param {string} styleClass class name for the targeted items
 */
function addDot(unorderdList, styleClass){

    for (let i = 0; i < unorderdList.length; i++){
        // Create a Dot
        let dot = document.createElement('i');
        dot.classList.add('fas', 'fa-circle', styleClass);

        // Add a Dot to li
        unorderdList[i].parentNode.insertBefore(dot, unorderdList[i]);
    }
}

addDot(list_items, 'home_dots');
addDot(week_files, 'week_dots');


// Add toggle buttons for lists
// -----------------------------

const toggleBTN = document.querySelectorAll('.toggleBTN');

function toggleList(el){
    el.firstElementChild.classList.toggle('fa-plus-square')
    el.firstElementChild.classList.toggle('fa-minus-square')
    el.nextElementSibling.classList.toggle('openList')
}

for (let i= 0; i < toggleBTN.length; i++){
    toggleBTN[i].addEventListener('click',  function() {toggleList(toggleBTN[i])})
}
