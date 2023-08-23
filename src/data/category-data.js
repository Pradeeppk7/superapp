import action from '../assets/action.png'
import drama from '../assets/drama.png'
import fantasy from '../assets/fantasy.png'
import fiction from '../assets/fiction.png'
import horror from '../assets/horror.png'
import music from '../assets/music.png'
import romance from '../assets/romance.png'
import thriller from '../assets/thriller.png'
import western from '../assets/western.png'

const category = [
    {
        id:1,
        name:"Action",
        color:"#FF5209",
        image:<img   src={action}/>
    },
    {
        id:2,
        name:"Drama",
        color:"#D7A4FF",
        image:<img   src={drama}/>
    },{
        id:3,
        name:"Fantasy",
        color:" #FF4ADE",
        image:<img   src={fantasy}/>
    },
    {
        id:4,
        name:"Fiction",
        color:"#6CD061",
        image:<img   src={fiction}/>
    },
    {
        id:5,
        name:"Horror",
        color:"#7358FF",
        image:<img   src={horror}/>
    },
    {
        id:6,
        name:"Music",
        color:"#E61E32",
        image:<img   src={music}/>
    },{
        id:7,
        name:"Romance",
        color:"#11B800",
        image:<img   src={romance}/>
    },{
        id:8,
        name:"Thriller",
        color:"#84C2FF",
        image:<img   src={thriller}/>
    },{
        id:9,
        name:"Western",
        color:"#912500",
        image:<img   src={western}/>
    }
]

export default category;