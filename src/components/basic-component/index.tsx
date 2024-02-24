import { useState } from 'react';

const dataUser = [
    'john',
    'alex',
    'george',
    'simon',
    'james',
]

const BasicComponent = () =>{

    const [users, setUsers] = useState(dataUser);

    const handleSearch = (text: string) => {
        
        const filteredUsers = dataUser.filter((user) => user.includes(text));

        setUsers(filteredUsers);
    }

    return <>
    <div>
        <button>Shuffle</button>

    </div>
    </>
}

export default BasicComponent;