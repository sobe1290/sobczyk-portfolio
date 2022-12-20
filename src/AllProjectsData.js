import nerdImage from './nerdquiz.png'
import dawgImage from './wholetdawgout.png'
import techblog from './techblog.jpg'
import jate from './jate.jpg'
import mongoAPI from './MongoDB_Logo.svg'
import finalProject from './finalProject.png'

const AllProjectsData = [
  
    { 
      key: 0,
      url: 'https://github.com/sobe1290/ayatollah-of-rock-and-rolla',
      tileImage: nerdImage,
      title: 'Nerd Quiz',
      description: 'A full stack quiz site, built using: MySql, Express.js, Handlebars.js, and Node.js',
      deployment: true,
      liveLink: 'https://nerd-knowledge-quest.herokuapp.com/'
    },
    {
      key: 1,
      url: 'https://github.com/sobe1290/wholetmydaWgout',
      tileImage: dawgImage,
      title: 'Dog Walking API',
      description: 'A site for dog walkers designed to demonstrate API Fetch abilites',
      deployment: true,
      liveLink: 'https://sobe1290.github.io/wholetmydaWgout/'
    },
    {
        key: 2,
        url: 'https://github.com/sobe1290/SobczyksTechBlog',
        tileImage: techblog,
        title: 'CMS Blog',
        description: 'This is a CMS-stlye blog site. Users can post tech related topics and comment on posts.',
        deployment: true,
        liveLink: 'https://sobczyktechblog.herokuapp.com/'
    },
    {
        key: 3,
        url: 'https://github.com/sobe1290/SobczykTextEditor',
        tileImage: jate,
        title: 'PWA',
        description: 'Progressive Web Application that works using your browser, that will also work offline if installed. ',
        deployment: true,
        liveLink: 'https://sobczyktexteditor.herokuapp.com/'
        },
        { 
            key: 4,
            url: 'https://github.com/sobe1290/SobczyksSocialNetworkAPI',
            tileImage: mongoAPI,
            title: 'MongoDB API',
            description: 'This is a back end node application that uses MongoDB and Express to serve routes for a Social Network API.',
            deployment: false,
          },
          { 
            key: 5,
            url: 'https://github.com/zshep/Fortress_of_Solitude',
            tileImage: finalProject,
            title: 'GoMode',
            description: 'This is a community volunteer board where you can post and take jobs!',
            deployment: true,
            liveLink: 'https://gomodez.herokuapp.com/'
          },
    ];

    export default AllProjectsData;