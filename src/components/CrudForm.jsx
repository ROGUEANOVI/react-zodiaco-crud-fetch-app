import React, { useState, useEffect } from 'react';

const initialForm = {
  id: null,
  name: '',
  constellation: '',
};

function CrudForm({ createData, updateData, dataToEdit, setDataToEdit }) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!form.name || !form.constellation) {
      alert('Datos incompletos');
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = e => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? 'Editar' : 'Agregar'}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Nombre: </label>
        <input
          type='text'
          id='name'
          name='name'
          onChange={handleChange}
          value={form.name}
        />
        <label htmlFor='constellation'>Constelacion: </label>
        <input
          type='text'
          id='constellation'
          name='constellation'
          onChange={handleChange}
          value={form.constellation}
        />
        <input type='submit' value='Enviar' />
        <input type='reset' value='Limpiar' onClick={handleReset} />
      </form>
    </div>
  );
}

export default CrudForm;
