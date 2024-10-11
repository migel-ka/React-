import Fact from "../Fact";
import { FactType } from "../type/fact";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import imgBean from "..//../images/happy-bean.png";

const FactsCards = () => {

    const [updateFacts, setUpdateFacts] = useState<FactType[]>([]);
    const [initialFacts, setInitialFacts] = useState<FactType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const getData = async () => {
        try {
            setIsError(false);
            setIsLoading(true);
            const req = await fetch("https://jellybellywikiapi.onrender.com/api/Facts?pageIndex=1&pageSize=100");
            const data = await req.json();
            setInitialFacts(data.items);
            setUpdateFacts(data.items); 
        } catch (e) {
            console.log("ERROR->", e);
            setIsError(true);
        } finally {
            setIsLoading(false); 
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={style.factGrit}>
            <img className={style.imgBean} src={imgBean} alt="" />
            {isLoading && <p> ...LOADING...</p>}
            {isError && <p>Перезагрузи страницу!</p>}
            {initialFacts.length > 0 && 
                updateFacts.map((fact) => ( <Fact data={fact} key={fact.factId} />
                ))
            }
        </div>
    );
};

export default FactsCards;
