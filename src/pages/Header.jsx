import React from 'react'
import Nav from '../components/Nav/Nav'
import Container from '../components/Container/Container'
import Caption from '../components/Caption/Caption'
import styles from './index.module.scss'

function Header() {
    return(
        <div className={styles.header}>
            <Container>
            <Nav/>
            <Caption/>
            </Container>
        </div>
    )
}
export default Header