import React from 'react';
import { useNavigate } from 'react-router-dom';

const Clientes = ({cliente,acctionEliminar}) => {

    const navigate = useNavigate();

    const {nombre,empresa,email,telefono, notas,id} = cliente
    return ( 
        <tr className='border-b hover:bg-gray-50'>
            <td className='p-3'>{nombre}</td>
            <td className='p-3'>
                <p><span className='text-gray-500 font-bold uppercase'>Email:</span> {email}</p>
                <p><span className='text-gray-500 font-bold uppercase'>Telefono:</span> {telefono}</p>
            </td>
            <td className='p-3'>{empresa}</td>
            <td className='p-3'>
                <button className='bg-yellow-500 hover:bg-yellow-600 w-full block text-white p-2 uppercase' onClick={()=>navigate(`/clientes/${id }`)} >Ver </button>
                <button className='bg-blue-600 hover:bg-blue-700 w-full block text-white p-2 uppercase mt-3' onClick={()=>navigate(`editar/${id}`)} >Editar</button>
                <button className='bg-red-600 hover:bg-red-700 w-full block text-white p-2 uppercase mt-3' onClick={() => handleEliminar(id)}>Eliminar </button>
            </td>
            <td className='p-3'></td>

        </tr>
        
     );
}
 
export default Clientes;