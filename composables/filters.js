import {allProducts} from '@/utility/data'

export function useFilter() {
    const selectedColor = ref(null)
    const selectedSize = ref(null)
    const SelectedCategrious = ref(null)
    const SelectedGender = ref(null)


    const filterProducts = computed(() => {
        return allProducts.value.filter(product => {
            
            const colorMatch = selectedColor.value ?
            product.colors.includes(selectedColor.value) : true

            const sizeMatch = selectedSize.value ?
            product.size === selectedSize.value : true

            const categrious = SelectedCategrious.value ?
            product.categrious === SelectedCategrious.value : true

            const gender = SelectedGender.value ?
            product.gender === SelectedGender.value :true
           
            return colorMatch && sizeMatch && categrious && gender
        })
    })

    return {
        selectedColor ,
        selectedSize,
        filterProducts,
        allProducts,
        SelectedCategrious,
        SelectedGender
    }
}