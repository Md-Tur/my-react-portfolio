import ph from '../assets/png/achievement/ph-certificate.PNG';
import bh from '../assets/png/achievement/bohubrihi-certificate.PNG';
import cs from '../assets/png/achievement/cisco-certificate.PNG';

export const achievementData = {
    bio: "“Stay hungry, stay foolish”. - Steve Jobs",
    achievements: [
        {
            id: 1,
            title: 'Complete Web Development with Jhankar Mahbub',
            details: 'MERN Stack Development',
            date: 'June 30, 2022',
            field: 'Web Development',
            image: ph
        },
        {
            id: 2,
            title: 'Web Development with Bohubrihi',
            details: 'HTML5, CSS3 & Bootstrap 4',
            date: 'December 22, 2020',
            field: 'Web Development',
            image: bh
        },
        {
            id: 3,
            title: 'Cisco Networking Academy',
            details: 'Networking',
            date: 'February 22, 2020',
            field: 'Cybersecurity',
            image: cs
        }

    ]
}
