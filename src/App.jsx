import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'


function App() {

  const [invitados, setInvitados] = useState([]);

  const listarInvitados = async()=>{
      const result = await axios.get('http://www.goweddings.net/admin/lista-invitados');
      const listaOrdenada = result.data.sort((a, b)=>{
          return a.id-b.id;
      })
      setInvitados(listaOrdenada)
  }

  useEffect(()=>{
    listarInvitados();
    console.log(invitados)
  },[]);



  return (
    <>
      <header className='titulo'>
        <h1 >Lista de Invitados </h1>
        <h2> Paola y Eduardo </h2>
      </header>
      <table className='tabla'>
        <tr>
          <th className='nombreTitulo'>Nombre de Invitado</th>
          <th className='grupoTitulo'>Grupo</th>
          <th className='mesaTitulo'>Mesa</th>
          <th className='idTitulo'>ID</th>
          <th className='tokenTitulo'>Token</th>
          <th className='confirmadoTitulo'>Confirmado</th>
        </tr>
        { 
          invitados.map(( invitado ) => {
            return <tr className='fila' key={invitado.id}>
                <td className='item text-center'>{invitado.nombre}</td>
                <td className='item text-center'>{invitado.grupo}</td>
                <td className='item text-center'>{invitado.mesa || 'no asignado'}</td>
                <td className='item text-center'>{invitado.id || 'no asignado'}</td>
                <td className='item text-center'>{invitado.tokenInvitado || 'no asignado'}</td>
                <td className={invitado.confirmado ? 'confirmado text-center item ': 'no-confirmado text-center item'}>{invitado.confirmado ? 'Confirmado' : 'No Confirmo'}</td>
              </tr>
          })
        }
      </table>
    </>
    )
}

export default App
