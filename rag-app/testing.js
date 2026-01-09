import arr from './index.js'

const n = arr.length

const calculateCosineSimilarity = (arr1, arr2) => {
    let product = 0.0, size1 = 0.0, size2 = 0.0
    for(let i = 0; i < arr1.length; i++){
        product += (arr1[i] * arr2[i])
        size1 += arr1[i] * arr1[i]
        size2 += arr2[i] * arr2[i] 
    }
    return product / (size1 * size2)
}

for(let i = 0; i < n; i++){
    for(let j = i + 1; j < n; j++){
        const score = calculateCosineSimilarity(arr[i], arr[j])
        console.log(`Similarity score between word_${i} and word_${j} is: ${score}`)
    }
}