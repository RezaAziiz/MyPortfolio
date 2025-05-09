import React from 'react'
import Layout from '../../src/components/Layout'
import '../../src/index.css'
import { MemoryRouter } from 'react-router-dom'

describe('Layout component', () => {
  it('should render children correctly', () => {
    cy.mount(
      <MemoryRouter>
        <Layout>
          <div data-testid="child">Hello from child</div>
        </Layout>
      </MemoryRouter>
    )
    cy.get('[data-testid="child"]').should('exist')
  })

  it('should render all social media icons', () => {
    cy.mount(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    )
    cy.get('.left-socials .icon-link').should('have.length', 5)
    cy.viewport(1280, 800) // atur ke ukuran desktop

  })

  it('should show email on the right side', () => {
    cy.mount(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    )
    cy.contains('reza.maulana.aziiz@gmail.com').should('exist')
    cy.viewport(1280, 800) // atur ke ukuran desktop
  })
})
