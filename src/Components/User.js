import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom"

export function User({ user, users, setUsers }) {

    const navigate = useNavigate();
    const params = useParams();

    const handleDelete = () => {
        // DELETE request
        async function deleteUser() {
            const newUser = await fetch(`https://61d17cd5da87830017e5926e.mockapi.io/users/${user.id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            return newUser.json();
        }
        deleteUser();
    }

    return (

        <div className="user">

            <Card style={{ width: '300px' }}>
                <Card.Img variant="top" src={user.avatar} className="card_img" alt="" />
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>
                        {user.about}
                    </Card.Text>
                    <Card.Text>
                        email : {user.email}
                    </Card.Text>
                    <Card.Text>
                        contact no : {user.contact}
                    </Card.Text>

                    <Button className="createUser btn m-1" size="sm" variant="outline-info" onClick={() => navigate(`/edit-user/${user.id}`)}>Edit</Button>
                    <Button className="createUser btn m-1" size="sm" variant="outline-danger" onClick={handleDelete}>Delete</Button>
                </Card.Body>
            </Card>

        </div>
    );
}
