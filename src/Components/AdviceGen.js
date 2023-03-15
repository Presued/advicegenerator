import 'bootstrap/dist/css/bootstrap.min.css';
import Advice from '../Services/DataService';
import { useState, useEffect } from "react";
import '../Components/AdviceGen.css';
import { Row, Col } from 'react-bootstrap';
import MyImage from '../Asset/pattern-divider-desktop.svg';
import Dice from '../Asset/icon-dice.svg';

export default function AdviceGen() {
    const [Input, SetInput] = useState('');
    const [id, SetId] = useState('')
    const RenderAdvice = async () => {
        const data = await Advice()
        SetInput(data.advice);
        SetId(data.id);
        console.log(data.advice)
        console.log(data.id)
    }
    useEffect(() => {
        RenderAdvice()
    }, [])
    return (
        <div className='Cuz'>

            <div className='cuzAdviceColor'>
                <Row>
                    <Col className='hi'> 
                        <h1 className='ADV'>A D V I C E # {id}</h1>
                        <h3 className='ADGH'>"{Input}"</h3>
                        <img src={MyImage} alt='Divder' />
                        <br />
                        <div className='dCuz'>
                            <img className='imgCuz' src={Dice} alt='Dice' onClick={() => RenderAdvice()} />
                        </div>
                    </Col>
                </Row>
            </div>



        </div>
    )
}

// // import 'bootstrap/dist/css/bootstrap.min.css';
// import GetAdvice from '../Services/DataServices';
// import { useState, useEffect } from "react";
// import { Container } from 'react-bootstrap';
// export default function Main(){
//     const [advice, SetAdvice] = useState('');
//     const [id, SetId] = useState('')
//     const RenderAdvice = async () => {
//         const data = await GetAdvice()
//         SetAdvice(data.advice);
//         SetId(data.id);
//         console.log(data.advice)
//         console.log(data.id)
//     }
//     useEffect(() => {
//         RenderAdvice()
//     },[])
//     return(
//         <Container >
//             <h1 className='text-center'>The Advise of the day is : {advice}</h1>
//             <h1 className='text-center'>with  Id : {id}</h1>
//             <div className='text-center'>
//             <button className='middle' onClick={() => RenderAdvice()}>Load Advise</button>
//             </div>
//         </Container>
//     );
// }