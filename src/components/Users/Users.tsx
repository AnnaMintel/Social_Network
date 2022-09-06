import React from "react";
import s from "./users.module.css";

export const Users = (props: any) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photoUrl: 'https://klike.net/uploads/posts/2020-04/1587719791_1.jpg',
                followed: false, fullName: 'Hanna', status: 'I am a teacher',
                location: { city: 'Minsk', country: 'Belarus' }
            },
            {
                id: 2, photoUrl: 'https://klike.net/uploads/posts/2020-04/1587719791_1.jpg',
                followed: true, fullName: 'Max', status: 'I am a student',
                location: { city: 'Warshawa', country: 'Poland' }
            },
            {
                id: 3, photoUrl: 'https://klike.net/uploads/posts/2020-04/1587719791_1.jpg',
                followed: false, fullName: 'Alex', status: 'I am a student',
                location: { city: 'Limossol', country: 'Cyprys' }
            }
        ]
        )
    }
    
    return <div>
        {
            props.users.map((u: any) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>
            )
        }
    </div>
}