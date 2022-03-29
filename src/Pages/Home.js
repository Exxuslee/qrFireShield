import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import { useLocation } from "react-router-dom";
import Logo0 from '../assets/0.jpg'
import Logo1 from '../assets/1.jpg'
import {Card, Container} from "react-bootstrap";
import jj from './body'

const Home = observer(() => {

    const query = new URLSearchParams(useLocation().search);
    const id = query.get("id");
    const ft = query.get("ft");
    const [Logo, setLogo] = useState(Logo0);


    useEffect(() => {
        switch (ft) {
            case '0': return setLogo(Logo0);
            case '1': return setLogo(Logo1);
            default: return setLogo(Logo0);
        };
    }, []);

    return (
        <div className="bg-dark d-flex align-items-center justify-content-center p-2">
                <Card  style={{ width: '18rem'}}>
                    <Card.Title className="bg-danger d-flex align-items-center justify-content-center mt-2">Пожарный щит № {id}</Card.Title>
                    <Card.Img variant="left" src={Logo} />
                    <Card.Body>

                        <Card.Text>
                            <h6>
                                <p>Цех: <b>{jj[id].ceh}</b></p>
                                <p>Место установки: <b>{jj[id].place}</b></p>
                                <p>Ответственный: <b>{jj[id].master}</b></p>
                                <p>Ф.И.О.: <b>{jj[id].fio}</b></p>
                            </h6>
                            <li>огнетушитель: {jj[id].grenade}</li>
                            <li>багор: {jj[id].bagor}</li>
                            <li>лом: {jj[id].lom}</li>
                            <li>ведро: {jj[id].vedro}</li>
                            <li>кошма: {jj[id].koshma}</li>
                            <li>лопата: {jj[id].lopata}</li>
                            <li>топор: {jj[id].topor}</li>
                        </Card.Text>
                    </Card.Body>
                </Card>
        </div>


    )
});

export default Home;