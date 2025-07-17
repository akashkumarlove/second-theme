import { defineStore } from 'pinia'

type ThemeSection = 'header' | 'footer' | 'button' | 'background'

interface ColorOption {
    name: string
    value: string
}

export const useThemeStore = defineStore('theme', {
    state: () => ({
        colorOptions: [] as ColorOption[],

        selected: {
            header: '',
            footer: '',
            button: '',
            background: ''
        } as Record<ThemeSection, string>
    }),

    actions: {
        async fetchColourOptions() {
            const { data, error } = await useFetch<{ colors: ColorOption[] }>('/api/colors')

            if (error.value) {
                console.error('❌ Error fetching colors:', error.value)
                return
            }

            this.colorOptions = data.value?.colors || []

            if (this.colorOptions.length >= 4) {
                this.selected.header = this.colorOptions[0].value
                this.selected.footer = this.colorOptions[1].value
                this.selected.button = this.colorOptions[2].value
                this.selected.background = this.colorOptions[3].value
            }
        },

        setColor(section: ThemeSection, color: string) {
            if (section in this.selected) {
                this.selected[section] = color
            } else {
                console.warn(`Unknown section: ${section}`)
            }
        },

        resetColors() {
            this.selected = {
                header: '#ffffff',
                footer: '#ffffff',
                button: '#000000',
                background: '#f9fafb'
            }
        }
    }
})
