import * as React from 'react';
import styles from './FirstBanner.module.scss';
import { useState, useEffect, useRef } from 'react';

interface FirstBannerProps {
    onShowSavoirPlus: () => void;
}

const FirstBanner: React.FC<FirstBannerProps> = ({ onShowSavoirPlus }) => {
    const [showMore, setShowMore] = useState(false);
    const [isLocked, setIsLocked] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const handleButtonClick = () => {
        if (isLocked) return;

        setShowMore(prevShowMore => {
            const newShowMore = !prevShowMore;
            onShowSavoirPlus(); // Appeler la fonction à chaque clic sur le bouton
            return newShowMore;
        });

        // Verrouiller les clics pendant 2 secondes
        setIsLocked(true);
        setTimeout(() => setIsLocked(false), 2000);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
            setShowMore(false); // Cacher le contenu en cliquant à l'extérieur
            onShowSavoirPlus(); // Appeler la fonction lorsque le contenu est caché
        }
    };

    useEffect(() => {
        if (showMore) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showMore]);
    return (
        <div className={styles.FirstBanner_container}>
            <div className={styles.background}>
                <div className={styles.bg_left}>

                </div>
                <div className={styles.bg_right}>

                </div>
            </div>
            <div className={styles.second_layer}>

            </div>
            <div className={styles.content_layer}>
            <div className={styles.FB_content}>
                        <p>
                            
                           Pour vous, <br /><span style={{color:'#044124'}}> prés de vous</span>
                            
                        </p>
                    </div>
                    <div className={styles.FB_card}>
                        <div className={styles.card}>
                            <div className={styles.card_title}>
                                <p>Rencontrez Notre Équipe de People & Culture aujourd'hui !</p>
                            </div>
                            <div className={styles.card_content}>
                                <p>Découvrez les talents qui animent notre département People and Culture. Notre équipe passionnée et innovante est là pour vous inspirer et favoriser les connexions. Explorez dès maintenant notre équipe exceptionnelle.</p>
                            </div>
                            <div
                            className={`${styles.card_content} ${showMore ? styles.show : ''}`}
                            ref={contentRef}
                        >
                        </div>
                        <button className={styles.card_btn} onClick={handleButtonClick}>
                            {showMore ? 'Découvrir moins' : 'Découvrir plus'}
                        </button>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default FirstBanner;
