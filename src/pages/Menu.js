import React, { useEffect, useState } from 'react'
//import notes from '../assets/data'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { Link } from 'react-router-dom'


const Menu = ({ match, history }) => {
    let menuId = match.params.id

    let [menu, setMenu] = useState(null)

    //let note = notes.find(note => note.id == noteId)

    useEffect(() => {

        getMenu()
    }, [menuID])

    let getMenu = async () => {
        if (noteId == 'new') return
        let response = await fetch(`http://127.0.0.1:5000/notes/${noteId}`)
        let data = await response.json()
        setMenu(data)
    }


    let handleSubmit = () => {
        if (menuId != "new" && !note.body) {
            deleteNote()
        } else if (noteId != "new") {
            updateNote()
        } else if (noteId === 'new' && note !== null) {
            createNote()
        }

        history.push('/')
    }


    return (
        <div className="menu">
            <div className="menu-header">
            </div>
        </div >
    )
}

export default Menu