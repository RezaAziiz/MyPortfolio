import React from 'react'
import Hero from '../../src/components/Hero'
import '../../src/index.css'
import { MemoryRouter } from 'react-router-dom'

describe('Hero component', () => {
  it('should render all hero texts correctly', () => {
    cy.mount(<Hero />)

    cy.contains('Hi, my name is')         // cek <p>
    cy.contains('Reza Maulana Aziiz.')    // cek <h1>
    cy.contains("I'm a Software Engineer") // cek <h2>
  })
})