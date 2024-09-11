import app from './routes/book_store_routes';
import CONFIG from './config.json';


app.listen(CONFIG.PORT, () => {
    console.log(`Server is running on port ${CONFIG.PORT}`);
});
