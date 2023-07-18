import axios  from 'axios';

const URL = 'http://localhost:3002/users';

export const addUser = (data) => {
    try{
        axios.post(URL, data);
    } catch (error) {
        console.log('Error while calling API ', error.message);
    }
}

export const getUsers = async () =>{
    try{
        return await axios.get(URL);
    }
    catch(error){
        console.log('Error while calling getUsers API ',error.message);
    }
}

export const deleteUser = async (id) => {
    try{
        return await axios.delete(`${URL}/${id}`);
    }
    catch(error){
        console.log('Error while calling deleteUser API ',error.message);
    }
}

export const getUser = async (id) =>{
    try{
        return await axios.get(`${URL}/${id}`);
    }
    catch(error){
        console.log('Error while calling getUser API ',error.message);
    }
}

export const editUser = async (data, id) =>{
    try{
        return await axios.put(`${URL}/${id}`,data);
    }
    catch(error){
        console.log('Error while calling editUser API ',error.message);
    }
}

