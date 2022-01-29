import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './images/logo.jpg';
import profile2 from './images/uta.jpg';
import profile3 from './images/mikasa.jpg';
import SingleComment from './single-comment';
import UserCard from './user-card';

const MyApp = () => {
    return (
        <div className='ui comments'>
            <UserCard>
                <div> Hello my name is Sarah, and I'm living in Istambul.</div>
            </UserCard>
            <UserCard>
                <SingleComment
                    name='Sara'
                    date='5:00PM'
                    text='it is amazing!'
                    picture={profile1}
                />
            </UserCard>
            <UserCard>
                <SingleComment
                    name='Tom'
                    date='6:00PM'
                    text='Great job!'
                    picture={profile2}
                />
            </UserCard>
            <UserCard>
                <SingleComment
                    name='Alex'
                    date='7:00PM'
                    text='Thank you!'
                    picture={profile3}
                />
            </UserCard>
        </div >
    )
}
ReactDOM.render(
    <MyApp />,
    document.querySelector('#root')
)

