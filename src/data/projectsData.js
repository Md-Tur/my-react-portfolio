import project1 from '../assets/projects/bike-buddies.PNG';
import project2 from '../assets/projects/mega-grocery.PNG';
import project3 from '../assets/projects/dental-solution.PNG';

export const projectsData = [
    {
        id: 1,
        projectName: 'Bike Buddies',
        projectDesc: 'A manufacture website that contains functionalities like: Admin Dashboard where an admin can see order history, payment history, all users, manage products, stock products, make new admin, etc. Users can order products but it’s required to order a minimum range of products here, able to see their own order history, update profile, and log in/sign up here.Online payment system for users (implementing).',
        tags: ['React.JS', 'Tailwind CSS', 'Node.JS', 'Express.JS', 'MongoDB', 'Firebase'],
        code: 'https://github.com/Md-Tur/bike-buddies-client',
        demo: 'https://bike-buddies-4cd22.web.app/',
        image: project1
    },
    {
        id: 2,
        projectName: 'Mega Grocery',
        projectDesc: 'A grocery dealer website that contains functionalities like: A grocery dealer can log in/sign up here, update or restock any product, able to see available products. Able to add new products and after adding a new product it will be shown on the homepage. If any products are stocked out, then the dealer can delete that product from the site.',
        tags: ['React.JS', 'Bootstrap', 'Node.JS', 'Express.JS', 'MongoDB', 'Firebase'],
        code: 'https://github.com/Md-Tur/mega-grocery-client',
        demo: 'https://mega-grocery-bb035.web.app/',
        image: project2
    },
    {
        id: 3,
        projectName: 'Dental Solution',
        projectDesc: 'A single person based website that contains functionalities like: Users can log in/sign up here easily using mail & password or by a social login system. A user is able to make an appointment for his/her treatment from a specialist and confirm the appointment by checking out with the required information. Users are able to see all services as well as service details including service price but it’s required to be logged in here for making an appointment.',
        tags: ['React.JS', 'Bootstrap'],
        code: 'https://github.com/Md-Tur/dental-solution',
        demo: 'https://dental-solution-6f8eb.web.app/',
        image: project3
    }
]
