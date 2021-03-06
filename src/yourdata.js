// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
// import designIcon from "./images/design.svg"
// import codeIcon from "./images/code.svg"
import nodeIcon from "./images/node-js-black.svg"
import profilePic from "./images/rachelamos.jpg"
import expressIcon from "./images/expressjs.png"

// Social Icon
import githubIcon from "./images/github.svg"
// import codepenIcon from "./images/codepen.svg"
// import dribbbleIcon from "./images/dribbble.svg"
// import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Rachel",
  headerTagline: [
    //Line 1 For Header
    // "Thanks for viewing my portfolio",
    //Line 2 For Header
    "Welcome to my portfolio.",
    //Line 3 For Header
    // "Take a look below at my background and projects.",
  ],
  //   Header Paragraph
  headerParagraph:
    // "Full Stack Web Developer with a background in writing, project management, and logistics. Passionate learner and effective communicator with a knack for pushing projects to completion.",
    "I love the challenge of transforming ideas into something concrete and beautiful. I use HTML, CSS, JavaScript, and React to get it done.",

  //Contact Email
  contactEmail: "rachelamos35@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "WeekDaze", //Project Title - Add Your Project Title Here
      para:
        "Use WeekDaze to store and keep track of your job applications' progress. Built using Handlebars, Chart.js, MySQL, Node.js, and Express.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://arcane-harbor-21800.herokuapp.com/",
    },
    {
      title: "Vacation Planner", //Project Title - Add Your Project Title Here
      para:
        "Vacation Planner allows users to plan their vacations while also easing decision fatigue in this easy-to-use application.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://damiandeleon.github.io/vacation_planner/",
    },
    {
      title: "Budget Tracker", //Project Title - Add Your Project Title Here
      para:
        "Budget Tracker is an app that allows users to track their expenses and deposits both online and offline using IndexedDB, a manifest worker, and a service-worker file.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://mysterious-thicket-33753.herokuapp.com/",
    },
    {
      title: "Tech Blog", //Project Title - Add Your Project Title Here
      para:
        "This app uses Node.js, Express, MySQL, Handlebars, and Sequelize to create a CMS-style blog, not unlike Wordpress. Users can publish posts and comment on posts.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://salty-ocean-05546.herokuapp.com/",
    },
    {
      title: "Workday Planner", //Project Title - Add Your Project Title Here
      para:
        "This application allows you to plan your work day by adding notes to hour timeblocks.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://rachelamos.github.io/workDayPlanner/",
    },
    {
      title: "Workout Tracker", //Project Title - Add Your Project Title Here
      para:
        "Workout-Tracker is an app that allows users to track their workout progress and reach their fitness goals more quickly using Express, MongoDB, and Mongoose.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://limitless-basin-76792.herokuapp.com/?id=608eff05f4d63200155d3d4a",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I began studying web development as a mom in her 30s because I love a challenge. Working on a team to solve a client???s problem is a thrill for me???I thrive on the process of leaning on each other???s strengths to create order out of chaos and something beautiful out of nothing.",
  aboutParaTwo:
    "My background in writing, logistics, and project management has helped me develop a reputation for pushing projects to completion and striving for clean, dry code.",
  aboutParaThree:
    "Thanks for visiting my portfolio???please take a look at my past projects and current skill-set. I???d love to connect and help you create a solution for whatever problem is in front of you.",
  aboutImage:
  profilePic,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "HTML5",
    },
    {
      img: cssIcon,
      para:
        "CSS3"
    },
    {
      img: jsIcon,
      para:
        "JavaScript"
    },
    {
      img: reactIcon,
      para:
        "React"
    },
    {
      img: expressIcon,
      para:
        "Express"
    },
    {
      img: nodeIcon,
      para:
        "Node"
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  // promotionHeading: "Heading",
  // promotionPara:
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's work together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/rachelamos" },
    // {
    //   // img: codepenIcon,
    //   // url: "https://www.codepen.com/",
    // },
    // {
    //   // img: dribbbleIcon,
    //   // url: "https://dribbble.com/chetanverma",
    // },
    // {
    //   // img: instagramIcon,
    //   // url: "https://www.instagram.com/",
    // },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
