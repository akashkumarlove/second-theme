// ✅ server/api/colors.ts

export default defineEventHandler(() => {
  return {
    colors: [
      { name: 'Red', value: '#ef4444' },
      { name: 'Blue', value: '#3b82f6' },
      { name: 'Green', value: '#22c55e' },
      { name: 'Gray', value: '#6b7280' },
      { name: 'Sky Blue', value: '#3498db' },
      { name: 'Green', value: '#2ecc71' },
      { name: 'Red', value: '#e74c3c' },
      { name: 'Dark', value: '#2c3e50' },
      { name: 'Light Gray', value: '#ecf0f1' }
    ]
  }
})
