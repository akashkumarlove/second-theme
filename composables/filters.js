import {allProducts} from '@/utility/data'

export function useFilter() {
    const selectedColor = ref(null)
    const selectedSize = ref(null)
    const SelectedCategrious = ref(null)
    const SelectedGender = ref(null)
    const selectedPrice = ref(3500)


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

            const priceMatch = product.price <= selectedPrice.value
           
            return colorMatch && sizeMatch && categrious && gender && priceMatch
        })
    })

    return {
        selectedColor ,
        selectedSize,
        filterProducts,
        allProducts,
        SelectedCategrious,
        SelectedGender,
        selectedPrice
    }
}