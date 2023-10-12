/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//
// Definitions of displaying functions which overwrite the current DOM.
//

function displayHomePage() {
  closeNav();

  // Update topic-container
  const newTopic = `
    <h1>Hello<br />
      I'm Thomas!
    </h1>
    <h3>
      Software Engineer, Data Scientist, and Sport Entheusiast.
    </h3>
  `;
  const topicContainer = document.querySelector(".topic-container");
  topicContainer.innerHTML = newTopic;

  // Update content containers
  const contentContainer = document.querySelector(".content-container");

  // Check if topicContainer has a div with class .btn-container, else append it
  if (topicContainer.querySelector(".btn-container") === null) {
    // Update button container
    const buttons = `
    <button id="project-navi-2" class="btn">Projects</button>
    <button id="experience-navi-2" class="btn">Experience</button>
    <button id="about-navi-2" class="btn">About</button>
    <button id="blog-navi-2" class="btn">Blog</button>
    <button id="contact-navi-2" class="btn">Contact</button>
  `;
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("btn-container");
    buttonContainer.innerHTML = buttons;
    topicContainer.appendChild(buttonContainer);
  }

  // This list could be fetched globaly from a database
  const newContent = [
    {
      title: "Crafting Your Digital Presence",
      description: "My experience building a website from scratch.",
    },
    {
      title: "Reaching hidden Clients",
      description: "Forwarding packages to hidden clients using a VPN Gateway.",
    },
    {
      title: "Beyond Monoliths",
      description: "Embracing Components in Software Design.",
    },
  ];
  contentContainer.innerHTML = "<h2>Recent Projects</h2>";

  // Create a container for each entry
  newContent.forEach(function (entry, index) {
    // Create a parent div for each project
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container-landingpage");

    const titleElement = document.createElement("h3");
    // const descriptionElement = document.createElement("p");

    titleElement.textContent = entry.title;
    // descriptionElement.textContent = entry.description;

    projectContainer.appendChild(titleElement);
    // projectContainer.appendChild(descriptionElement);

    contentContainer.appendChild(projectContainer);
  });
}

function displayAboutPage() {
  closeNav();

  // Update topic-container
  const newTopic = `
    <h1>Hello<br />
      About Me!
    </h1>
    <h3>
      TBD...
    </h3>
  `;
  // Select the topic-container
  const topicContainer = document.querySelector(".topic-container");
  // Set the innerHTML of the topic-container to the new content
  topicContainer.innerHTML = newTopic;

  // // Select all project containers
  const contentContainer = document.querySelector(".content-container");
  contentContainer.textContent = "";
}

function displayProjectPage() {
  closeNav();

  // Update topic-container
  const newTopic = `
    <h1>Hello<br />
      My Projects
    </h1>
    <h3>
      TBD...
    </h3>
  `;

  // Select the topic-container
  const topicContainer = document.querySelector(".topic-container");

  // Set the innerHTML of the topic-container to the new content
  topicContainer.innerHTML = newTopic;

  // Update project containers
  const newContent = [
    {
      title: "New Project 1",
      description: "This is a new project description.",
      picture: "https://picsum.photos/200/300",
    },
    {
      title: "New Project 2",
      description: "This is another new project description.",
      picture: "https://picsum.photos/200/300",
    },
    {
      title: "New Project 3",
      description: "This is a third new project description.",
      picture: "https://picsum.photos/200/300",
    },
  ];

  // Select all project containers
  const projectContainers = document.querySelectorAll(".content-container");

  // Update the content of each project container with the new data
  projectContainers.forEach(function (container, index) {
    const titleElement = container.querySelector("h3");
    const descriptionElement = container.querySelector("p");

    titleElement.textContent = newContent[index].title;
    descriptionElement.textContent = newContent[index].description;
  });
}

function displayExpiriencePage() {
  closeNav();

  // Update topic-container
  const newTopic = `
    <h2></h2>
    <p>
      Collection of my academic and professional experience.
    </p>
  `;
  const topicContainer = document.querySelector(".topic-container");
  topicContainer.innerHTML = newTopic;

  // Update content containers
  const newContent = [
    {
      title: "2022 - Present",
      description: "Software Engineer at Melbbad GmbH.",
    },
    {
      title: "2015 - 2022",
      description: "Studied Computer Science at TU Darmstadt.",
    },
    {
      title: "1990 - 1995",
      description: "Swimming.",
    },
  ];
  const contentContainer = document.querySelector(".content-container");
  contentContainer.innerHTML = "";

  // Create a container for each entry
  newContent.forEach(function (entry, index) {
    const titleElement = document.createElement("h3");
    const descriptionElement = document.createElement("p");

    titleElement.textContent = entry.title;
    descriptionElement.textContent = entry.description;

    contentContainer.appendChild(titleElement);
    contentContainer.appendChild(descriptionElement);
  });
}

// Bind buttons to display-functions
document.getElementById("home-navi").addEventListener("click", displayHomePage);

document
  .getElementById("about-navi")
  .addEventListener("click", displayAboutPage);
document
  .getElementById("about-navi-2")
  .addEventListener("click", displayAboutPage);

document
  .getElementById("project-navi")
  .addEventListener("click", displayProjectPage);
document
  .getElementById("project-navi-2")
  .addEventListener("click", displayProjectPage);

document
  .getElementById("experience-navi")
  .addEventListener("click", displayExpiriencePage);
