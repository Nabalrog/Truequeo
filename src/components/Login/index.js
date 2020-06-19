import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import axios from 'axios';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

const Login = () => {
    const { setTokenInLocalStorage, isAuth } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (isAuth) return <Redirect to="/" />

    const handleSubmit = async (e) => {
        e.preventDefault();
        const jsonSend = { email, password };
        try {
            const axiosRes = await axios.post('https://rocky-savannah-19817.herokuapp.com/api/v1/login', jsonSend);
            const { token } = axiosRes.data;
            console.log(token)
            setTokenInLocalStorage(token);
            alert('Successful login');
        } catch (error) {
            alert('Error on login');
        }
    };

    return (
        <React.Fragment>
            <h1 className="mb-4">Login TRUEQUEO</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Email</Label>
                    <Input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="exampleEmail"
                        placeholder="type your email" />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="examplePassword"
                        placeholder="type your password here" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </React.Fragment>
    );
}

export default Login;
