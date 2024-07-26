import { useState} from 'react'
import'./Form.css'

export default function Form() {

    const [formData, setFormData] = useState({
        title: '',
        description: ''        
    });

    // Maneja el cambio en los inputs
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData)
    };       

    return (
        <form onSubmit={handleSubmit} 
        style={{ width: '20rem', height: '30rem', backgroundColor: 'red', margin: 'auto', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'space-around'}}>
            
            <div style={{ display: 'flex', flexDirection: 'colum', alignContent: 'center', justifyContent: 'center'}}>
                <label style={{ color: 'white'}} htmlFor="title">Titulo:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </div>

            <div style={{ display: 'flex', flexDirection: 'colum', alignContent: 'center', justifyContent: 'center'}}>
                <label style={{ color: 'white'}} htmlFor="description">Contenido:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </div>       

            <button type="submit">Submit</button>
        </form>
    );
}

