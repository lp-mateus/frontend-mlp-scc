import './TelaHome.css';
import Laptop from '../../images/laptop.png';
import System from '../../images/computer.jpg';
import Grid from '@mui/material/Grid';
import Button from '../../components/defaultButton';
//import TopBar from '../../components/topBar';

export function TelaHome(){
    return(
        <>
        
        <div className="bg-home">
            <Grid 
                container 
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"  
                align="center"             
            >

                <Grid item xs={0} md={4}>                                      
                </Grid>

                <Grid item xs={12} md={4} justify="center">
                    <br></br>
                    <h1 className="default-text">Plataforma SCC</h1> 
                    <p className="default-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at pulvinar ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ipsum augue, fringilla ac turpis id, feugiat venenatis dui. Proin et mi et ante porttitor pellentesque. Vestibulum cursus convallis neque. Etiam in pretium dui. Quisque interdum massa nec tellus porta, id cursus lacus aliquam. Sed pulvinar in dolor in sollicitudin.
                    </p>
                    <br></br>
                    <Button name="Realizar Cadastro"/>
                </Grid>

                <Grid item xs={0} md={4}>                      
                </Grid>
            </Grid>
        </div>

        <br></br>

        <div className="config-services">
            <h1>Serviços da Plataforma</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at pulvinar ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ipsum augue, fringilla ac turpis id, feugiat venenatis dui. Proin et mi et ante porttitor pellentesque. Vestibulum cursus convallis neque. Etiam in pretium dui. Quisque interdum massa nec tellus porta, id cursus lacus aliquam. Sed pulvinar in dolor in sollicitudin.
            </p>
            
            <br></br>
            <br></br>

            <div>         
                <Grid 
                    container 
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"  
                    align="center"             
                >

                    <Grid item xs={12} md={4}>  
                        <h3>Cadastro e Registro de Clientes</h3>
                        <img src={Laptop} alt="Card Icon de Laptop"></img>    
                        <Button name="Realizar Cadastro"/>                                
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <h3>Cadastro e Registro de Clientes</h3>
                        <img src={Laptop} alt="Card Icon de Laptop"></img>    
                        <Button name="Realizar Cadastro"/> 
                    </Grid>

                    <Grid item xs={12} md={4}>   
                        <h3>Cadastro e Registro de Clientes</h3>
                        <img src={Laptop} alt="Card Icon de Laptop"></img>    
                        <Button name="Realizar Cadastro"/>   
                    </Grid>
                </Grid>
                <br></br>
                <hr className="divider"></hr>
            </div>
        </div>

        <br></br>

        <div className="cofig-contact">
        <Grid 
            container 
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"  
            align="center"             
        >
            <Grid item xs={12} md={12}>
            <h1>Contato - Saiba Mais</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at pulvinar ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ipsum augue, fringilla ac turpis id, feugiat venenatis dui. Proin et mi et ante porttitor pellentesque. Vestibulum cursus convallis neque. Etiam in pretium dui. Quisque interdum massa nec tellus porta, id cursus lacus aliquam. Sed pulvinar in dolor in sollicitudin.
            </p>
            <br></br>
            <div>
             <img src={System} alt="Imagem de sistema" className="img-resize"></img>
            </div>
            <Button name="Entre em Contato"/> 
            </Grid>
        
        </Grid>
        </div>
        
        </>
    )
}