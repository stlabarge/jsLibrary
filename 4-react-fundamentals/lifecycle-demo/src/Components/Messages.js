import React from 'react';

class Message extends React.Component{
    componentWillMount = () => {
        console.log('[Message.js] Inside componentWillMount()')
    }
    render()  {

        return (
        <h1> Hi Calcifer! You so CUTE </h1>)
    }

}

export default Message;