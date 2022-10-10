import React, { useEffect, useState } from 'react'
//import notes from '../assets/data'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { Link } from 'react-router-dom'


const HomePage = ({ match, history }) => {
    let homeId = match.params.id


    let handleSubmit = () => {
        if (noteId != "new" && !note.body) {
            deleteNote()
        } else if (noteId != "new") {
            updateNote()
        } else if (noteId === 'new' && note !== null) {
            createNote()
        }

        history.push('/')
    }


    return (
        <div className="home">
            <div className="home-header">
            </div>
        </div >
    )
}

export default HomePage