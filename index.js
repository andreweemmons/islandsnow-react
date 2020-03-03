import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Icon, Menu, Dropdown, Image, Segment, Grid, List, Input } from 'semantic-ui-react';


class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f" /></Menu.Item>
            <Menu.Item fitted><Icon name="twitter" /></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest" /></Menu.Item>
            <Menu.Item fitted><Icon name="instagram" /></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home" /></Menu.Item>
            <Menu.Item fitted><Icon name="search" /></Menu.Item>
            <Menu.Item fitted><Icon name="user" /></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}




const ImageExampleCentered = () => (
    <Segment>
      <Image src="http://courses.ics.hawaii.edu/ics314s20/morea/ui-frameworks/experience-islandsnow-logo.png"  centered />

    </Segment>
)

export default ImageExampleCentered





class MiddleMenu extends React.Component {
  render() {
    const style1 = {
      padding: "50px"
    }

    return (
        <Menu borderless className="middlemenu">
          <Grid container centered columns={10}>
            <Grid.Column style={{style1, marginRight: "-20px"}}>
              <Dropdown item text="MENS">
              </Dropdown>
            </Grid.Column>
            <Grid.Column style={{style1}}>
              <Dropdown item text="WOMENS">
              </Dropdown>
            </Grid.Column>
            <Grid.Column style={{style1, marginRight: "-30px"}}>
              <Dropdown item text="KIDS">
              </Dropdown>
            </Grid.Column>
            <Grid.Column style={{style1, marginRight: "-10px"}}>
              <Dropdown item text="BRANDS">
              </Dropdown>
            </Grid.Column>
            <Grid.Column style={{style1}}>
              <Menu.Item>SALE</Menu.Item>
            </Grid.Column>
          </Grid>
        </Menu>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image src="http://courses.ics.hawaii.edu/ics314s20/morea/ui-frameworks/experience-islandsnow-video-snapshot.png" fluid />
    )

  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Container className="footerBackground">
        <Grid style={{marginLeft: "100px"}}>
        <Grid.Row columns={3}>
          <Grid.Column>
            <List>
              <List.Item>About Us</List.Item>
              <List.Item>Store Location</List.Item>
              <List.Item>Employment</List.Item>
              <List.Item>Videos</List.Item>
              <List.Item>Shipping and Returns</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <List>
              <List.Item>About Us</List.Item>
              <List.Item>Store Location</List.Item>
              <List.Item>Employment</List.Item>
              <List.Item>Videos</List.Item>
              <List.Item>Shipping and Returns</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <p>Join our mailing list for updates<br />Sign up to receive our email updates!</p>
            <Input label='Sign Up' placeholder='Enter email address' labelPosition='right'/>
          </Grid.Column>
        </Grid.Row>
        </Grid>
        </Container>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <ImageExampleCentered/>

          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));