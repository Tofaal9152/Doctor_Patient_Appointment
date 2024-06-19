import { FaBookmark } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import Avatar from "../assets/Avatar.jpeg";
export const navbarNavLinks = [
  {
    id: "Demos",
    title: "Demos",
  },
  {
    id: "About",
    title: "About",
  },
  {
    id: "Blog",
    title: "Blog",
  },
  {
    id: "Pages",
    title: "Pages",
  },
  {
    id: "Contact",
    title: "Contact",
  },
];
export const footerNavLinks = [
  {
    id: "About",
    title: "About",
  },
  {
    id: "Features",
    title: "Features",
  },
  {
    id: "Works",
    title: "Works",
  },
  {
    id: "Support",
    title: "Support",
  },
];

export const messageContainer = [
  {
    img: Avatar,
    avatar_name: "Md Tofaal Ahmed",
    avatar_text:
      "I'm thinking about creating a new website for our project. What do you think?",
    time: "12:30",
  },
  {
    img: Avatar,
    avatar_name: "Sk Tanim",
    avatar_text:
      "That sounds like a great idea! We need to discuss the features we want to include.",
    time: "12:32",
  },
  {
    img: Avatar,
    avatar_name: "Tanvir Hasan",
    avatar_text: "I believe a modern and minimalist design would be perfect.",
    time: "12:34",
  },
  {
    img: Avatar,
    avatar_name: "Nadia Islam",
    avatar_text:
      "How about we use React for the frontend and Node.js for the backend?",
    time: "12:36",
  },
  {
    img: Avatar,
    avatar_name: "Farhan Hossain",
    avatar_text:
      "For the database, MongoDB seems like a good option. It's flexible and scalable.",
    time: "12:38",
  },
  {
    img: Avatar,
    avatar_name: "Sabina Khatun",
    avatar_text:
      "We should make sure our website is responsive and looks good on all devices.",
    time: "12:40",
  },
  {
    img: Avatar,
    avatar_name: "Mahfuz Rahman",
    avatar_text:
      "Accessibility is crucial. We need to ensure it's usable for everyone.",
    time: "12:42",
  },
  {
    img: Avatar,
    avatar_name: "Rina Akter",
    avatar_text:
      "Let's deploy the frontend on Vercel and the backend on Heroku.",
    time: "12:44",
  },
  {
    img: Avatar,
    avatar_name: "Abdul Karim",
    avatar_text:
      "We should set up continuous integration to automatically run our tests.",
    time: "12:46",
  },
  {
    img: Avatar,
    avatar_name: "Fatima Begum",
    avatar_text:
      "I'm excited to start working on this project. Let's keep each other updated.",
    time: "12:48",
  },
  {
    img: Avatar,
    avatar_name: "Arif Chowdhury",
    avatar_text:
      "I'll start with the initial setup and we can iterate from there.",
    time: "12:50",
  },
  {
    img: Avatar,
    avatar_name: "Shamima Sultana",
    avatar_text: "Feel free to share any other ideas or suggestions you have.",
    time: "12:52",
  },
  {
    img: Avatar,
    avatar_name: "Nafis Anwar",
    avatar_text: "We should also plan our testing strategy carefully.",
    time: "12:54",
  },
  {
    img: Avatar,
    avatar_name: "Tania Parveen",
    avatar_text:
      "Using Jest and React Testing Library for frontend testing is a good choice.",
    time: "12:56",
  },
  {
    img: Avatar,
    avatar_name: "Rashid Khan",
    avatar_text: "Let's make this website the best it can be!",
    time: "12:58",
  },
];
// Conversations
export const chating_between = [
  {
    MyText:
      "I'm thinking about creating a website for our project. What do you think?",
    MyTime: "12:30",
    FriendImage: Avatar,
    FriendText:
      "That sounds like a great idea! What kind of features are you considering?",
    FriendMyTime: "12:31",
  },
  {
    MyText:
      "I'd like to start with a homepage, an about section, and a contact form. We can add more features as we go. What do you think?",
    MyTime: "12:32",
    FriendImage: Avatar,
    FriendText:
      "I agree. We should also include a portfolio section to showcase our work. Maybe a blog section too?",
    FriendMyTime: "12:33",
  },
  {
    MyText:
      "A blog section is a good idea. It can help us engage with our audience and improve our SEO. Do you have any design preferences?",
    MyTime: "12:34",
    FriendImage: Avatar,
    FriendText:
      "I prefer a modern look with a clean and minimalist design. Lots of white space and a good use of color. What about you?",
    FriendMyTime: "12:35",
  },
  {
    MyText:
      "I like the modern look too. Let's go for a responsive design so it looks good on all devices. We should also think about accessibility.",
    MyTime: "12:36",
    FriendImage: Avatar,
    FriendText:
      "Absolutely. Accessibility is key. We need to make sure our website is usable for everyone, including people with disabilities.",
    FriendMyTime: "12:37",
  },
  {
    MyText:
      "Right. We should use semantic HTML and make sure all interactive elements are accessible via keyboard. Also, let's use alt text for images.",
    MyTime: "12:38",
    FriendImage: Avatar,
    FriendText:
      "Good points. What about the technical stack? Are you thinking of using any specific technologies or frameworks?",
    FriendMyTime: "12:39",
  },
  {
    MyText:
      "I'm thinking of using React for the frontend because it's component-based and efficient. For the backend, maybe Node.js with Express?",
    MyTime: "12:40",
    FriendImage: Avatar,
    FriendText:
      "That works for me. React is great for building dynamic UIs, and Node.js with Express is perfect for creating a robust backend. What about the database?",
    FriendMyTime: "12:41",
  },
  {
    MyText:
      "For the database, I was considering MongoDB because it’s flexible and scalable. Plus, it works well with JavaScript-based technologies.",
    MyTime: "12:42",
    FriendImage: Avatar,
    FriendText:
      "MongoDB is a good choice. It's easy to scale and handle large amounts of data. We should also think about deploying the website. Any thoughts on that?",
    FriendMyTime: "12:43",
  },
  {
    MyText:
      "For deployment, I was thinking of using a service like Vercel or Netlify for the frontend. They offer great CI/CD pipelines and are easy to use. For the backend, maybe AWS or Heroku?",
    MyTime: "12:44",
    FriendImage: Avatar,
    FriendText:
      "Vercel or Netlify sound good for the frontend. For the backend, AWS might be a bit overkill for our needs. Heroku could be simpler to manage initially.",
    FriendMyTime: "12:45",
  },
  {
    MyText:
      "You're right. Heroku is simpler and has a free tier we can use to get started. Let's go with that. What about testing? We should have a solid testing strategy.",
    MyTime: "12:46",
    FriendImage: Avatar,
    FriendText:
      "Yes, we need to have both unit and integration tests. For React, we can use Jest and React Testing Library. For the backend, maybe Mocha and Chai?",
    FriendMyTime: "12:47",
  },
  {
    MyText:
      "Jest and React Testing Library are great choices for the frontend. Mocha and Chai will work well for the backend. Let's also set up continuous integration to run our tests automatically.",
    MyTime: "12:48",
    FriendImage: Avatar,
    FriendText:
      "Agreed. We can use GitHub Actions or CircleCI for continuous integration. This will help us catch issues early and ensure our codebase remains stable.",
    FriendMyTime: "12:49",
  },
  {
    MyText:
      "Perfect. We have a solid plan in place. I'll start working on the initial setup and we can iterate from there. Let's keep communicating and share our progress regularly.",
    MyTime: "12:50",
    FriendImage: Avatar,
    FriendText:
      "Sounds like a plan! I'm excited to see our project come to life. Let's do this!",
    FriendMyTime: "12:51",
  },
];
export const Translate_to = [
  {
    language: "English",
  },
  {
    language: "Spanish",
  },
  {
    language: "French",
  },
  {
    language: "German",
  },
  {
    language: "Chinese",
  },
];
