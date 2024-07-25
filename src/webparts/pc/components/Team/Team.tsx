import * as React from 'react';
import styles from './Team.module.scss'; // Ensure this file is named correctly

const Team: React.FC = () => {
    return (
        <div className={styles.Team}>
            <div className={styles.Team_container}>
               <div className={styles.Team_title}>
                    <p>
                        Notre équipe <br /><span style={{fontSize:'24px', fontWeight:'700', color:'#044124'}}>Équipe People & Culture</span>
                    </p>
               </div>
               <div className={styles.members}>
                    <div className={styles.member_card}>
                    <div className={styles.holder}>
                        <div className={styles.img_holder}>
                            <img src="/sites/CnexiaForEveryone/Assets/SofiaV2.png" alt="" />
                        </div>
                    </div>
                        <div className={styles.name_function}>
                            <p>
                            Sofia Machmoum
                            <br /><span style={{fontSize:'14px', fontWeight:'400', color:'#8FCFA7'}}>People & Culture Director</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.member_card}>
                    <div className={styles.holder}>
                        <div className={styles.img_holder}>
                            <img src="/sites/CnexiaForEveryone/Assets/SoumayaV2.png" alt="" />
                        </div>
                    </div>
                        <div className={styles.name_function}>
                            <p>
                            Soumaya Acheache <br /><span style={{fontSize:'14px', fontWeight:'400', color:'#8FCFA7'}}>People Operations</span>
                            </p>
                        </div>
                    </div>

                    <div className={styles.member_card}>
                    <div className={styles.holder}>
                        <div className={styles.img_holder}>
                            <img src="/sites/CnexiaForEveryone/Assets/AdilV2.png" alt="" />
                        </div>
                        </div>
                        <div className={styles.name_function}>
                            <p>
                            Adil Alaoui Mhamedi <br /><span style={{fontSize:'14px', fontWeight:'400', color:'#8FCFA7'}}>People Operations</span>
                            </p>
                        </div>
                    </div>

                    <div className={styles.member_card}>
                    <div className={styles.holder}>
                        <div className={styles.img_holder}>
                            <img src="/sites/CnexiaForEveryone/Assets/SaraV2.png" alt="" />
                        </div>
                    </div>
                        <div className={styles.name_function}>
                            <p>
                            Sara Khalouq <br /><span style={{fontSize:'14px', fontWeight:'400', color:'#8FCFA7'}}>People Advisor</span>
                            </p>
                        </div>
                    </div>
                    

                    


               </div>
            </div>
        </div>
    );
};

export default Team;
