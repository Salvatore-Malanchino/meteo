import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
class Search extends Component {
  state = {
    city: 'Napoli',
    country: 'Venice',
    details: '',
  };
  weather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&appid=416949bb5b1eddbd4fe2ad231dd3a2fe`
    )
      .then((response) => {
        if (response.ok) {
          // ora procedo all'estrazione del json dalla response
          return response.json();
        } else {
          throw new Error('Errore nella ricezione dati dal server');
        }
      })
      .then((meteo) => {
        console.log(meteo);
        this.setState({
          details: meteo,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.weather();
  }

  render() {
    return (
      <>
        <Form>
          <Row className="mb-3 justify-content-center ">
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Control
                type="text"
                placeholder="Country"
                value={this.state.country}
                onChange={(e) => {
                  this.setState({ country: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Control
                type="text"
                placeholder="State"
                value={this.state.city}
                onChange={(e) => {
                  this.setState({ city: e.target.value });
                }}
              />
            </Form.Group>

            <Button as={Col} md="1" variant="primary">
              Search
            </Button>
          </Row>
        </Form>
        <Table striped bordered hover>
          {this.state.details.map((prop) => {
            return (
              <>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>{}</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </Table>
      </>
    );
  }
}
export default Search;
