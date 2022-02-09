import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";

//components
import Navbar from "./components/navbar";

import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  {
    id: 1,
    nombre: "Samuel",
    apellido: "Alvarez",
    email: "samuel@gmail.com",
    celular: "777777",
    departamento: "Valle",
    municipio: "Cali",
  },
  {
    id: 2,
    nombre: "Andres",
    apellido: "Restrepo",
    email: "andres@gmail.com",
    celular: "666666",
    departamento: "Antioquia",
    municipio: "Medellin",
  },
  {
    id: 3,
    nombre: "Sandra",
    apellido: "Garcia",
    email: "sandra@gmail.com",
    celular: "555555",
    departamento: "Risaralda",
    municipio: "Pereira",
  },
  {
    id: 4,
    nombre: "Andrea",
    apellido: "Rodriguez",
    email: "andrea@gmail.com",
    celular: "4444444",
    departamento: "Valle",
    municipio: "Palmira",
  },
  {
    id: 5,
    nombre: "Victor",
    apellido: "Aponza",
    email: "Victor@gmail.com",
    celular: "333333",
    departamento: "Valle",
    municipio: "Candelaria",
  },
];

class App extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      nombre: "",
      apellido: "",
      email: "",
      celular: "",
      departamento: "",
      municipio: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id === registro.id) {
        arreglo[contador].nombre = dato.nombre;
        arreglo[contador].apellido = dato.apellido;
        arreglo[contador].email = dato.email;
        arreglo[contador].celular = dato.celular;
        arreglo[contador].departamento = dato.departamento;
        arreglo[contador].departamento = dato.municipio;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm(
      "Estás Seguro que deseas Eliminar el elemento " + dato.id
    );
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id === registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar = () => {
    var valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <>
        <Navbar></Navbar>
        <Container>
          <br />
          <Button color="success" onClick={() => this.mostrarModalInsertar()}>
            Crear
          </Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Email</th>
                <th>Celular</th>
                <th>Dpto Residencia</th>
                <th>Municipio</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.apellido}</td>
                  <td>{dato.email}</td>
                  <td>{dato.celular}</td>
                  <td>{dato.departamento}</td>
                  <td>{dato.municipio}</td>
                  <td>
                    <button 
                    type="buton"
                    className="buto"
                    onClick={() => this.mostrarModalActualizar(dato)}>
                      <FontAwesomeIcon icon={faUserEdit} color="blue" />
                    </button>

                    <button 
                    type="buton"
                    className="buto"
                    onClick={() => this.eliminar(dato)}>
                      <FontAwesomeIcon icon={faTrash} color = "red" />
                    </button>
                 
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
            <div>
              <h3>Editar Registro</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id:</label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>

            <FormGroup>
              <label>Nombre:</label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.nombre}
              />
            </FormGroup>
            <FormGroup>
              <label>Apellidos:</label>
              <input
                className="form-control"
                name="apellido"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.apellido}
              />
            </FormGroup>
            <FormGroup>
              <label>Email:</label>
              <input
                className="form-control"
                name="email"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.email}
              />
            </FormGroup>

            <FormGroup>
              <label>Celular:</label>
              <input
                className="form-control"
                name="celular"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.celular}
              />
            </FormGroup>

            <FormGroup>
              <label>Dto Residencia:</label>
              <input
                className="form-control"
                name="departamento"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.departamento}
              />
            </FormGroup>

            <FormGroup>
              <label>Municipio:</label>
              <input
                className="form-control"
                name="municipio"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.municipio}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button color="danger" onClick={() => this.cerrarModalActualizar()}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar Contacto</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>

            <input
              className="form-control"
              readOnly
              type="text"
              value={this.state.data.length + 1}
            />
          </FormGroup>

          <FormGroup>
            <label>Nombre:</label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Apellidos:</label>
            <input
              className="form-control"
              name="apellido"
              type="text"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Email:</label>
            <input
              className="form-control"
              name="email"
              type="text"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Celular:</label>
            <input
              className="form-control"
              name="celular"
              type="text"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Dto Residencia:</label>
            <input
              className="form-control"
              name="departamento"
              type="text"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Municipio:</label>
            <input
              className="form-control"
              name="municipio"
              type="text"
              onChange={this.handleChange}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => this.insertar()}>
            Guardar
          </Button>
          <Button
            className="btn btn-danger"
            onClick={() => this.cerrarModalInsertar()}
          >
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
      </>
    );
  }
}
export default App;
