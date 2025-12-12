import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import UserProfile from './UserProfile'

describe('UserProfile component', () => {
  test('renders profile elements with animation/transition classes', () => {
    render(<UserProfile />)

    const container = screen.getByText(/John Doe/i).closest('.user-profile') || screen.getByRole('region')
    // Check heading exists
    const heading = screen.getByText(/John Doe/i)
    expect(heading).toBeTruthy()

    // Check image exists and has transition classes
    const img = screen.getByAltText(/User/i)
    expect(img).toBeTruthy()
    expect(img.className).toContain('transition-transform')
    expect(img.className).toContain('hover:scale-110')

    // Check container has hover shadow and transition classes
    // The test verifies that the expected utility classes are present in markup
    const card = img.closest('div')
    expect(card).toBeTruthy()
    expect(card.className).toContain('bg-gray-100')
    expect(card.className).toContain('hover:shadow-xl')
    expect(card.className).toContain('transition-shadow')
  })
})
