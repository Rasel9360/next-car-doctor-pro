export const getServiceData = async () => {
    const res = await fetch('http://localhost:3000/services/api/get-all')
    const data = await res.json()
    // console.log(data);
    return data
}

export const getServiceDetails = async (id) => {
    const res = await fetch(`http://localhost:3000/services/api/${id}`)
    const data = await res.json()
    // console.log(data);
    return data
}