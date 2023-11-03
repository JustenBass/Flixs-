import React, { useContext, useState } from 'react'
import { UserContext } from '../context/user'
import { MovieContext } from '../context/movie'
import { ReviewContext } from '../context/review'

export default function UserProfile() {
    const { isAuthenticated, user, updateUsername, lastestAvatar, setLastestAvatar } = useContext( UserContext )
    const { movies } = useContext( MovieContext )
    const { reviews } = useContext( ReviewContext )
    const [ usernameData, setUsernameData ] = useState( { username: '' } )

    const handleUsernameSubmit = (e) => {
        e.preventDefault();
        const update = { ...usernameData }
        updateUsername( update, movies, reviews )
        setUsernameData( { username: '' } )
    }

    const handleUsernameChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setUsernameData({
            ...usernameData,
            [name]: value
        });
    };


    // const handleAvatarSubmit = (e) => {
    //     e.preventDefault()
    //     const data = new FormData();

    //     data.append("user[avatar]", e.target.image.files[0]);
    //     handleAPISubmit(data);

    // }

    // const handleAPISubmit = (data) => {
    //     fetch(`/users/${user.id}`, {
    //         method: 'PATCH',
    //         body: JSON.stringify(data)
    //     })
    //     .then((r) => r.json())
    //     .then((data) => {
    //         setLastestAvatar(data.avatar_url)
    //     })
    //     .catch((error) => console.error(error))
    // }


    if( isAuthenticated ){
        return (
            <div className='userProfileParentDiv'>
                <div className='userProfileGridContainer'>
                    <div className='userProfileChildDiv'>
                        <br/>
                        <h1> UPDATE USERNAME </h1>
                        <br/>
                        <form onSubmit={ handleUsernameSubmit }>
                            <div>
                                <input
                                className='userProfileSettingInputs'
                                name='username'
                                type='text'
                                value={ usernameData.username }
                                onChange={ handleUsernameChange }
                                />
                            </div>

                            <button type='submit'> UPDATE </button>
                        </form>
                        <br/>
                        <br/>
                        <h1> HELLO { user.username.toUpperCase()} </h1>
                    </div>

                    <div className='userProfileChildDiv'>
                        <br/>
                        <h1> UPDATE USER AVATAR </h1>
                    </div>

                    {/* <div className='userProfileChildDiv'>
                        <br/>
                        <h1> UPDATE USER PASSWORD </h1>
                        <br/>
                        <form>
                            <input
                            className='userProfileSettingInputs'
                            name='password'
                            type='password'
                            value=''
                            onChange=''
                            />

                            <div>
                                <br/>
                                <br/>
                                <input
                                className='userProfileSettingInputs'
                                name='password_confirmation'
                                type='password'
                                value=''
                                onChange=''
                                />
                            </div>
                            <button type='UPDATE'> UPDATE </button>
                        </form>
                    </div> */}

                    <div className='userProfileChildDiv'>
                        <br/>
                        <h1> UPDATE AVATAR </h1>
                        <br/>
                        <form>
                            <input
                            type='file'
                            name='image'
                            id='image'
                            />
                            <br/>
                            <br/>
                            <button type='submit' > UPDATE AVATAR </button>
                        </form>
                    </div>
                </div>

            </div>
          )
    }
}