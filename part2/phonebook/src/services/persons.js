import axios from 'axios'
const baseUrl='http://localhost:3001/persons'

const getAll = () => {
    const req = axios.get(baseUrl)
    return req.then(resp => resp.data)
}

const addNew = personInfo => {
    const req = axios.post(baseUrl, personInfo)
    return req.then(resp => resp.data)
}

const deletePerson = id => {
    const req = axios.delete(`${baseUrl}\\${id}`)
    return req.then(resp => resp.data)
}

const updateNumber = (id, newInfo) => {
    const req = axios.put(`${baseUrl}\\${id}`, newInfo)
    return req.then(resp => resp.data)
}

const PersonService = {
    getAll,
    addNew,
    updateNumber,
    deletePerson
}

export default PersonService