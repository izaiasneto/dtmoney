import { useState } from 'react'
import Modal from 'react-modal'
import logoImg from '../../assets/logo.svg'

import { Container, Content } from './style'

interface HeaderProps {
    onOpenNewTransactionModal : () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps){
    return (
        <header>
            <Container>
                <Content>
                    <img src={logoImg} alt="dt money" />
                    <button onClick={onOpenNewTransactionModal} type="button">
                        Nova Transação
                    </button>

                </Content>
            </Container>
        </header>
    )
}