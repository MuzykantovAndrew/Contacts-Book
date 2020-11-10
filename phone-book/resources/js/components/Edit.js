import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Edit extends Component {

    constructor(props){
        super(props);
        this.state = {
            user_id: 3,
            name: '',
            address: '',
            phone: '',
            email: '',
            date: '',
            status: ''
        };
        this.handleUpdateContact = this.handleUpdateContact.bind(this);
        this.input = React.createRef();
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get('/api/contacts/' + id + '/edit')
                .then(response=> {
                    this.setState({
                        user_id: response.data.user_id,
                        name: response.data.name,
                        address: response.data.address,
                        phone: response.data.phone,
                        email: response.data.email,
                        date: response.data.date,
                        status: response.data.status
                    })
                    console.log(this.state.user_id);
                }).catch(err => {
                    console.log(err);
                });

    }

    handleUpdateContact(event){
        event.preventDefault();
        console.log(event.target);
        const id = this.props.match.params.id;
        const { user_id, name, address, phone, email, date, status } = event.target;
        const data = {
            user_id: user_id.value,
            name: name.value,
            address: address.value,
            phone: phone.value,
            email: email.value,
            date: date.value,
            status: status.value 
        };
        console.log(data);
        const { history } = this.props;

        axios.put('/api/contacts/' + id +'/update', data)
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
                            <div className="card-header">Редактирование данных контакта</div>
                            <div className="card-body">
                            <form onSubmit={this.handleUpdateContact}>
                                    <div className="form-group">
                                        <label htmlFor="user_id">User_id</label>
                                        <input type="text" 
                                            id="user_id" 
                                            name="user_id" 
                                            className="form-control"
                                            value={this.state.user_id}
                                            ref={this.input}
                                        />

                                        <label htmlFor="name">Имя</label>
                                        <input type="text" 
                                            id="name" 
                                            name="name" 
                                            className="form-control"
                                            defaultValue={this.state.name}
                                            ref={this.input}
                                        />

                                        <label htmlFor="address">Адресс</label>
                                        <input type="text" 
                                            id="address" 
                                            name="address" 
                                            className="form-control"
                                            defaultValue={this.state.address}
                                            ref={this.input}
                                        />

                                        <label htmlFor="phone">Телефон</label>
                                        <input type="text" 
                                            id="phone" 
                                            name="phone" 
                                            className="form-control"
                                            defaultValue={this.state.phone}
                                            ref={this.input}
                                        />

                                        <label htmlFor="email">EMail</label>
                                        <input type="email" 
                                            id="email" 
                                            name="email" 
                                            className="form-control"
                                            defaultValue={this.state.email}
                                            ref={this.input}
                                        />

                                        <label htmlFor="date">Дата</label>
                                        <input type="date" 
                                            id="date" 
                                            name="date" 
                                            className="form-control"
                                            defaultValue={this.state.date}
                                            ref={this.input}
                                        />

                                        <label htmlFor="status">Статус</label>
                                        <input type="text" 
                                            id="status" 
                                            name="status" 
                                            className="form-control"
                                            defaultValue={this.state.status}
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

export default Edit