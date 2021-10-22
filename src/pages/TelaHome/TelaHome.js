import './TelaHome.css';
import Phone from '../../images/smartphone.jpg';
import Mail from '../../images/gmail.png';
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
                        <h2>Cadastro e registro de clientes</h2>
                        <img src={Laptop} alt="Card Icon de Laptop"></img>    
                        <Button name="Cadastro de clientes"/>                             
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <h2>Acesso rápido e fácil a todos os dados</h2>
                        <img src={Laptop} alt="Card Icon de Laptop"></img>    
                        <Button name="Busca de clientes"/> 
                    </Grid>

                    <Grid item xs={12} md={4}>   
                        <h2>Gerencie e organize sua base de clientes</h2>
                        <img src={Laptop} alt="Card Icon de Laptop"></img>      
                        <Button name="Gerenciar base de clientes"/> 
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
            <h1>Torne seu negócio totalmente digital</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at pulvinar ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ipsum augue, fringilla ac turpis id, feugiat venenatis dui. Proin et mi et ante porttitor pellentesque. Vestibulum cursus convallis neque. Etiam in pretium dui. Quisque interdum massa nec tellus porta, id cursus lacus aliquam. Sed pulvinar in dolor in sollicitudin.
            </p>
            <br></br>  
            <div>
             <img src={Phone} alt="Imagem de sistema" className="img-resize"></img>
            </div>
            <Button name="Quero saber mais"/> 
            </Grid>        
        </Grid>
        </div>

        <br></br>
        <hr className="divider"></hr>

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
            <h1>Soluções para você</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at pulvinar ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ipsum augue, fringilla ac turpis id, feugiat venenatis dui. Proin et mi et ante porttitor pellentesque. Vestibulum cursus convallis neque. Etiam in pretium dui. Quisque interdum massa nec tellus porta, id cursus lacus aliquam. Sed pulvinar in dolor in sollicitudin.
            </p>
            <br></br>
            <div>
             <img src={System} alt="Imagem de sistema" className="img-resize"></img>
            </div>
            <Button name="Solicitar Projeto"/> 
            </Grid>        
        </Grid>
        </div>

        <br></br>
        <br></br>
        <br></br>

        <div className="footer">
            <img src={Mail} alt="Imagem de sistema"></img>      
            <h3><i>Created by - MLP Soluções Digitais</i></h3>     
            <a href="https://www.linkedin.com/in/mateus-leite-1021a716b" className="link-default">
                <p>Acesse nosso perfil nas Redes Sociais (Linkedin)</p>
            </a>                      
        </div>
        
        </>
    )
}