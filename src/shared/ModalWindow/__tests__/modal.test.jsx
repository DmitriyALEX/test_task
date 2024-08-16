import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ModalWindow from '../index'
import '@testing-library/jest-dom'

describe('ModalWindow', () => {
    const setOpenMW = jest.fn()

    const renderModal = (openModalWindow, setOpenModalWindow) => {
        return render(
            <ModalWindow openModalWindow={openModalWindow} setOpenModalWindow={setOpenModalWindow}>
                <div>Content</div>
            </ModalWindow>,
        )
    }

    test('renders modal window when state is true', () => {
        renderModal(true, setOpenMW)
        expect(screen.getByText('Content')).toBeInTheDocument()
    })

    test('calls setOpenModalWindow when close button is clicked', () => {
        renderModal(true, setOpenMW)
        const closeBTN = screen.getByRole('button')
        fireEvent.click(closeBTN)
        expect(setOpenMW).toHaveBeenCalledTimes(1)
    })

    test('scroll', () => {
        renderModal(true, setOpenMW)
        expect(document.body.style.overflow).toBe('hidden')
        document.body.style.overflow = ''
        renderModal(false, setOpenMW)
        expect(document.body.style.overflow).toBe('auto')
    })
})
