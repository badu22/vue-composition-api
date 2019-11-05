export default function useCounterFunc (state, anotherCount) {
    const increment = () => {
        state.count++,
        anotherCount.value++
    }

    const decrement = () => {
        state.count--,
        anotherCount.value--
    }
    
    return {
        increment,
        decrement
    }
}