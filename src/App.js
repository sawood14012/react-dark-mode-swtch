
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles, Title } from './global';
import { useState } from 'react';
import Content from './content';
import Formcontent from './form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";



function App() {
  const data1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus pretium massa, sit amet volutpat turpis aliquam id. Aenean aliquet est tellus, vitae faucibus risus maximus suscipit. Vestibulum vitae hendrerit eros. Pellentesque pellentesque, metus sed fringilla aliquam, nisl elit pharetra mi, eu cursus erat lacus vestibulum diam. Suspendisse metus nisl, consequat at vulputate at, vulputate quis enim. Nunc fringilla efficitur turpis, sed tincidunt eros hendrerit mollis. Proin dictum justo sit amet orci consectetur, et iaculis leo aliquam. Quisque sit amet posuere tortor. Curabitur in ante elit. Fusce consequat hendrerit orci a ullamcorper. Donec posuere libero vel velit lobortis, non bibendum leo venenatis. Fusce molestie ultrices dictum. Morbi enim odio, interdum ut diam at, iaculis lacinia metus. Fusce semper sem felis, at finibus velit auctor eget.";
  const data2 = "Maecenas at iaculis ante. Vivamus volutpat purus eu lectus accumsan, sit amet interdum felis lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque dictum sem vel sapien vulputate, sit amet ullamcorper quam rhoncus. Nam ac diam sapien. Integer quis eros et metus vulputate euismod. Cras sem massa, ornare ut posuere et, consectetur sit amet libero. Etiam sem elit, sollicitudin non mi sed, tincidunt sodales sem. Nunc vitae eros ut felis mollis pretium quis a turpis.";
  const [theme, setTheme] = useState('light');
  const [icon, setIcon] = useState(faMoon);
  const [iconcolor, setIconColor] = useState('#141414')
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setIcon(faSun);
      setIconColor('#FFA500');
      console.log(icon)
    } else {
      setTheme('light');
      setIcon(faMoon);
      setIconColor('#141414');
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Container>
            <Row>
              <Col sm={10} className="title"><h3><Title>Dark Mode Challenge</Title></h3></Col>
              <Col sm={2}><FontAwesomeIcon size = '3x' onClick={toggleTheme}  style={{color: iconcolor}} icon={icon} /></Col>
            </Row>
            <br/>
            <Content data1={data1} data2={data2}/>
            <br/>
            <Formcontent/>
          </Container>
          
  
      </>
    </ThemeProvider>
  );
}

export default App;
