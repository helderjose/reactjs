import React from 'react'
import { Link } from 'react-router'

export default props => (
    <nav>
        <ul>
            <li>
                <Link to='todos'>Tarefas</Link></li>
            <li><Link to='about'>Sobre</Link></li>
        </ul>
    </nav>
)