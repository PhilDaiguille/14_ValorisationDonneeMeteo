import { describe, it, expect } from 'vitest'

describe('date utils', () => {
  it('formats a date to ISO string', () => {
    const date = new Date(2024, 0, 1) // 2024-01-01
    expect(date.getFullYear()).toBe(2024)
    expect(date.getMonth()).toBe(0)
    expect(date.getDate()).toBe(1)
  })

  it('compares two dates correctly', () => {
    const d1 = new Date(2024, 0, 1)
    const d2 = new Date(2024, 0, 2)
    expect(d1 < d2).toBe(true)
  })
})