import React from 'react'
import {Link} from 'react-router-dom'

const Webtoon_List = (props) => {
    return ( // 웹툰 리스트 출력
        <ul className='list_webtoon'>
            {props.list.map((webtoon,index)=>(
                <li key={index}>
                    <Link to = {`/webtoon/${webtoon.id}`} className ='link_webtoon'>
                        <img src = {webtoon.thumbnail} className ='img_webtoon' alt = {webtoon.title}/>
                        <div className ='info_webtoon'>
                            <strong className = 'tit_webtoon'>
                                {webtoon.title}
                            </strong>
                            {webtoon.artist}
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Webtoon_List
