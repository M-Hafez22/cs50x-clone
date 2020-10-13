const zoom = document.querySelector('#zoom');
const weeks = document.querySelector("#weeks");
const tracks = document.querySelector("#tracks");
const certificate = document.querySelector("#certificate");
const guide = document.querySelector("#guide");
const canals = document.querySelector('#canals');
const tools = document.querySelector('#tools');
const communities = document.querySelector('#communities');
const statusPages = document.querySelector('#statusPages');

// Generte weeks items

function generateweeksList(arr){
    for (let i = 0; i < arr.length; i++){
                
        // Create a list item
        let week = document.createElement("li");
        
        // Create a list item Link
        let weekLink = document.createElement("a");
        weekLink.textContent = `Week ${i}`
        weekLink.setAttribute('href', `https://cs50.harvard.edu/x/2020/weeks/${i}`)
 
        // Create a list item Name
        let weekName = document.createElement("span");
        weekName.textContent =" " + arr[i];
        weekName.className = "gray-text";

        // Add link & name to the Item
        week.appendChild(weekLink);
        week.appendChild(weekName);

        weeks.appendChild(week);
    }
}

const weeksList = [ 'Scratch 😺', 'C','Arrays','Algorithms','Memory','Data Structures','Python','SQL','Information'];

generateweeksList(weeksList);