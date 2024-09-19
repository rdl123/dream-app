import React, { useState, useEffect } from 'react';
import InputField from './InputField';
import IconText from './IconText'; // Assuming this is the icon component
import '../styles/Form.css';

import {
  PAGE1_ICON,
  PAGE2_ICON,
  PAGE3_ICON,
  PAGE4_ICON,
  PAGE5_ICON,
  PAGE6_ICON,
  PAGE7_ICON,
} from '../constants/imageConstants';
import { fetchIpData } from '../services/apiService';

const Form = () => {
  const [name, setName] = useState('');
  const [intention, setIntention] = useState('');
  const [role, setRole] = useState('');
  const [submit, setSubmit] = useState(false); 
  const [error, setError] = useState(null);

  useEffect(() => {
    if (submit) {
      const validateIp = async () => {
        try {
          const sum = await fetchIpData();
          if (sum > 100) {
            alert('OK');
          } else {
            alert('KO');
          }
        } catch (error) {
          console.error('Error fetching IP address:', error);
          setError('An error occurred while fetching the IP address. Please try again later.');
        }
      };

      validateIp();
      setSubmit(false); 
    }
  }, [submit]); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  return (
    <div className="form-container">
      <div className="left-section">
        <h2 className="left-section-title">Pour commencer...</h2>
        <span className="sub-title">
          Faire votre Shynlei, jouer avec, c'est l'occasion d'écouter vos rêves, de les partager et de prendre confiance dans votre richesse
        </span>
        <form id="dream-form" onSubmit={handleSubmit}>
          <InputField 
            label="Nom et prénom" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <InputField 
            label="Mon intention" 
            id="intention" 
            value={intention} 
            onChange={(e) => setIntention(e.target.value)} 
          />
          <InputField 
            label="Mon rôle" 
            id="role" 
            value={role} 
            onChange={(e) => setRole(e.target.value)} 
          />
        </form>
      </div>

      <div className="right-section">
        <h2 className="right-section-title">Votre Shynlei c’est...</h2>
        <span className="right-section-sub-title">
          7 etapes, 2 fiches pour prendre not des rencontres,1 page pour eclairer le sens, 3 interpretationspour vous aider..
        </span>
        <div className="icon-section">
          <IconText icon={PAGE1_ICON} text="1. Le rêve libère l'expression" />
          <IconText icon={PAGE2_ICON} text="2. Le sens éclaire le parcours" />
          <IconText icon={PAGE3_ICON} text="3. La différence rend unique" />
          <IconText icon={PAGE4_ICON} text="4. La valeur humaine met en mouvement" />
          <IconText icon={PAGE5_ICON} text="5. La clé exprime le style" />
          <IconText icon={PAGE6_ICON} text="6. Le parcours associe rêve et réalité" />
          <IconText icon={PAGE7_ICON} text="7. Le ciel bleu révèle l'alignement" />
        </div>
        <button type="submit" form="dream-form" className="submit-btn">
          Exprimer mes rêves &gt;
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Form;
