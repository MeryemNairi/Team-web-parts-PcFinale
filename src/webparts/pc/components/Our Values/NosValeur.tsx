import * as React from 'react';
import styles from './NosValeur.module.scss';

import { EventsItem, fetchLatestNewsData } from './Fetchdata/FetchData'; // Assuming you have the service file





export interface ICommentV1Props {
    description: string;
  }
  
  export interface ICommentV1State {
    newComment: string;
    userEmail: string;
  }
  
  

const UpEvents: React.FC = () => {
    const [events, setEvents] = React.useState<EventsItem[]>([]); // State to hold the fetched events

    // Fetch data on component mount
    React.useEffect(() => {
        async function fetchEvents() {
            try {
                const data = await fetchLatestNewsData();
                setEvents(data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        }
        fetchEvents();
    }, []);

   
         //------------------------------->scrolling behavior<----------------
         const cardsContainerRef = React.useRef<HTMLDivElement>(null);


         const scrollLeft = () => {
            if (cardsContainerRef.current) {
                cardsContainerRef.current.scrollBy({ left: -500, behavior: 'smooth' });
            }
        };
    
        const scrollRight = () => {
            if (cardsContainerRef.current) {
                cardsContainerRef.current.scrollBy({ left: 500, behavior: 'smooth' });
            }
        };
  

  



  

  
    
    
    return (
        <div className={styles.UpEvents}>
            <div className={styles.UpE_left}>

                <div className={styles.UpEl_title}>
                    <div className={styles.title}>
                            <p>
                                Nos valeurs
                            </p>
                    </div>
                </div>

                <div className={styles.CardGridContain} ref={cardsContainerRef}>
                    <div className={styles.Cards_container} >

                        
                    {events.map((event, index) => (
                        
                        <div key={index} className={styles.card}>
                            <div className={styles.card_icon_bcg}>
                                <img src={event.icone} />
                            </div>
                            <div className={styles.card_All_content}>
                                <div className={styles.card_image}>
                                    <div className={styles.img_holder}>
                                        <img src={event.icone} />

                                    </div>              
                                </div>
                                <div className={styles.card_content}>
                                <div className={styles.EvTitle}>
                                    <p>{event.Title}</p>
                                    </div>
                                    <div className={styles.EvDescription}>
                                    <p>{event.content}</p>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                     ))}

                        




                    </div>
                </div>

                <div className={styles.controll_btns}>

                             <button className={styles.btn_left} onClick={scrollLeft}>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.33684 8.00745L7.34001 12.0088M3.33684 8.00745L7.3382 4.00428M3.33684 8.00745L12.6755 8.00534" stroke="#044123" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            <button className={styles.btn_right} onClick={scrollRight}>
                                <p>
                                    Défilez
                                </p>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6749 8.00745L8.67171 12.0088M12.6749 8.00745L8.67352 4.00428M12.6749 8.00745L3.33626 8.00534" stroke="#044123" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                </div>

                


            </div>
            
            


            
        </div>
    );
};

export default UpEvents;

