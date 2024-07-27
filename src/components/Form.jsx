import { useState} from 'react'

export default function Form() {

    const [formData, setFormData] = useState({
        title: '',
        description: ''        
    });

    // Maneja el cambio en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData)
    };       

    return (
        <form onSubmit={handleSubmit} 
        style={{ width: '20rem', height: '20rem', backgroundColor: 'red', margin: 'auto', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'space-around'}}>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center'}}>
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

            <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center'}}>
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

            <button type="submit">Enviar</button>
        </form>
    );
}

