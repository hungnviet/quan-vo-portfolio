import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import './Accordian.css';
import { useState } from 'react';
import { blue } from '@radix-ui/colors';
import Navbar from './Navbar';
const AccordionDemo = () => {
    const [openOrder, setOpenOrder] = useState([])

    function appendNewOpen(opened, openOrder) {

        // if more than 2 open, remove last used one
        if (openOrder.length === 1) {
            setOpenOrder(openOrder.slice(1).concat(opened))
            // setOpens()
            return
        }

        setOpenOrder(openOrder.concat(opened))
    }

    function onOpenChange(values: string[]) {
        // if 1 item is closed
        if (values.length < openOrder.length) {
            const closed = openOrder.find(o => !values.includes(o))
            setOpenOrder(openOrder.filter(o => o !== closed))
            return
        }

        // if item is opened
        const opened = values.find(v => !openOrder.includes(v))

        appendNewOpen(opened, [...openOrder])

        // openOrder

        // setOpens(values.slice(0, 2))
    }

    return (
        <div className='accordian'>
            <Navbar />
            <img src="https://scontent.fsgn20-1.fna.fbcdn.net/v/t39.30808-6/316418310_2345933068899530_5109468943860494768_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ruIpmsEOVf4AX_vogem&_nc_ht=scontent.fsgn20-1.fna&oh=00_AfAZQczGe77St7qaAg4yZrBRwopyJ_y31fHnF0yrHpWz3Q&oe=649AA78F"></img>
            <h2>SOME JOBS I USED TO DO</h2>
            <Accordion.Root value={openOrder} onValueChange={onOpenChange} className="AccordionRoot" type="multiple" defaultValue="item-1" >
                <Accordion.Item className="AccordionItem" value="item-1">
                    <AccordionTrigger>Full Stack Software Engineer &copy;NInja Van</AccordionTrigger>
                    <AccordionContent >
                        <h4 id="time">Sep 2020-Present</h4>
                        <ul style={{ color: blue }}>
                            <li ><p>Used Gin-gonic and React JS to create an optimized tool for user to apply the cross-border business process</p></li>
                            <li><p>Designed, architected and developed a module to help the users to speed up their current process by 90%</p></li>
                            <li><p>One of the pioneers that applied Next Js the micro services of the company</p></li>
                        </ul>
                    </AccordionContent>
                </Accordion.Item>

                <Accordion.Item className="AccordionItem" value="item-2">
                    <AccordionTrigger>Full Stack Software Engineer &copy;Frelance</AccordionTrigger>
                    <AccordionContent>
                        <h4 id="time">March 2021 - Present</h4>
                        <ul>
                            <li><p>Hosted Backend (Golang) on google cloud run and Frontend (NextJs) on Vercel on my own</p></li>
                            <li><p>Analyzed the requirements and provided the best possible solution to satisfied the need of the stakeholders</p></li>
                        </ul>
                    </AccordionContent>
                </Accordion.Item>

                <Accordion.Item className="AccordionItem" value="item-3">
                    <AccordionTrigger>Full Stack Developer &copy;Coding Hub</AccordionTrigger>
                    <Accordion.Content className="AccordionContent">
                        <h4 id="time">January 2019 - May 2020</h4>
                        <ul>
                            <li><p>Developed and deployed a mobile app to the app store and play store called Shuttler that tracks the shuttle in real-time</p></li>
                            <li><p>Led a squad of 3 to 7 engineers to develop apps that help the students of the school to have a better life</p></li>
                            <li><p>Integrated with 3rd Party APIs to support the flow of the apps (Google APIs, Uber APIs, …)</p></li>
                            <li><p>Used fluently tech stacks that for both Frontend and Backend: NodeJS/Express, ReactJS, MongoDB</p></li>
                        </ul>
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item className="AccordionItem" value="item-4">
                    <AccordionTrigger>Software Engineering Intern &copy;DigiTexx</AccordionTrigger>
                    <Accordion.Content className="AccordionContent">
                        <h4 id="time">May 2019 - September 2019</h4>
                        <ul>
                            <li><p>Apply Redux, React, NodeJs RestAPI to develop a platform to check salary for employees.
                            </p></li>
                            <li><p>Designed and developed a centralized application to help manage other software of the business using JavaScript</p></li>
                            <li><p>Applied Material UI with ReactJS and NodeJS to create user-friendly tools for the employees of the company
                            </p></li>
                            <li><p>Colaborated with a team of 2 engineers to develop and deploy a training web application for new employees
                            </p></li>
                        </ul>
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item className="AccordionItem" value="item-5">
                    <AccordionTrigger>ROBOTICS AUTOMATIONS DEVELOPER &copy;Physics Department SUNY Plattsburgh</AccordionTrigger>
                    <Accordion.Content className="AccordionContent">
                        <h4 id="time">Spring 2018 – May 2020</h4>
                        <ul>
                            <li><p>Led a team of 4 people to develop an autonomous robot and a maze escape robot for the National Robotics competition</p></li>
                            <li><p>Used Python to develop machine learning model to improve problem-solving process of the maze robot by 20%</p></li>
                        </ul>
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item className="AccordionItem" value="item-6">
                    <AccordionTrigger>Teaching Assistant &copy;CS Department SUNY Plattsburgh</AccordionTrigger>
                    <Accordion.Content className="AccordionContent">
                        <h4 id="time">Fall 2018 – May 2020</h4>
                        <ul>
                            <li><p>Assisted 50+ students in their understanding the core programming concepts using Python.</p></li>
                            <li><p>Hold office hours twice a week to help computer science students one on one in Python, C/C++, Java.</p></li>
                        </ul>
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item className="AccordionItem" value="item-7">
                    <AccordionTrigger>Programming C/C++ &copy;High School For The Gifted</AccordionTrigger>
                    <Accordion.Content className="AccordionContent">
                        <h4 id="time">Fall 2014 - Spring 2017</h4>
                        <ul>
                            <li><p>Developed programming skills in C and C++ and apply them to solve 100+ logical problems.</p></li>
                            <li><p>Participated in competitive programming contests and placed top 3 in 7 out of 10</p></li>
                            <li><p>Developed a strong intuition and deep understanding of advanced algorithms such as Dijsktra, Lowest Common Ancestor</p></li>
                        </ul>
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion.Root>
        </div>
    )
};

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
        <Accordion.Trigger
            className={classNames('AccordionTrigger', className)}
            {...props}
            ref={forwardedRef}
        >
            {children}
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>
    </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
        className={classNames('AccordionContent', className)}
        {...props}
        ref={forwardedRef}
    >
        <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
));

export default AccordionDemo;
