import app from './app'
import message from './config/message'
import config from './config/vars'


const NAMESPACE = 'SERVER';
app.set('port', process.env.PORT || config.PORT);
//INICIAMOS SERVIDOR EN EL PUERTO 3000
app.listen(app.get('port'), () => {
    message.info(NAMESPACE, `Server is running ${app.get('port')}`);
});