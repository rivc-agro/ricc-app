import React from 'react';
import mask1 from '../assets/img/demo/frame1-area.svg';
import mask2 from '../assets/img/demo/frame1-area1.svg';
import mask3 from '../assets/img/demo/frame1-area2.svg';
import mask4 from '../assets/img/demo/frame1-area3.svg';
import mask5 from '../assets/img/demo/frame1-area4.svg';
import mask6 from '../assets/img/demo/frame1-area5.svg';
import mask7 from '../assets/img/demo/frame1-area6.svg';
import mask8 from '../assets/img/demo/frame1-area7.svg';
import mask9 from '../assets/img/demo/frame1-area8.svg';
import mask10 from '../assets/img/demo/frame1-area9.svg';
import mask11 from '../assets/img/demo/frame1-area10.svg';
import mask12 from '../assets/img/demo/frame1-area11.svg';
import mask13 from '../assets/img/demo/frame1-area12.svg';
import mask14 from '../assets/img/demo/frame1-area13.svg';
import mask15 from '../assets/img/demo/frame1-area14.svg';
import mask16 from '../assets/img/demo/frame1-area15.svg';
import mask17 from '../assets/img/demo/frame1-area16.svg';
import mask18 from '../assets/img/demo/frame1-area17.svg';
// import mask19 from '../assets/img/demo/frame1-area18.svg';
// import mask20 from '../assets/img/demo/frame1-area19.svg';
// import mask21 from '../assets/img/demo/frame1-area20.svg';
// import mask22 from '../assets/img/demo/frame1-area21.svg';
// import mask23 from '../assets/img/demo/frame1-area22.svg';
// import mask24 from '../assets/img/demo/frame1-area23.svg';
// import mask25 from '../assets/img/demo/frame1-area24.svg';
// import mask26 from '../assets/img/demo/frame1-area25.svg';
// import mask27 from '../assets/img/demo/frame1-area26.svg';

import Calendar from '../shared/UI/Icons/Calendar';
import Tool from '../shared/UI/Icons/Tool';
import Search from '../shared/UI/Icons/Search';

import frame2 from '../assets/img/demo/frame2.jpg';
import frame3 from '../assets/img/demo/frame3.jpg';

const demoData = [
    {
        key: 0,
        file: mask1,
        text: "General information on the herd allows you to see a report on financial indicators for any period in order to track the current financial situation.",
        popupPosition: ['32%', '50%']
    },
    {
        key: 1,
        file: mask2,
        text: "Set up a date filter to select the desired reporting period.",
        popupPosition: ['28%', '85%']
    },
    {
        key: 2,
        file: mask3,
        text: "Here you can see the number of cows in your herd.",
        popupPosition: ['30%', '15%']
    },
    {
        key: 3,
        file: mask4,
        text: "Total amount of profit for the selected period.",
        popupPosition: ['30%', '31%']
    },
    {
        key: 4,
        file: mask5,
        text: "Income from all cows for the selected period.",
        popupPosition: ['30%', '50%']
    },
    {
        key: 5,
        file: mask6,
        text: "Expenses on herd for the selected period.",
        popupPosition: ['30%', '68%']
    },
    {
        key: 6,
        file: mask7,
        text: "Let's check which days were less profitable.",
        popupPosition: ['50%', '50%'],
        isIcon: true,
        icon: <Calendar />,
        btnText: "Ok, let`s check",
        isCentered: true
    },
    {
        key: 7,
        file: mask8,
        text: "Chart shows the ratio of income, expenses and profits for specific days, this allows you to track which days the productivity was maximum and which days were minimum, for further adjustment of farm management.",
        popupPosition: ['5%', '49%'],
        isLong: true
    },
    {
        key: 8,
        file: mask9,
        text: "The last day was less productive, let's check how much profit individual cows bring.",
        popupPosition: ['45%', '70%'],
        btnText: "Ok, let`s check",
        isArrowRight: true
    },
    {
        key: 9,
        file: mask10,
        text: "Use these buttons to check more detailed information about your farm. It will lead you to other dashboard with more charts.",
        popupPosition: ['46%', '50%'],
        isArrowBottom: true
    },
    {
        key: 10,
        file: mask11,
        text: "We need to see information about profit per cow.",
        popupPosition: ['53%', '39%'],
        btnText: "Click here ↓",
        isArrowBottom: true,
        nextImage: frame2,
        nextStep: 10
    },
    {
        key: 11,
        file: mask7,
        text: "It could be helpful! Let's check what this dashboard can show us. Point to work areas and get to know all the tools.",
        popupPosition: ['50%', '50%'],
        isIcon: true,
        icon: <Tool />,
        btnText: "Next",
        isCentered: true
    },
    {
        key: 12,
        file: mask12,
        text: "The graph shows the profit per cow for the selected period.",
        popupPosition: ['36%', '89%'],
        isArrowLeft: true,
    },
    {
        key: 13,
        file: mask13,
        text: "Date filter.",
        popupPosition: ['22%', '19%'],
    },
    {
        key: 14,
        file: mask13,
        text: "You already know how to use it.",
        popupPosition: ['22%', '19%'],
    },
    {
        key: 15,
        file: mask14,
        text: "Here you can choose breed of cow you interested for.",
        popupPosition: ['22%', '83%'],
    },
    {
        key: 16,
        file: mask15,
        text: "Cow filter. You can choose any amount of cows to compare them by milking profile.",
        popupPosition: ['37%', '64%'],
        isArrowRight: true
    },
    {
        key: 17,
        file: mask16,
        text: "Report on the main indicators, taking into account the selected period and selected cows.",
        popupPosition: ['41%', '41%'],
        isArrowBottom: true,
    },
    {
        key: 18,
        file: mask7,
        text: "Let's look at the situation with Holstein cows.",
        popupPosition: ['50%', '50%'],
        isIcon: true,
        icon: <Search />,
        btnText: "Lets look",
        isCentered: true
    },
    {
        key: 19,
        file: mask17,
        text: "",
        btnText: "Choose it",
        popupPosition: ['15.1%', '74.7%'],
        smallPopup: true,
        nextStep: 19,
        nextImage: frame3,
    },
    {
        key: 20,
        file: mask18,
        text: "Now we see information only on Holstein cows. Let's compare the most productive cow №45234 and the least productive cow №51571.",
        popupPosition: ['20.1%', '54.7%'],
        isArrowLeft: true,
    },
];

export default demoData;