import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Create extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            address: '',
            phone: '',
            email: '',
            status: '',
            category_id: 0,
            categories: []
        };
        this.handleCreateNewContact = this.handleCreateNewContact.bind(this);
        this.input = React.createRef();
    }

    componentDidMount() {
        axios.get('/api/categories').then(response => {
            console.log(response.data);
            this.setState({
                categories: response.data
            })
        }).catch(err => console.log(err));
    }

    handleCreateNewContact(event){
        event.preventDefault();
        console.log(event.target);
        const { name, address, phone, email, status, category_id } = event.target;
        const data = {
            name: name.value,
            address: address.value,
            phone: phone.value,
            email: email.value,
            status: status.value,
            category_id: category_id.value 
        };
        console.log(data);
        const { history } = this.props;

        axios.post('/api/contacts/create', data)
                .then(response => {
                    history.push('/home')
                }).catch(err => {
                    console.log(err);
                });
    }

    render() {
        return (
            <div className="container my-3">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">Добавление нового контакта</div>
                            <div className="card-body">
                                <form onSubmit={this.handleCreateNewContact}>
                                    <div className="form-group">

                                        <label htmlFor="name">Имя</label>
                                        <input type="text" 
                                            id="name" 
                                            name="name" 
                                            className="form-control"
                                            ref={this.input}
                                        />

                                        <label htmlFor="address">Адресс</label>
                                        <input type="text" 
                                            id="address" 
                                            name="address" 
                                            className="form-control"
                                            ref={this.input}
                                        />

                                        <label htmlFor="phone">Телефон</label>
                                        <input type="text" 
                                            id="phone" 
                                            name="phone" 
                                            className="form-control"
                                            ref={this.input}
                                        />

                                        <label htmlFor="email">EMail</label>
                                        <input type="email" 
                                            id="email" 
                                            name="email" 
                                            className="form-control"
                                            ref={this.input}
                                        />
                                        
                                        <select name="category_id">
                                            {
                                                this.state.categories.map((category, index) => (
                                                    <option value={category.id}>{category.name}</option>
                                                ))
                                            }
                                        </select>

                                        <label htmlFor="status">Статус</label>
                                        <input type="text" 
                                            id="status" 
                                            name="status" 
                                            className="form-control"
                                            ref={this.input}
                                        />

                                        <button type="submit" className="btn btn-primary"> Добавить</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}

export default Create;