import SideBar from "./SideBar";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid, Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';


const Noticias = () =>{
    return(
        <div>
            <SideBar/>
            <CssBaseline />
            <Container sx={{ py: 10 }} maxWidth="md">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3.8}>
                        <Card   sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                            sx={{
                                // 16:9
                                pt: '56.25%',
                              }}
                            image="/assets/n2.jpg"
                            title="victoria bisontes voleibol"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="div">
                            Victoria
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Ganan Bisontes la final de voleibol varonil en los juegos Prenacionales 2023
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Leer mas</Button>
                        </CardActions>
                        </Card>       
                    </Grid>
                    <Grid item xs={12} sm={6} md={3.8} sx={{ mr: 2 }}>
                        <Card   sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                             sx={{
                                // 16:9
                                pt: '56.25%',
                              }}
                            image="/assets/n4.jpg"
                            title="victoria bisontes voleibol"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="div">
                          
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Clausuran con Exito InnovaTecNM 2023
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                        </Card>       
                    </Grid>
                    <Grid item xs={12} sm={6} md={3.8} sx={{ mr: 2 }}>
                        <Card   sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                             sx={{
                                // 16:9
                                pt: '56.25%',
                              }}
                            image="/assets/n3.jpg"
                            title="innovatec"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               Equipo de fútbol soccer femenil del Tec Chihuahua 2 Subcampeon de los Juegos Prenacionales 2023
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                        </Card>       
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default Noticias;