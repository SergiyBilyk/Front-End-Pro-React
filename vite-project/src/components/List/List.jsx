import { useState, useEffect } from "react";
import { Button } from "../Buttons/Button";
import "./List.css";

const List = () => {
    const [users, setUsers] = useState([]);
    const [showList, setShowList] = useState(false);
    const [linkValue, setLinkValue] = useState('users');
    const [listValue, setListValue] = useState('');

    useEffect(() => {
    const getUsers = async () => {
        const response = await fetch(
        `https://jsonplaceholder.typicode.com/${linkValue}`
        );
        const data = await response.json();
        setUsers(data);
    };

    getUsers();
    }, [linkValue]);

    const сlickUser = () => {
        setShowList(!showList);
        setLinkValue('users');
        setListValue('user.name');
    };
    const сlickPosts = () => {
        setShowList(!showList);
        setLinkValue('posts');
        setListValue('user.title');
    };

    return (
    <>
        <Button onClick={сlickUser}>Список користувачів</Button>
        <Button onClick={сlickPosts}>Список заголовків</Button>
        {showList && (
        <>
            {users.map((user) => (
                <p key={user.id}>{eval(listValue)}</p>
            ))}
        </>
        )}
    </>
    );
};

export default List;
