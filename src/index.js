import axios from "axios";
import Notiflix from 'notiflix';

axios.get('/users')
  .then(res => {
    console.log(res.data);
  });
  Notiflix.Notify.success('Операція завершена успішно!');