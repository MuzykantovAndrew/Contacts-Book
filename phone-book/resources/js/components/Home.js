import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            contacts: [],
            categories: []
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleFilterByCategory = this.handleFilterByCategory.bind(this);
    }

    getData() {
        axios.get('/api/contacts').then(response => {
            console.log(response.data);
            this.setState({
                contacts: response.data
            })
        }).catch(err => console.log(err));
        axios.get('/api/categories').then(response => {
            console.log(response.data);
            this.setState({
                categories: response.data
            })
        }).catch(err => console.log(err));
    }

    componentDidMount() {
        this.getData();
    }

    handleDelete(event) {
        event.preventDefault();
        const id = event.target.id.value;
        console.log(id);
        axios.delete('/api/contacts/' + id + '/delete');
        this.getData();
    }

    handleFilterByCategory(event){
        event.preventDefault();
        const id = event.target.select.value;
        axios.get('/api/contacts/' + id + '/filter')
            .then(response => {
                this.setState({
                    contacts: response.data
                })
            }).catch(err => console.log(err));
    }


    render() {
        return (
            <div className="container my-3">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="row"> 
                                    <div className="col-md-4"> Список контактов </div>
                                    <div className="col-md-8">
                                     Список категорий 
                                     <form onSubmit={this.handleFilterByCategory}>
                                        <select name="select">
                                            <option value="0">Все категории</option>
                                            {
                                                this.state.categories.map((category, index) => (
                                                    <option value={category.id}>{category.name}</option>
                                                ))
                                            }
                                        </select>
                                        <button type="submit" 
                                                className="btn btn-primary">
                                            Выбрать
                                        </button> 
                                     </form>
                                     </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <table className="table table-hovered table-striped">
                                    <thead>
                                        <tr>
                                            <th>№</th>
                                            <th>Имя</th>
                                            <th>Адресс</th>
                                            <th>Телефон</th>
                                            <th>EMail</th>
                                            <th>Дата</th>
                                            <th>Именить</th>
                                            <th>Удалить</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.contacts.length !==0
                                            ?
                                                this.state.contacts.map((contact, index) => (
                                                    <tr>
                                                        <td>{ index + 1 }</td>
                                                        <td>{ contact.name }</td>
                                                        <td>{ contact.address }</td>
                                                        <td>{ contact.phone }</td>
                                                        <td>{ contact.email }</td>
                                                        <td>{ contact.date }</td>
                                                        <td>
                                                            <Link className="btn btn-info"
                                                                    to={`/edit/${contact.id}`}
                                                                    key={ contact.id }>
                                                                Edit
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            <form onSubmit={this.handleDelete}>
                                                                <input  type="hidden" 
                                                                        name="id" 
                                                                        value={contact.id}
                                                                />
                                                                <button type="submit" 
                                                                        className="btn btn-danger">
                                                                    Delete
                                                                </button> 
                                                            </form>
                                                        </td>
                                                    </tr>
                                                ))
                                            :
                                                <tr>
                                                    <td colSpan = "9"> Список контактов пусть </td>
                                                </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}


export default Home;
