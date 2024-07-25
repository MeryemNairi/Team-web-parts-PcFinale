import * as React from 'react';
import styles from './SecondPart.module.scss';
import { useState } from "react";


const SecondBanner : React.FC = () => {

    const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const openPopup1 = () => setIsOpen1(true);
  const closePopup1 = () => setIsOpen1(false);
  
  const openPopup2 = () => setIsOpen2(true);
  const closePopup2 = () => setIsOpen2(false);
  
  const openPopup3 = () => setIsOpen3(true);
  const closePopup3 = () => setIsOpen3(false);


    return (
        <div className={styles.SecondBanner_container}>


        <div className={styles.second_section}>
        <div className={styles.ss_title}>
          <p>
            Avantages sociaux:
          </p>
        </div>
        <div className={styles.ss_content}>
          <p>
            Découvrez les avantages sociaux méticuleusement conçus par Cnexia pour soutenir votre bien-être financier et personnel. Profitez de régimes d'assurance compétitifs, de programmes d'épargne de retraite complémentaire et de nombreux autres avantages visant à enrichir votre expérience au sein de notre entreprise.
          </p>
        </div>
        <div className={styles.ss_cards}>
          
        <div className={styles.ss_card}>
            <div className={styles.card_image_holder}>
              <div className={styles.card_image}>
              <img src="/sites/CnexiaForEveryone/Assets/CIMR.png" alt="" />
              </div>
              <div className={styles.image_filter}></div>
            </div>
            <div className={styles.cart_content_holder}>
              <div className={styles.card_title}>
                <p>
                  Retraite complémentaire CIMR
                </p>
              </div>
              <div className={styles.card_content}>
                <p>
                La CIMR est un régime de retraite complémentaire conçu pour vous accompagner tout au long de votre parcours professionnel, et vous permettre de bénéficier d’un revenu additionnel à votre régime de retraite de base de la CNSS. (Caisse Nationale de la Sécurité Sociale)

                </p>
              </div>
              <div className={styles.card_button}>
                <button className={styles.Btn_model_1} onClick={openPopup1}>
                  En apprendre davantage
                </button>
              </div>
            </div>
          </div>
          <div className={styles.ss_card}>
            <div className={styles.card_image_holder}>
              <div className={styles.card_image}>
              <img src="/sites/CnexiaForEveryone/Assets/Helth.png" alt="" />
              </div>
              <div className={styles.image_filter}></div>
            </div>
            <div className={styles.cart_content_holder}>
              <div className={styles.card_title}>
                <p>
                Soins de santé et assurance 
                </p>
              </div>
              <div className={styles.card_content}>
                <p>
                CNEXIA souscrit à une police d’Assurance Groupe Maladie au profit de son personnel en moyennant une cotisation <br /> (Part salariale :2,72%). </p>
              </div>
              <div className={styles.card_button}>
                <button className={styles.Btn_model_1} onClick={openPopup2}>
                  En apprendre davantage
                </button>
              </div>
            </div>
          </div>
          <div className={styles.ss_card}>
            <div className={styles.card_image_holder}>
              <div className={styles.card_image}>
                <img src="/sites/CnexiaForEveryone/Assets/PAE.png" alt="" />
              </div>
              <div className={styles.image_filter}></div>
            </div>
            <div className={styles.cart_content_holder}>
              <div className={styles.card_title}>
                <p>
                Programme d’aide aux employés (PAE)
                </p>
              </div>
              <div className={styles.card_content}>
                <p>
                Le PAE est un service de soutien psychologique mis à votre disposition dans le but de vous accompagner et vous aider à surmonter vos défis personnels et professionnels</p>
              </div>
              <div className={styles.card_button}>
                <button className={styles.Btn_model_1} onClick={openPopup3}>
                  En apprendre davantage
                </button>
              </div>
            </div>
          </div>

          
          {/* Add other ss_card elements as needed */}
        </div>
        {isOpen1 && (
          <div className={styles.popup_container}>
            <div className={styles.popup}>
              <div className={styles.btnHolder}>
                <button className={styles.closeBtn} onClick={closePopup1}>
                  <div className={styles.closeIcon}>

                    <svg width="15" height="15" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.51082 12.0575L15.9093 18.4487C16.2489 18.7878 16.7094 18.9784 17.1895 18.9784C17.6697 18.9784 18.1302 18.7878 18.4697 18.4487C18.8093 18.1096 19 17.6496 19 17.17C19 16.6903 18.8093 16.2304 18.4697 15.8912L12.0688 9.5L18.4685 3.10876C18.6366 2.94084 18.7698 2.7415 18.8607 2.52212C18.9517 2.30275 18.9984 2.06764 18.9984 1.83021C18.9983 1.59278 18.9514 1.35769 18.8604 1.13836C18.7694 0.919031 18.636 0.719754 18.4679 0.551908C18.2998 0.384062 18.1002 0.250935 17.8806 0.160127C17.661 0.0693201 17.4256 0.0226109 17.1879 0.0226669C16.9502 0.0227228 16.7148 0.0695426 16.4953 0.160453C16.2757 0.251364 16.0762 0.384585 15.9081 0.552511L9.51082 6.94375L3.11229 0.552511C2.94542 0.379769 2.74577 0.241953 2.525 0.147104C2.30423 0.052256 2.06677 0.0022741 1.82645 7.58123e-05C1.58614 -0.00212247 1.3478 0.0435064 1.12533 0.1343C0.902858 0.225094 0.700719 0.359235 0.530705 0.528895C0.360691 0.698555 0.226207 0.900337 0.1351 1.12247C0.0439926 1.3446 -0.00191312 1.58263 6.10735e-05 1.82267C0.00203526 2.06271 0.0518497 2.29995 0.146598 2.52056C0.241347 2.74116 0.379131 2.94071 0.551913 3.10756L6.95286 9.5L0.55312 15.8924C0.380338 16.0593 0.242554 16.2588 0.147805 16.4794C0.0530567 16.7 0.00324176 16.9373 0.00126757 17.1773C-0.000706617 17.4174 0.0451991 17.6554 0.136306 17.8775C0.227414 18.0997 0.361898 18.3014 0.531912 18.4711C0.701925 18.6408 0.904064 18.7749 1.12653 18.8657C1.349 18.9565 1.58735 19.0021 1.82766 18.9999C2.06797 18.9977 2.30544 18.9477 2.52621 18.8529C2.74698 18.758 2.94662 18.6202 3.1135 18.4475L9.51082 12.0575Z" fill="white"/>
                    </svg>

                  </div>
                </button>
                
              </div>
              <div className={styles.PopupContent}>
                <p>
                    <h1 style={{color:'#00966C', textAlign:'center'}}>Retraite complémentaire CIMR</h1><br /><br />
                    La CIMR est un régime de retraite complémentaire conçu pour vous accompagner tout au long de votre parcours professionnel, et vous permettre de bénéficier d’un revenu additionnel à votre régime de retraite de base de la CNSS. (Caisse Nationale de la Sécurité Sociale) <br />
                    <br /><br /><h3 style={{color:'#00966C', textAlign:'center'}}>Avantages de la CIMR
                    </h3><br />
                    <h4>Sécurité financière accrue :</h4><br />

                    La CIMR garantit une gestion prudente des fonds et offre des avantages fiscaux. Vous bénéficierez ainsi d'une épargne-retraite solide tout en pouvant potentiellement réduire votre charge fiscale.<br/><br />
                    <h4>Part Salariale :</h4><br />
                    L’adhésion à la CIMR est volontaire. Conformément à la réglementation, vous aurez une part salariale à verser à la CIMR. Si vous remplissez les conditions d’éligibilité, la part salariale sera déduite automatiquement de votre salaire chaque mois. N'hésitez pas à prendre contact avec l'équipe RH Fès ou Rabat pour en savoir plus sur les conditions d'éligibilité et les taux disponibles.
                    <br /><br />

                    <h4>Part Patronale :</h4><br />
                    Notre engagement envers votre bien-être financier se traduit par notre contribution de la part patronale à la CIMR, si toutefois vous souhaitez y adhérer. Cette contribution s’ajoutera à votre épargne-retraite.

                    <h4>Date limite de dépôt de demande adhésion :</h4><br />
                    Vous pouvez soumettre votre demande d'adhésion à la CIMR à l'équipe Administrative en remplissant le formulaire disponible <a href="https://cnexia.sharepoint.com/sites/Cnet/Assets/BTA.pdf" style={{color:'#00966C'}}>Télécharger</a>. Assurez-vous de soumettre votre demande avant le 10 de chaque mois pour qu'elle soit prise en compte dans la paie du mois en cours

                </p>
              </div>
            </div>
          </div>
        )}

{isOpen2 && (
          <div className={styles.popup_container}>
            <div className={styles.popup}>
              <div className={styles.btnHolder}>
                <button className={styles.closeBtn} onClick={closePopup2}>
                  <div className={styles.closeIcon}>

                    <svg width="15" height="15" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.51082 12.0575L15.9093 18.4487C16.2489 18.7878 16.7094 18.9784 17.1895 18.9784C17.6697 18.9784 18.1302 18.7878 18.4697 18.4487C18.8093 18.1096 19 17.6496 19 17.17C19 16.6903 18.8093 16.2304 18.4697 15.8912L12.0688 9.5L18.4685 3.10876C18.6366 2.94084 18.7698 2.7415 18.8607 2.52212C18.9517 2.30275 18.9984 2.06764 18.9984 1.83021C18.9983 1.59278 18.9514 1.35769 18.8604 1.13836C18.7694 0.919031 18.636 0.719754 18.4679 0.551908C18.2998 0.384062 18.1002 0.250935 17.8806 0.160127C17.661 0.0693201 17.4256 0.0226109 17.1879 0.0226669C16.9502 0.0227228 16.7148 0.0695426 16.4953 0.160453C16.2757 0.251364 16.0762 0.384585 15.9081 0.552511L9.51082 6.94375L3.11229 0.552511C2.94542 0.379769 2.74577 0.241953 2.525 0.147104C2.30423 0.052256 2.06677 0.0022741 1.82645 7.58123e-05C1.58614 -0.00212247 1.3478 0.0435064 1.12533 0.1343C0.902858 0.225094 0.700719 0.359235 0.530705 0.528895C0.360691 0.698555 0.226207 0.900337 0.1351 1.12247C0.0439926 1.3446 -0.00191312 1.58263 6.10735e-05 1.82267C0.00203526 2.06271 0.0518497 2.29995 0.146598 2.52056C0.241347 2.74116 0.379131 2.94071 0.551913 3.10756L6.95286 9.5L0.55312 15.8924C0.380338 16.0593 0.242554 16.2588 0.147805 16.4794C0.0530567 16.7 0.00324176 16.9373 0.00126757 17.1773C-0.000706617 17.4174 0.0451991 17.6554 0.136306 17.8775C0.227414 18.0997 0.361898 18.3014 0.531912 18.4711C0.701925 18.6408 0.904064 18.7749 1.12653 18.8657C1.349 18.9565 1.58735 19.0021 1.82766 18.9999C2.06797 18.9977 2.30544 18.9477 2.52621 18.8529C2.74698 18.758 2.94662 18.6202 3.1135 18.4475L9.51082 12.0575Z" fill="white"/>
                    </svg>

                  </div>
                </button>
                
              </div>
              <div className={styles.PopupContent}>
                <p>
                    <h1 style={{color:'#00966C', textAlign:'center', fontWeight:'600'}}>Soins de santé et assurance </h1><br /><br />
                    CNEXIA souscrit à une police d’Assurance Groupe Maladie au profit de son personnel en moyennant une cotisation (Part salariale :2,72%). <br /> <br />
                    <ol>
                        <li> Le taux de remboursement des frais médicaux et pharmaceutiques à raison de 90 % </li> <br />
                        <li> L’éligibilité pour les soins dentaires, optiques et maternité est ouverte après 6 mois d’ancienneté.</li>
                        
                    </ol> <br />

                    
                </p>
              </div>
            </div>
          </div>
        )}

{isOpen3 && (
          <div className={styles.popup_container}>
            <div className={styles.popup}>
              <div className={styles.btnHolder}>
                <button className={styles.closeBtn} onClick={closePopup3}>
                  <div className={styles.closeIcon}>

                    <svg width="15" height="15" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.51082 12.0575L15.9093 18.4487C16.2489 18.7878 16.7094 18.9784 17.1895 18.9784C17.6697 18.9784 18.1302 18.7878 18.4697 18.4487C18.8093 18.1096 19 17.6496 19 17.17C19 16.6903 18.8093 16.2304 18.4697 15.8912L12.0688 9.5L18.4685 3.10876C18.6366 2.94084 18.7698 2.7415 18.8607 2.52212C18.9517 2.30275 18.9984 2.06764 18.9984 1.83021C18.9983 1.59278 18.9514 1.35769 18.8604 1.13836C18.7694 0.919031 18.636 0.719754 18.4679 0.551908C18.2998 0.384062 18.1002 0.250935 17.8806 0.160127C17.661 0.0693201 17.4256 0.0226109 17.1879 0.0226669C16.9502 0.0227228 16.7148 0.0695426 16.4953 0.160453C16.2757 0.251364 16.0762 0.384585 15.9081 0.552511L9.51082 6.94375L3.11229 0.552511C2.94542 0.379769 2.74577 0.241953 2.525 0.147104C2.30423 0.052256 2.06677 0.0022741 1.82645 7.58123e-05C1.58614 -0.00212247 1.3478 0.0435064 1.12533 0.1343C0.902858 0.225094 0.700719 0.359235 0.530705 0.528895C0.360691 0.698555 0.226207 0.900337 0.1351 1.12247C0.0439926 1.3446 -0.00191312 1.58263 6.10735e-05 1.82267C0.00203526 2.06271 0.0518497 2.29995 0.146598 2.52056C0.241347 2.74116 0.379131 2.94071 0.551913 3.10756L6.95286 9.5L0.55312 15.8924C0.380338 16.0593 0.242554 16.2588 0.147805 16.4794C0.0530567 16.7 0.00324176 16.9373 0.00126757 17.1773C-0.000706617 17.4174 0.0451991 17.6554 0.136306 17.8775C0.227414 18.0997 0.361898 18.3014 0.531912 18.4711C0.701925 18.6408 0.904064 18.7749 1.12653 18.8657C1.349 18.9565 1.58735 19.0021 1.82766 18.9999C2.06797 18.9977 2.30544 18.9477 2.52621 18.8529C2.74698 18.758 2.94662 18.6202 3.1135 18.4475L9.51082 12.0575Z" fill="white"/>
                    </svg>

                  </div>
                </button>
                
              </div>
              <div className={styles.PopupContent}>
                <p>
                    <h1 style={{color:'#00966C', textAlign:'center'}}>Programme d’aide aux employés (PAE) </h1><br /><br />
                    <br />

                    Le PAE est un service de soutien psychologique mis à votre disposition dans le but de vous accompagner et vous aider à surmonter vos défis personnels et professionnels
                    Le PAE est destiné à vous tous ainsi qu’à votre famille 24/7
                    Le service est gratuit et strictement confidentiel <br /><br />
                    <h3 style={{color:'#00966C'}}>Pour joindre votre programme d’aide, composez le : <span style={{color:'red'}}>+212-5 30 00 39 63</span></h3>
                    
                    
                </p>
              </div>
            </div>
          </div>
        )}
            </div>

        </div>
    )
}

export default SecondBanner;