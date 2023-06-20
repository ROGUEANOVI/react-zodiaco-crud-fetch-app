import React from 'react';

function CrudTableRow({ element, setDataToEdit, deleteData }) {
  return (
    <>
      <tr>
        <td>{element.name}</td>
        <td>{element.constellation}</td>
        <td>
          <button onClick={() => setDataToEdit(element)}>Editar</button>
          <button onClick={() => deleteData(element.id)}>Eliminar</button>
        </td>
      </tr>
    </>
  );
}

export default CrudTableRow;
