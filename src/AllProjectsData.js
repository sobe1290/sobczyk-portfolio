import nerdImage from './nerdquiz.png'
import dawgImage from './wholetdawgout.png'
import techblog from './techblog.jpg'
import jate from './jate.jpg'
import mongoAPI from './MongoDB_Logo.svg'
import sqlTracker from './sqltracker.jpg'

const AllProjectsData = [
  
    { 
      key: 0,
      url: 'https://github.com/sobe1290/ayatollah-of-rock-and-rolla',
      tileImage: nerdImage,
      title: 'Nerd Quiz',
      description: 'A full stack quiz site, built using: MySql, Express.js, Handlebars.js, and Node.js'
    },
    {
      key: 1,
      url: 'https://github.com/sobe1290/wholetmydaWgout',
      tileImage: dawgImage,
      title: 'Dog Walking API',
      description: 'A site for dog walkers designed to demonstrate API Fetch abilites'
    },
    {
        key: 2,
        url: 'https://github.com/sobe1290/SobczyksTechBlog',
        tileImage: techblog,
        title: 'CMS Blog',
        description: 'This is a CMS-stlye blog site. Users can post tech related topics and comment on posts.'
    },
    {
        key: 3,
        url: 'https://github.com/sobe1290/SobczykTextEditor',
        tileImage: jate,
        title: 'PWA',
        description: 'Progressive Web Application that works using your browser, that will also work offline if installed. '
        },
        { 
            key: 4,
            url: 'https://github.com/sobe1290/SobczyksSocialNetworkAPI',
            tileImage: mongoAPI,
            title: 'MongoDB API',
            description: 'This is a back end node application that uses MongoDB and Express to serve routes for a Social Network API.'
          },
          { 
            key: 5,
            url: 'https://github.com/sobe1290/SobczyksSQLTeamTracker',
            tileImage: sqlTracker,
            title: 'SQL Team Tracker',
            description: 'This is a command line content management system that uses MySQL and Node.js to track employees on a team.'
          },
    ];

    export default AllProjectsData;