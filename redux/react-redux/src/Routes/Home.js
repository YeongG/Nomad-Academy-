import React, { useState } from 'react';

const Home = () => {
    const [text,setText] = useState(null);  

    const onChange = e => {
        setText(e.target.value);
    }
    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>ADD</button>
            </form>
        </>
    );
}

export default Home;