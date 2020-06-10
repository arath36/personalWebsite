import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import FooterPage from './components/footer'
import {Link} from 'react-router-dom';



function App() {
  return (
<div className="demo-big-content">
    <Layout className>
        <Header className="header-color" title="Austin Rath" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/hobbies">Hobbies</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/hobbies">Hobbies</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
        <FooterPage/>
    </Layout>
</div>
  );



}

export default App;
