import {useThemeStore} from '@/stores/themeStores'
import {useLoading} from '@/composables/loading'

export const themeLoader = async() => {
    const store = useThemeStore()
    const isLoading = useLoading()

    if(store.colorOptions.length === 0){
        isLoading.value = true
        await store.fetchColourOptions()
        isLoading.value = false
    }
}