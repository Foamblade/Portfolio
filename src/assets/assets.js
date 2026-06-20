import user_image from './profile-img.jpeg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img2.jpeg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import react_svg from './react.svg';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    react_svg,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Micromouse Project',
        description: 'Designed floodfill algorithm specifically for our bot, 1st prize at IIT BHU Technex\'25',
        bgImage: 'url("/project-1.png?v=2")',
        link: 'https://www.linkedin.com/posts/aditya-patil-a9a44b323_technex2025-micromouse-iitbhu-ugcPost-7317503952827158529-LxuP/?highlightedUpdateUrn=urn%3Ali%3Aactivity%3A7317503955092033544&origin=SOCIAL_SHARE&utm_source=share&utm_medium=member_desktop&rcm=ACoAAFHB9FYBTrESRyqUl2VlJxStkiPNfvJBJes'
    },
    {
        title: 'LabEvo System',
        description: 'MERN Stack Lab Evaluation system with Judge0 code execution',
        bgImage: 'url("/project-2.png")',
        link: 'https://lab-evaluation-system.vercel.app/'
    },
    {
        title: 'Aerial Robotics',
        description: 'ROS-based drone simulation, mapping & path finding (Minefield Navigation Challenge)',
        bgImage: 'url("/project-3.png?v=2")',
        link: 'https://drive.google.com/drive/u/7/folders/1nj6PtAkvRQTPxUYBnSmAnektfX9TzzEm'
    }
]

export const achievementsData = [
    { icon: assets.web_icon, title: 'Micromouse 1st Prize', description: 'IIT BHU Technex\'25 Winner with custom floodfill algorithm bot.', link: '' },
    { icon: assets.ui_icon, title: '350+ Problems Solved', description: 'Solved across LeetCode and Codeforces showing strong DSA skills.', link: '' },
    { icon: assets.mobile_icon, title: 'Hackathon Finalist', description: 'Chhalaang 4.0 Finalist & Flipkart GRID 7.0 Round 2 Qualifier.', link: '' },
    { icon: assets.graphics_icon, title: 'Leadership', description: 'Technical Executive (Vision CSE) & Automation Lead (Robotics Club).', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'C, C++, Python, Arduino, React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech CSE at MANIT Bhopal (CGPA: 8.63)' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Micromouse, LabEvo, Aerial Robotics' }
];

export const toolsData = [
    assets.vscode, assets.mongodb, assets.git, assets.react_svg
];