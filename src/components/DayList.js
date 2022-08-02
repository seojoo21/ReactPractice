import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function DayList(){
    const days = useFetch('http://localhost:3001/days');

    // const [days, setDays] = useState([]); // 빈 배열로 만든다. 
    
    // useEffect( () => {
    //     fetch('http://localhost:3001/days') // fetch 로 API 경로 지정. promise를 반환하므로 then을 사용 
    //     .then( res => {
    //         console.log(res);
    //         return res.json() // response는 http응답이므로 실제 json이 아니기 때문에 json()을 이용해 json으로 변환하고 Promise를 반환한다. 
    //     })
    //     .then ( data => {
    //         console.log(data);
    //         setDays(data);
    //     })
    // }, []); // 상태값과 무과하게 렌더링 직후 한 번만 실행되는 작업은 빈 배열 []을 넣는다. 

    return <ul className="list_day">
        {days.map(day => (
            <li key={day.id}>
                <Link to={`/day/${day.day}`}>Day {day.day}</Link>
            </li>
        ))}
        <li></li>
    </ul>;
}