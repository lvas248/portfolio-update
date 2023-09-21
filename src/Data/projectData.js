


import ffImage from '../Assets/proj_screenshots/Fetch/image1.png'
import ffImage2 from '../Assets/proj_screenshots/Fetch/image2.png'
import ffImage3 from '../Assets/proj_screenshots/Fetch/image3.png'
import ffstock from '../Assets/projcard_images/ff.png'

import bwImage from '../Assets/proj_screenshots/Bird/image1.png'
import bwImage2 from '../Assets/proj_screenshots/Bird/image2.png'
import bwstock from '../Assets/projcard_images/bw.jpg'

import jobImage from '../Assets/proj_screenshots/Jobs/image1.png'
import jobImage2 from '../Assets/proj_screenshots/Jobs/image2.png'
import jobstock from '../Assets/projcard_images/job.png'

// import portfolioImage from '../Assets/proj_screenshots/Port/image1.png'

import fmImage1 from '../Assets/proj_screenshots/Market/image1.png'
import fmImage2 from '../Assets/proj_screenshots/Market/image2.png'
import fmImage3 from '../Assets/proj_screenshots/Market/image3.png'
import fmstock from '../Assets/projcard_images/fm.png'



export const projects = [
    {
        id: 0,
        title: 'Farmers Market',
        card_image: fmstock,
        images:[
            {
                id: 0,
                image: fmImage1
            },
            {
                id: 1,
                image: fmImage2
            },            {
                id: 2,
                image: fmImage3
            },
        ],
        description: 'Farmers Market is a fully functional frontend web app that lets you explore and purchase fresh produce with ease. Search through a variety of farm-fresh items, add them to your cart, and simulate the complete e-commerce experience.',
        techs: ['React.js', 'HTML', 'TailwindsCSS'],
        git: 'https://github.com/lvas248/retail_template',
        demo: 'https://retail-6rlp.onrender.com'

    },

    {
        id: 1,
        title: 'NYC Job Hunt',
        card_image: jobstock,
        images: [
            {
                id:0,
                image: jobImage
            },
            {
                id:1,
                image: jobImage2
            }
        ],
        description: 'React-based application offering users a streamlined platform to explore, save, and manage NYC government job listings.',
        techs: ['React.js', 'Rails', 'Redux', 'TailwindCSS', 'Active Record' ],
        git: 'https://github.com/lvas248/jobs',
        demo: 'https://jobs-b8os.onrender.com'            
    },
    {
        id:2,
        title: 'FetchFinder NYC',
        card_image: ffstock,
        images: [
            {
                id:0,
                image: ffImage
            },            {
                id:1,
                image: ffImage2
            },            
            {
                id:2,
                image: ffImage3
            },
    
        ],
        description: 'A GPS-based web app that helps NYC dog owners find nearby dog parks with ratings, feedback, and real-time occupancy data, ensuring enjoyable outings for their furry friends.',
        techs: ['React.js', 'Rails', 'Redux', 'Reactstrap', 'Mapbox' ],
        git: 'https://github.com/lvas248/FetchFinder',
        demo: 'https://fetch-finder.onrender.com'            
    },        
    {
        id: 3,
        title: 'BirdWatcher',
        card_image: bwstock,
        images:[
            {
                id:0,
                image: bwImage
            },            {
                id:1,
                image: bwImage2
            },
        ],
        description: 'A diary app for bird enthusiasts to capture and document their bird sightings through photos and notes, creating a personalized collection of memorable encounters.',
        techs: [ 'React.js', 'Rails', 'Reactstrap', 'Cloudinary' ],
        git: 'https://github.com/lvas248/bird_watchr',
        demo: 'https://bird-watcher.onrender.com'
    },
    // {
    //     id:4,
    //     title: 'My Portfolio Website',
    //     images: [
    //         {
    //             id:0,
    //             image: portfolioImage
    //         }
    //     ],
    //     description: 'A place where you can explore my creative journey. Gain insight into my unique perspective by checking out the intersection of creativity and technical expertise showcased in my work.',
    //     techs: ['React.js', 'TailswindCSS', 'EmailJS' ],
    //     git: 'https://github.com/lvas248/my-portfolio',
    //     demo: 'luisvasquez.dev'            
    // }
]