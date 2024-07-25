import * as React from 'react';
import { useEffect, useState } from "react";
import styles from './ThirdPart.module.scss';
import { sp } from "@pnp/sp/presets/all";

interface DataItem {
    question: string;
    response: string;
}
interface ContactItem {
  Nom: string;
  Fonction: string;
  lieu:string;
  mail:string;
}



const ThirdPart : React.FC =() => {

    const [data, setData] = useState<any[]>([]);
    const [contactsData, setContactsData] = useState<any[]>([]);
    
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
 

    
    

      const fetchContactsData = async () => {
        try {
          const response = await sp.web.lists.getByTitle("ContactsV2").items.select("Nom", "Fonction", "lieu", "mail").get();
          console.log("Contacts data response:", response);
          if (response && response.length > 0) {
            return response;
          } else {
            console.error("Empty response received for contacts data.");
            return [];
          }
        } catch (error) {
          console.error("Error fetching contacts data:", error);
          return [];
        }
      };


    const fetchData = async () => {
      try {
        const response = await sp.web.lists.getByTitle("QandA_PandC").items.select( "question", "response").get();
        return response;
      } catch (error) {
        console.error("Error fetching data:", error);
        return [];
      }
    };

    useEffect(() => {
      const getData = async () => {
        const items = await fetchData();
        setData(items);
        console.log("Fetched data:", items);
        const contacts = await fetchContactsData();
        setContactsData(contacts);
        console.log("Contacts data:", contacts);
      };
      getData();
    }, []);

    const toggleResponse = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
      
    
    const renderQuestionHolders = () => {
        return data.map((item:DataItem, index) => (
          <div className={styles.tsl_question_holder_with_response} key={index}>
            <div className={styles.q_holder} onClick={() => toggleResponse(index)}>
                              <div className={styles.icon_right}>
                                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M0 0H21V21C9.40202 21 0 11.598 0 0Z" fill="#03B586"/>
                                  </svg> 
                              </div>
                              <div className={styles.q_text}>
                                  <p>{item.question}</p>
                              </div>
                              <div className={styles.icon_left} >
                                  <svg className={`${styles.nav_arrow} ${activeIndex === index ? styles.active : ''}`} width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.675 16.1053L0.797357 3.2945C-0.305772 1.99532 0.617581 0 2.32191 0H22.9615C24.6166 0 25.5554 1.89571 24.5523 3.2122L14.7903 16.023C14.0163 17.0387 12.5015 17.0787 11.675 16.1053Z" fill="#03B586"/>
                                  </svg>
                              </div>
            </div>
            <div className={`${styles.respons_holder} ${activeIndex === index ? styles.active : ''}`}>
                <p>{item.response}</p>
            </div>
          </div>
        ));
      
    };


    return(
        <div className={styles.thirdPartContainer}>
            <div className={styles.third_section}>
            <div className={styles.ts_left}>
                    <div className={styles.tsl_title}>
                    <div className={styles.ts_title_text}>
                        <p> Q&A</p>
                    </div>
                    <div className={styles.title_underline}></div>
                    </div>
                    <div className={styles.tsl_txt}>
                    <p>Explorez notre section Questions Fréquentes (Q&A) pour trouver rapidement des réponses aux interrogations courantes</p>
                    </div>
                    <div className={styles.tsl_qA_questions}>
                    <div className={styles.tsl_question_holder_with_response}>
                     {renderQuestionHolders()}
                    </div>
                </div>


            </div>

            <div className={styles.contactContainer}>
            <div className={styles.ts_right}>
                <div className={styles.tsr_titles}>
                    <div >
                        <p>Contacts clés :</p>
                    </div>
                </div>
                <div className={styles.tsr_contact_holder}>
                    <div className={styles.tsr_contact_overflow}>
                        <div className={styles.tsr_contacts_liste}>

                        {contactsData.map((Contact: ContactItem) => (  
                          
                            <div >
                              <div className={styles.contact_card_holder}>
                                <div className={styles.card_name}>
                                    <p>{Contact.Nom}</p>
                                </div>
                                <div className={styles.card_function}>
                                    <p>{Contact.Fonction}</p>
                                </div>
                                <div className={styles.card_data}>
                                    <div className={styles.lieu}>
                                        <div >
                                            <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.00016 0.333374C2.42016 0.333374 0.333496 2.42004 0.333496 5.00004C0.333496 8.50004 5.00016 13.6667 5.00016 13.6667C5.00016 13.6667 9.66683 8.50004 9.66683 5.00004C9.66683 2.42004 7.58016 0.333374 5.00016 0.333374ZM5.00016 6.66671C4.55814 6.66671 4.13421 6.49111 3.82165 6.17855C3.50909 5.86599 3.3335 5.44207 3.3335 5.00004C3.3335 4.55801 3.50909 4.13409 3.82165 3.82153C4.13421 3.50897 4.55814 3.33337 5.00016 3.33337C5.44219 3.33337 5.86611 3.50897 6.17867 3.82153C6.49123 4.13409 6.66683 4.55801 6.66683 5.00004C6.66683 5.44207 6.49123 5.86599 6.17867 6.17855C5.86611 6.49111 5.44219 6.66671 5.00016 6.66671Z" fill="#044123"/>
                                            </svg>
                                        </div>
                                        <div >
                                            <p>
                                            {Contact.lieu} 
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.mail}>
                                        <div >
                                            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V2.201L6 5.432L12 2.202V2C12 1.46957 11.7893 0.960859 11.4142 0.585786C11.0391 0.210714 10.5304 0 10 0H2ZM12 3.337L6.237 6.44C6.16416 6.47921 6.08273 6.49974 6 6.49974C5.91727 6.49974 5.83584 6.47921 5.763 6.44L0 3.337V8C0 8.53043 0.210714 9.03914 0.585786 9.41421C0.960859 9.78929 1.46957 10 2 10H10C10.5304 10 11.0391 9.78929 11.4142 9.41421C11.7893 9.03914 12 8.53043 12 8V3.337Z" fill="#044123"/>
                                                </svg>                                            
                                        </div>
                                        <div >
                                            <p>
                                              {Contact.mail}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.separtation_line}></div>
                            </div>
    
                            
                        ))}

    
  
    
   
    
                            
                        </div>
                    </div>
                    <div className={styles.tsr_underline}>

                    </div>
                </div>
            </div>
            </div>

      </div> 
        </div>
    )


}


export default ThirdPart;