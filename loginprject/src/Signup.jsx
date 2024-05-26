import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './pages/Header'
import Footer from './pages/Footer'

function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result)
                navigate('/login')
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <Header />
            {/* Signup start */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '7rem', paddingBottom: '7rem', background: 'linear-gradient(120deg,#AB7442, #ffffff)' }}>
                <div style={{ background: 'white', opacity: 0.9, borderRadius: '10px', boxShadow: '10px 10px 15px rgba(0,0,0,0.05)', width: '400px' }}>
                    <h1 style={{ textAlign: 'center', padding: '20px 0', borderBottom: '1px solid silver' }}>Signup</h1>
                    <form method="post" onSubmit={handleSubmit} style={{ padding: '0 40px 12px', boxSizing: 'border-box' }}>
                        <div style={{ position: 'relative', top: '10px', left: '5px', color: '#adadad', transform: 'translateY(-50%)', fontSize: '16px', pointerEvents: 'none', transition: '.5s' }}>Name</div>
                        <div className="txt_field" style={{ position: 'relative', marginBottom: '30px' }}>
                            <border-bottom style={{ width: '100%', height: '2px', background: '#adadad', transition: '0.5s' }} />
                            <input type="text" style={{ width: '100%', padding: '0 5px', height: '40px', fontSize: '16px', border: 'none', background: 'none', outline: 'none' }} value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div style={{ position: 'relative', top: '10px', left: '5px', color: '#adadad', transform: 'translateY(-50%)', fontSize: '16px', pointerEvents: 'none', transition: '.5s' }}>CUET Email</div>
                        <div className="txt_field" style={{ position: 'relative', marginBottom: '30px' }}>
                            <border-bottom style={{ width: '100%', height: '2px', background: '#adadad', transition: '0.5s' }} />
                            <input type="text" style={{ width: '100%', padding: '0 5px', height: '40px', fontSize: '16px', border: 'none', background: 'none', outline: 'none' }} value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <label style={{ position: 'relative', top: '10px', left: '5px', color: '#adadad', transform: 'translateY(-50%)', fontSize: '16px', pointerEvents: 'none', transition: '.5s' }}>Password</label>
                        <div className="txt_field" style={{ position: 'relative', marginBottom: '30px' }}>
                            <border-bottom style={{ width: '100%', height: '2px', background: '#adadad', transition: '0.5s' }} />
                            <input type="password" style={{ width: '100%', padding: '0 5px', height: '40px', fontSize: '16px', border: 'none', background: 'none', outline: 'none' }} value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" value="signup" style={{ width: '100%', height: '50px', border: '1px solid', background: '#AB7442', borderRadius: '25px', fontSize: '18px', color: '#e9f4fb', fontWeight: 700, cursor: 'pointer', outline: 'none' }}>Sign up</button>
                        {/* <div className="signup_link">
                            Do not have your account yet? <br /><a href="#">Contact ETE Office</a>
                        </div> */}
                    </form>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Signup
