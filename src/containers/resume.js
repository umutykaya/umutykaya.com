import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './resume/education.js';
import Experience from './resume/experience.js';
import Skills from './resume/skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={6}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://umutyalcinkaya.s3.eu-west-1.amazonaws.com/images/curios.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4W6RACP2TQUS6ZYK%2F20201130%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20201130T085706Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=5849051f1245ad28092058942aed3b39532233fb09f4b5142ce78a7453b85cd2"
                alt="avatar"
                style={{ height: '200px' }}
              />
            </div>

            <h2 style={{ paddingTop: '0.5em' }}>Umut Yalçınkaya</h2>
            <h4 style={{ color: 'grey' }}>Data Engineer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>Principled software engineering, conversational assistance bots, big data cloud operations, software architecture, Postgresql database management, machine learning, end-to-end application delivery for multi environments, advanced analytics, IOT signal processing, data management, supervised learning, kaizen, strategic thinking, business logic.</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h2>Skills</h2>
           
              <Skills
                skill="Cloud"
                progress={90}
              />
              <Skills
                skill="Python"
                progress={80}
              />
              <Skills
                skill="Java"
                progress={70}
              />
              <Skills
                skill="PySpark"
                progress={60}
              />
              <Skills
                skill="Javascript"
                progress={50}
              />
       
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Phone</h5>
            <p><a href="callto://+905340345553">+90 534 034 55 53</a></p>
            <h5>Email</h5>
            <p><a href="mailto:yalcinkayaumut@outlook.com">yalcinkayaumut@outlook.com</a></p>
            <h5>Web</h5>
            <p><a href="url">www.umutyalcinkaya.work</a></p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={6}>
            <h2>Education</h2>


            <Education
              startYear={2013}
              endYear={2018}
              schoolName="Bahcesehir University"
              departmentName="Software Engineering"
              schoolDescription="Established Bahcesehir University Ski-Snowboard (BAUKIŞ), officiated Co-Founder and Chairman.
              In the season of 2014-2015 Turkish national university league of ski-snowboard competition champion as 1st place in country wide category of grand slalom.
              In the season of 2014-2015, as well as team BAUKIŞ charged gold medal in snowboard.
              “Yazılım-Bİlişim Kulübü” board member and organization crew member."
            />

            <h2>Experience</h2>

            <Experience
              startYear={2020}
              endYear="Currently"
              jobName="Itelligence AG"
              position="Data Science Consultant - B/S/H/"
              jobDescription="Working as a data science consultant."
            />

            <Experience
              startYear={2018}
              endYear={2020}
              jobName="Itelligence AG"
              position="Business Intelligence Consultant - B/S/H/"
              jobDescription="Amazon Web Services Architecture and SageMaker Data Science solutions. Hybrid model architecture.
              Apache Spark distributed systems big data software development.
              EMR Zeppelin and R-Studio experience on Text Mining. AWS translate service integration.
              Chatbot implementation and integration to SAP Netweaver portal. Goal is managing incidents with AI chatbot. AWS Lex, Lambda.
              Documentation, Keynotes on AWS Services. In order to leverage rapid, smart development of the insight analytics.
              Tableua integration as analytical visualization dashboards. AWS Athena + Tableua.
              Video Conferences with global colleagues from Berlin,Munich, Barcelona, Paris and India."
            />

            <Experience
              startYear="2017"
              endYear="2018 4 Month"
              jobName="Biletino"
              position="Software Developer - Part Time"
              jobDescription="Worked on an integration of Turkcell BİP messaging platform for Biletino. ASP.NET queries and system maintenance. Fixes on old API.
                Experimental and case studies have been done with Google’s “Polymer UI library”, asynchronous web development. Progressive web application, PRPL pattern assumptions are investigated and implemented a few assets for future
                works."
            />
            <Experience
              startYear={2017}
              endYear="2 Month"
              jobName="Turkcell"
              position="Software Engineering Intern"
              jobDescription="Developed test automation via JMeter API, cooperation with a senior colleague.
                Built-in tests were made, scalable, highly available, and modular software products.
                Worked on Java Spring framework and SOAP procedures.
                Enhanced wider aspect about Agile Project Management, I took an active role by participating in the rallies.
                Snippets and patterns were created by writing scripts in the Sublime Text environment.
                Involved in platform transfer of SOA (Service Documentation Spec) service documents.
                In the project called 'Turkcell Smart Cloud' and gave feedback to the employees of the system related to integration of the department's cloud environment."
            />
            <Experience
              startYear={2016}
              endYear="2 Month"
              jobName="Vestel"
              position="IP-Multimedia Intern"
              jobDescription="Designed and developed transactional and analytical data structures.
                Built, tested and deployed scalable, highly available and modular software products.
                Modified existing software to correct errors, adapt to new hardware and improve performance.
                Designed new B2B user manual module which is improve the possible problem solutions between premium customers and technical stuff.Wrote on Visual Studio using C#.
                Designed vast array of snippets via Sublime Text Editor using Scripts for current framework, application components.
                Excel Calculations, Analysis, Reports had been prepared to present supervisors.
                Prototyped and Tested companies new property that is an audio recognition and remote control rendering system such as employee has better enhance of repairing smart products.
                Remotely accessed enterprise customers system, debug and fix related issues on their systems announced as 'Bayi Tv' Project.
                Optimized 'V-Ticket' system by testing and implementing contexts of related branch."
            />



          </Cell>
        </Grid>

      </div>
    )
  }
}

export default Resume;
