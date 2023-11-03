


import ffImage from '../Assets/proj_screenshots/Fetch/image1.png'
import ffImage2 from '../Assets/proj_screenshots/Fetch/image2.png'
import ffImage3 from '../Assets/proj_screenshots/Fetch/image3.png'
import ffImage4 from '../Assets/proj_screenshots/Fetch/image4.png'
import ffImage5 from '../Assets/proj_screenshots/Fetch/image5.png'

import ffstock from '../Assets/projcard_images/ff.png'

import bwImage from '../Assets/proj_screenshots/Bird/image1.png'
import bwImage2 from '../Assets/proj_screenshots/Bird/image2.png'
import bwImage3 from '../Assets/proj_screenshots/Bird/image3.png'
import bwImage4 from '../Assets/proj_screenshots/Bird/image4.png'
import bwImage5 from '../Assets/proj_screenshots/Bird/image5.png'

import bwstock from '../Assets/projcard_images/bw.png'

import jobImage from '../Assets/proj_screenshots/Jobs/image1.png'
import jobImage2 from '../Assets/proj_screenshots/Jobs/image2.png'
import jobImage3 from '../Assets/proj_screenshots/Jobs/image3.png'
import jobImage4 from '../Assets/proj_screenshots/Jobs/image4.png'
import jobstock from '../Assets/projcard_images/job.png'


import fmImage1 from '../Assets/proj_screenshots/Market/image1.png'
import fmImage2 from '../Assets/proj_screenshots/Market/image2.png'
import fmImage3 from '../Assets/proj_screenshots/Market/image3.png'
import fmImage5 from '../Assets/proj_screenshots/Market/image5.png'
import fmImage6 from '../Assets/proj_screenshots/Market/image6.png'

import fmstock from '../Assets/projcard_images/fm.png'



export const projects = [
    {
        id: 0,
        title: 'BirdWatcher',
        card_image: bwstock,
        vid_url:'https://res.cloudinary.com/dfbe9u9zm/video/upload/v1696712820/bwVid_y3zkoc.mov',
        images:[
            {
                id:0,
                image: bwstock
            },
            {
                id:1,
                image: bwImage
            },            
            {
                id:2,
                image: bwImage2
            },
            {
                id:3,
                image: bwImage3
            },
            {
                id:4,
                image: bwImage4
            },
            {
                id:5,
                image: bwImage5
            },
        ],
        description: 'Bird Watcher is a full stack, gps based, diary web app for bird enthusiasts looking for a better way to document their sightings.  It features a map function, which plots user bird sightings, providing a visual representation of your birdwatching experiences.',
        techs: [ 'React.js', 'Redux.js', 'Javascript', 'Rails', 'Ruby', 'Tailwind CSS', 'Cloudinary API', 'Mapbox API', 'Geocoder API' ],
        git: 'https://github.com/lvas248/b_watcher',
        demo: 'https://b-watcher.onrender.com'
    },

    {
        id: 1,
        title: "Farmer's Market",
        card_image: fmstock,
        vid_url: 'https://res.cloudinary.com/dfbe9u9zm/video/upload/v1696630273/Screen_Recording_2023-10-06_at_5.18.16_PM_uoqvaa.mov',
        images:[
            {
                id: 0,
                image: fmstock
            },
            {
                id: 1,
                image: fmImage1
            },
            {
                id: 2,
                image: fmImage2
            },            {
                id: 3,
                image: fmImage3
            },            
            // {
            //     id: 4,
            //     image: fmImage4
            // },
            {
                id: 5,
                image: fmImage5
            },            {
                id: 6,
                image: fmImage6
            },
        ],
        description: 'Farmers Market is a complete, full-stack, e-commerce web application, providing a lifelike online shopping experience for fresh produce.',
        techs: ['Javascript', 'React.js', 'Redux.js',  'Ruby', 'Rails', 'Active Record', 'HTML', 'TailwindsCSS', 'Geoapify'],
        git: 'https://github.com/lvas248/farmers_market_revamp',
        demo: 'https://farmers-market-c6jl.onrender.com'

    },

    {
        id: 2,
        title: 'NYC Job Hunt',
        card_image: jobstock,
        vid_url: 'https://res.cloudinary.com/dfbe9u9zm/video/upload/v1696712166/jobsvid_vz8gqv.mov',
        images: [
            {
                id: 0,
                image: jobstock
            },

            {
                id:1,
                image: jobImage
            },
            
            {
                id:2,
                image: jobImage2
            },
            {
                id:3,
                image: jobImage3
            },
            {
                id:4,
                image: jobImage4
            }
            
        ],
        description: 'NYC Job Hunt is a React-based application offering users a streamlined platform to explore, save, and manage NYC government job listings.',
        techs: ['React.js', 'Rails', 'Redux', 'TailwindCSS', 'Active Record' ],
        git: 'https://github.com/lvas248/jobs',
        demo: 'https://jobs-b8os.onrender.com'            
    },
    {
        id:3,
        title: 'Fetch Finder',
        card_image: ffstock,
        vid_url: 'https://res.cloudinary.com/dfbe9u9zm/video/upload/v1696711457/ffVid_wkriid.mov',
        images: [
            {
                id:0,
                image: ffstock
            },
            {
                id:1,
                image: ffImage
            },            
            {
                id:2,
                image: ffImage2
            },            
            {
                id:3,
                image: ffImage3
            },         
            {
                id:4,
                image: ffImage4
            },         
            {
                id:5,
                image: ffImage5
            },
    
        ],
        description: 'Fetch Finder is a GPS-based web app that helps NYC dog owners find nearby dog parks with ratings, feedback, and real-time occupancy data, ensuring enjoyable outings for their furry friends.',
        techs: ['React.js', 'Rails', 'Redux', 'Reactstrap', 'Mapbox' ],
        git: 'https://github.com/lvas248/FetchFinder',
        demo: 'https://fetchfinder.onrender.com'            
    }  
]