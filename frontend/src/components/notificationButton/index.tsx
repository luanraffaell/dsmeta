import axios from 'axios';
import { toast } from 'react-toastify';

import icon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';
import './styles.css'

type Props = {
    saleId: number;
}

function handleClick(id : number){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
        toast.info("SMS enviado com sucesso")
    });
}
function NotificationButton({saleId}:Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick2()}>
            <img src={icon} alt="Notificar" />
        </div>
    )
}
function handleClick2(){
    toast.info("SMS enviado com sucesso")
}

export default NotificationButton