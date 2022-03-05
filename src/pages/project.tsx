import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import ProjectMain from '../components/Project/ProjectMain';

const ProjectPage = () =>{
        return (
            <React.Fragment>
            <Header />
            <ProjectMain />
            <Footer />
            </React.Fragment>
        );
    }



export default ProjectPage;

