import './TelaHome.css';
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
                justify="center"             
            >

                <Grid item xs={4}>                                      
                </Grid>

                <Grid item xs={4} align = "center">
                    <h1 className="default-text">Plataforma SCC</h1> 
                    <p className="default-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at pulvinar ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ipsum augue, fringilla ac turpis id, feugiat venenatis dui. Proin et mi et ante porttitor pellentesque. Vestibulum cursus convallis neque. Etiam in pretium dui. Quisque interdum massa nec tellus porta, id cursus lacus aliquam. Sed pulvinar in dolor in sollicitudin.
                    </p>
                    <br></br>
                    <div className="align">
                        <Button name="Realizar Cadastro"/> 
                    </div>
                </Grid>

                <Grid item xs={4}>                      
                </Grid>

            </Grid>
        </div>


        </>
    )
}