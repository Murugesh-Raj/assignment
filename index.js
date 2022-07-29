import { useState } from 'react';
import ReactDOM from 'react-dom/client';



function MyForm() {
  const [inputs, setInputs] = useState({});



  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Date:
      <input 
        type="date" 
        name="date" 
        value={inputs.date || ""} 
        onChange={handleChange}
      />
      </label>
      <br />

      <label>Amount:
        <input 
          type="number" 
          name="amount" 
          value={inputs.amount || ""} 
          onChange={handleChange}
        />
        </label>
      <br />
        
        <label>Payment Mode:
        <input 
          type="dropdown" 
          name="amount" 
          value={inputs.amount || ""} 
          onChange={handleChange}
        />
        </label>
      <br />

        <label>Remark:      
        <input 
          type="text" 
          name="remark" 
          value={inputs.remark || ""} 
          onChange={handleChange}
        />
        </label>
        <br />
        <input type="submit" />
        
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
