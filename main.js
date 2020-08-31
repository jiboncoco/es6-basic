// get element

const skillHolder = document.getElementById('skills');

// ES5



// ES6

const yourSkills = ['PHP Framework Laravel', 'Python', 'ReactJS'];

// add item to array
yourSkills.push('VueJS');

// add html to array
let parent = '<ul>';

yourSkills.forEach((skill) => {
    parent += `<li>  ${skill} </li>`;
    console.log(`${skill}`);
});

parent += '</ul>';
skillHolder.innerHTML = parent;